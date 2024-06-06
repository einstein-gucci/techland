# 4 Testing

## 4.1 End-to-End Test mit Cypress

Für die Techland-Plattform wurden End-to-End-Tests mit Cypress durchgeführt, um die Funktionalität der gesamten Anwendung sicherzustellen. Cypress ist ein leistungsfähiges Test-Framework, das es ermöglicht, die Benutzerinteraktionen und die UI-Elemente der Webanwendung zu testen. Die Tests wurden so konzipiert, dass sie alle wesentlichen Benutzeraktionen abdecken, einschließlich der Registrierung, des Logins, der Suche nach Geräten, der Filterung von Geräten, der Gerätemiete und der Verwaltung von Mietvorgängen.

### 4.1.1 Implementierung der Tests

#### 4.1.1.1 Initiale Vorbereitung
Zunächst wurden alle notwendigen Abhängigkeiten installiert, einschließlich Cypress. Dies erfolgte über den Befehl `npm install -D cypress`. Anschließend wurde Cypress durch Hinzufügen eines Skripts in der `package.json` gestartet:

```json
"scripts": {
  "cypress": "npx cypress open"
}
```
Nach dem Start von Cypress über das Cypress UI wurden die erforderlichen Konfigurationsdateien erstellt, einschließlich einer tsconfig.json im Cypress-Ordner, um TypeScript-Support zu gewährleisten.

### 4.1.1.2. Erstellen eines leeren Tests
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
### 4.1.1.3. Benutzeranmeldung und Datenbank-Reset
Da viele Funktionen nur im angemeldeten Zustand getestet werden können, wurden die Anmeldeinformationen in einer cypress.env.json Datei gespeichert und in der cypress.config.ts Datei referenziert. Ein Endpoint zum Löschen aller Jobs in der Datenbank wurde hinzugefügt, um sicherzustellen, dass die Tests mit einem definierten Systemzustand beginnen.

### 4.1.1.4 Umfangreiche Testfälle
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
### 4.1.2 Fazit
Alle End-to-End-Tests mit Cypress wurden erfolgreich durchgeführt. Die Tests deckten alle wichtigen Funktionen der Techland-Plattform ab, und es wurden keine Fehler festgestellt. Die erfolgreiche Durchführung der Tests bestätigt, dass die Plattform wie erwartet funktioniert und die Benutzerinteraktionen zuverlässig sind.


![CypressTesting](/doc/figures/CypressTesting.png)


### 4.2 Test Coverage für Techland Plattform

Zur Messung der Code Coverage in meiner Techland-Plattform wurde das JaCoCo-Plugin in die `pom.xml` Datei integriert. Die notwendigen Anweisungen befinden sich im Abschnitt `build – plugins`. Nach der Integration des JaCoCo-Plugins mit den entsprechenden Anweisungen wurde im Projektverzeichnis der Befehl `mvnw verify` ausgeführt, um die Tests auszuführen und die Code Coverage zu messen. Nach der Ausführung der Tests wurden die JaCoCo-Reports im Verzeichnis `target/site/jacoco` erstellt und die Datei `index.html` wurde im Browser geöffnet, um die Ergebnisse zu analysieren.

Um sicherzustellen, dass von Lombok generierter Code korrekt behandelt wird, wurde die Datei `lombok.config` unter `src/main/java` mit folgendem Inhalt erstellt: `lombok.addLombokGeneratedAnnotation=true`. Dies weist Lombok an, den generierten Code zu annotieren, sodass JaCoCo diesen bei der Auswertung ausschließen kann. Schließlich wurden die Befehle `mvn clean` und `mvn verify` ausgeführt, um den generierten Code und die JaCoCo-Reports komplett neu zu erstellen.

Die beigefügte Grafik zeigt die Test Coverage für die verschiedenen Komponenten der Techland-Plattform.

![JaCoCo](/doc/figures/JaCoCo.png)

- Für die Komponente `ch.zhaw.techland.controller` wurden 4% der Anweisungen und 0% der Zweige nicht abgedeckt.
- Für die Komponente `ch.zhaw.techland.model` wurden 36% der Anweisungen und 20% der Zweige nicht abgedeckt.
- Für die Komponente `ch.zhaw.techland.service` wurden 3% der Anweisungen und 0% der Zweige nicht abgedeckt.
- Für die Komponente `ch.zhaw.techland.config` wurden 69% der Anweisungen und 0% der Zweige nicht abgedeckt.
- Für die Komponente `ch.zhaw.techland` wurden 37% der Anweisungen und keine Zweige erfasst.
- Für die Komponente `ch.zhaw.techland.model.voucher` wurden 100% der Anweisungen und 100% der Zweige nicht abgedeckt.

