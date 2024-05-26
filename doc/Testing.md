# 4 Testing

## End-to-End Test mit Cypress

Für die Techland-Plattform wurden End-to-End-Tests mit Cypress durchgeführt, um die Funktionalität der gesamten Anwendung sicherzustellen. Cypress ist ein leistungsfähiges Test-Framework, das es ermöglicht, die Benutzerinteraktionen und die UI-Elemente der Webanwendung zu testen. Die Tests wurden so konzipiert, dass sie alle wesentlichen Benutzeraktionen abdecken, einschließlich der Registrierung, des Logins, der Suche nach Geräten, der Filterung von Geräten, der Gerätemiete und der Verwaltung von Mietvorgängen.

### Implementierung der Tests

### 1. Initiale Vorbereitung
Zunächst wurden alle notwendigen Abhängigkeiten installiert, einschließlich Cypress. Dies erfolgte über den Befehl `npm install -D cypress`. Anschließend wurde Cypress durch Hinzufügen eines Skripts in der `package.json` gestartet:

```json
"scripts": {
  "cypress": "npx cypress open"
}
```
Nach dem Start von Cypress über das Cypress UI wurden die erforderlichen Konfigurationsdateien erstellt, einschließlich einer tsconfig.json im Cypress-Ordner, um TypeScript-Support zu gewährleisten.

### 2. Erstellen eines leeren Tests
Ein erster Test mit dem Namen myfirstspec.cy.ts wurde erstellt und so angepasst, dass er die Login-Seite der Anwendung testet. Der Test stellt sicher, dass die Login-Seite korrekt geladen wird und das erforderliche Element vorhanden ist:

```json
describe('Login Page', () => {
  it('should show login page', () => {
    cy.clearAllSessionStorage();
    cy.visit('http://localhost:8080');
    cy.get('.card-header').should('contain', 'Login');
  });
});
```
### 3. Benutzeranmeldung und Datenbank-Reset
Da viele Funktionen nur im angemeldeten Zustand getestet werden können, wurden die Anmeldeinformationen in einer cypress.env.json Datei gespeichert und in der cypress.config.ts Datei referenziert. Ein Endpoint zum Löschen aller Jobs in der Datenbank wurde hinzugefügt, um sicherzustellen, dass die Tests mit einem definierten Systemzustand beginnen.

### 4. Umfangreiche Testfälle
Es wurden umfangreiche Testfälle entwickelt, um die verschiedenen Benutzeraktionen zu überprüfen:

Registrierung und Login: Tests, die sicherstellen, dass Benutzer sich registrieren und anmelden können.
Gerätesuche und Filterung: Tests, die die Suche und Filterung von Geräten auf der Plattform überprüfen.
Gerätemiete und Verwaltung: Tests, die die Miete von Geräten sowie die Verwaltung der Mietvorgänge durch den Administrator abdecken.
Ein Beispiel für einen administrativen Test, der Jobs verwaltet, sieht wie folgt aus:

```json
describe("Manage jobs as admin", () => {
  before(() => {
    cy.clearAllSessionStorage();
    cy.visit("http://localhost:8080");
    cy.get("#username").type(Cypress.env()["admin"].email);
    cy.get("#password").type(Cypress.env()["admin"].password);
    cy.contains("button", "Log in").click();
    cy.get("h1").should("contain", "Welcome");
    cy.request({
      method: "DELETE",
      url: "http://localhost:8080/api/job",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("jwt_token"),
      },
    });
  });

  it("visit jobs page", () => {
    cy.get('a[href="/devices"]').click();
    cy.location("pathname").should("equal", "/devices");
  });
});

```
### Fazit
Alle End-to-End-Tests mit Cypress wurden erfolgreich durchgeführt. Die Tests deckten alle wichtigen Funktionen der Techland-Plattform ab, und es wurden keine Fehler festgestellt. Die erfolgreiche Durchführung der Tests bestätigt, dass die Plattform wie erwartet funktioniert und die Benutzerinteraktionen zuverlässig sind.


![CypressTesting](/doc/figures/CypressTesting.png)