Insgesamt zeigt die Grafik eine Code Coverage von 31% für Anweisungen und 13% für Zweige, mit detaillierten Informationen über die Anzahl der verpassten Anweisungen, Komplexität, verpasste Zeilen, Methoden und Klassen. Diese Ergebnisse bieten eine umfassende Übersicht über die Testabdeckung der Techland-Plattform und helfen dabei, Bereiche zu identifizieren, die verbessert werden müssen, um die Codequalität zu erhöhen.

### 4.3 User-Tests

Benutzer Tests werden durchgeführt, um das Verhalten der Techland-Webanwendung aus der Perspektive der Benutzer zu überprüfen. Bei diesen Tests werden echte Benutzer eingeladen, die Anwendung zu verwenden und ihr Feedback zu geben. Dabei werden verschiedene Benutzerszenarien durchgespielt, um die Benutzerfreundlichkeit, Intuitivität und Effektivität der Anwendung zu bewerten. Das Feedback der Benutzer wird gesammelt, um mögliche Verbesserungen und Anpassungen vorzunehmen, um die Anwendung weiter zu optimieren.

Für Techland wurden verschiedene Benutzertypen ausgewählt, die verschiedene Aspekte der Anwendung testen konnten. Für jeden Test wurde eine andere Person ausgewählt. Nachfolgend eine Übersicht der durchgeführten Unit-Tests:

#### 4.3.1 Registrierungsprozess
- **Beschreibung:** In diesem Test wird der Registrierungsprozess für neue Benutzer getestet.
- **Ziel:** Bewertung der Benutzerfreundlichkeit der Anmeldung, Klarheit der erforderlichen Informationen und Reaktionsfähigkeit der Anwendung während des Registrierungsvorgangs.
- **Durchführung:** Ein Benutzer wird aufgefordert, sich zu registrieren und dabei den Prozess Schritt für Schritt zu durchlaufen.

#### 4.3.2 Gerätesuche
- **Beschreibung:** In diesem Test wird der Prozess der Gerätesuche getestet.
- **Ziel:** Bewertung der Benutzerfreundlichkeit der Gerätesuche und Darstellung der Geräteinformationen.
- **Durchführung:** Ein Benutzer sucht nach verfügbaren Geräten, betrachtet die Details einzelner Geräte und bewertet den gesamten Prozess sowie die Genauigkeit der Informationen und die Reaktionsfähigkeit der Anwendung.

#### 4.3.3 Vermieterprofil und Geräteverwaltung
- **Beschreibung:** In diesem Test werden die Funktionen des Vermieterprofils und der Geräteverwaltung bewertet.
- **Ziel:** Bewertung der Benutzerfreundlichkeit bei der Aktualisierung von Geräteinformationen, Hinzufügen oder Entfernen von Geräten und der allgemeinen Benutzererfahrung für Vermieter.
- **Durchführung:** Ein Vermieter testet die verschiedenen Funktionen des Vermieterprofils, aktualisiert Geräteinformationen, fügt neue Geräte hinzu oder entfernt vorhandene Geräte. Der Benutzer bewertet die Benutzerfreundlichkeit der Funktionen und dokumentiert Feedback oder Verbesserungsvorschläge.

#### 4.4.4 Mietabschluss und Gerätezurückgabe
- **Beschreibung:** In diesem Test wird der Prozess des Mietabschlusses und der Gerätezurückgabe bewertet.
- **Ziel:** Bewertung der Schritte zum Abschluss und zur Beendigung einer Miete, Klarheit der Anweisungen zur Rückgabe des Geräts und der Möglichkeit.
- **Durchführung:** Ein Benutzer durchläuft den Prozess des Mietabschlusses, inklusive der Rückgabe des Geräts. Der Benutzer bewertet die Benutzerfreundlichkeit des Prozesses und die Verständlichkeit der Anweisungen.

#### 4.4.5 Benachrichtigungen und Kommunikation
- **Beschreibung:** In diesem Test werden die Benachrichtigungsfunktionen der Anwendung bewertet.
- **Ziel:** Bewertung der Zuverlässigkeit und Aktualität der Benachrichtigungen, wie Bestätigungs-E-Mails bei Gerätebuchungen oder Benachrichtigungen über Änderungen an einem Gerät.
- **Durchführung:** Ein Benutzer testet verschiedene Szenarien, in denen Benachrichtigungen generiert werden, und bewertet die Genauigkeit, Zuverlässigkeit und Aktualität der Benachrichtigungen.

#### 4.5.6 Benutzerfreundlichkeit und Navigation
- **Beschreibung:** In diesem Test wird die allgemeine Benutzerfreundlichkeit und Navigation der Techland-Anwendung bewertet.
- **Ziel:** Bewertung der intuitiven Bedienung, Klarheit der Anweisungen, Navigation zwischen verschiedenen Seiten und insgesamt der Benutzererfahrung.
- **Durchführung:** Ein Benutzer erkundet die Anwendung, navigiert durch verschiedene Seiten und gibt Feedback zur Benutzerfreundlichkeit, zur Klarheit der Anweisungen und zur intuitiven Bedienung.

#### 4.6.7 Resultate der Benutzer Tests
Alle Benutzer Tests konnten zur vollsten Zufriedenheit durchgeführt werden. Die Resultate der Tests entsprachen durchwegs den Erwartungen an die verschiedenen Funktionen und allgemein an der Webanwendung Techland.


## 4.7 Testergebnisse

Die Tests wurden erfolgreich ausgeführt! Alle Tests sind bestanden, und es gab keine Fehler oder Ausfälle. Hier sind die Ergebnisse:

### Zusammenfassung der Testergebnisse

- **Tests insgesamt:** 21
- **Fehlgeschlagene Tests:** 0
- **Fehler:** 0
- **Übersprungene Tests:** 0

### Anzeige der Testergebnisse:

#### Über das Terminal:
Die Ergebnisse der Tests werden direkt im Terminal angezeigt, nachdem der Befehl `mvn test` ausgeführt wurde. Es wird eine detaillierte Ausgabe der durchgeführten Tests und deren Status angezeigt. Alle Tests wurden erfolgreich durchgeführt.

#### HTML-Bericht von JaCoCo:
1. Navigiere im Dateibrowser zu deinem Projektverzeichnis `target/site/jacoco`.
2. Öffne die Datei `index.html` in deinem Browser. Dies zeigt einen detaillierten Bericht zur Codeabdeckung, einschließlich einer Übersicht über die Abdeckung nach Klassen, Methoden und Zeilen.

#### VS Code Maven Plugin:
Die Testergebnisse können auch über das Maven-Plugin in Visual Studio Code überprüft werden. Navigiere dazu im Maven-Bereich zu deinem Projekt und überprüfe die Testläufe unter dem Abschnitt "Test".

Durch diese Schritte kann sichergestellt werden, dass die Tests wie erwartet funktionieren und eine detaillierte Übersicht über die Ergebnisse und die Codeabdeckung vorliegt.

### Voucher-Testergebnisse

Die folgenden Tests wurden für die verschiedenen Voucher-Klassen durchgeführt:

#### FiveBucksVoucherTest
- **testEmpty:** Überprüft, ob ein `FiveBucksVoucher` mit leerer Geräteliste den Betrag 0.0 zurückgibt.
- **testTwo:** Überprüft, ob ein `FiveBucksVoucher` mit einem Gerät in der Liste (Wert 2.0) den Betrag 0.0 zurückgibt.
- **testTen:** Überprüft, ob ein `FiveBucksVoucher` mit einem Gerät in der Liste (Wert 10.0) den Betrag 5.0 zurückgibt.

#### PercentageVoucherTest
- **testVoucher_withoutDevices:** Überprüft, ob ein `PercentageVoucher` mit leerer Geräteliste den Betrag 0.0 zurückgibt.
- **testVoucher_singleDevice_multipleValues:** Überprüft, ob ein `PercentageVoucher` mit einem Gerät (Wert 50.0) und verschiedenen Prozentsätzen (1, 2, 5, 20, 49, 50) den korrekten Rabatt zurückgibt.
- **testVoucher_withDevices:** Überprüft, ob ein `PercentageVoucher` mit zwei Geräten (Werte 77.0 und 42.0) und einem Rabatt von 42% den korrekten Rabatt von 49.98 zurückgibt.

#### TwoForOneVoucherTest
- **testOtherDevice:** Überprüft, ob ein `TwoForOneVoucher` mit zwei Geräten unterschiedlichen Typs den Betrag 0.0 zurückgibt.
- **testSameDevice:** Überprüft, ob ein `TwoForOneVoucher` mit zwei Geräten gleichen Typs (Werte 77.0 und 33.0) den Betrag 55.0 zurückgibt.
- **testThreeDevices_sameType:** Überprüft, ob ein `TwoForOneVoucher` mit drei Geräten gleichen Typs (Werte 77.0, 33.0 und 99.0) den Betrag 104.5 zurückgibt.
- **testThreeDevices_mixedType:** Überprüft, ob ein `TwoForOneVoucher` mit drei Geräten, von denen zwei den gleichen Typ haben (Werte 77.0, 33.0 und 99.0) den Betrag 55.0 zurückgibt.
- **testMultipleDevices:** Überprüft, ob ein `TwoForOneVoucher` mit verschiedenen Anzahl von Geräten gleichen Typs den korrekten Rabatt zurückgibt, basierend auf verschiedenen Testfällen.

Alle oben genannten Tests wurden erfolgreich durchgeführt und haben die erwarteten Ergebnisse geliefert.
