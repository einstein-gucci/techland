describe("Manage devices as admin", () => {
    before(() => {
      cy.clearAllSessionStorage();
      cy.visit("http://localhost:8080");
  
      // Als admin einloggen und überprüfen, ob die Willkommenspage angezeigt wird
      cy.get("#username").type(Cypress.env("admin").email);
      cy.get("#password").type(Cypress.env("admin").password);
      cy.contains("button", "Log in").click();
      cy.get("h1").should("contain", "Welcome");
  
      // Sicherstellen, dass das JWT-Token gesetzt ist
      cy.window().then((win) => {
        const token = win.sessionStorage.getItem("jwt_token");
        expect(token).to.not.be.null;
  
        // Alle vorhandenen Geräte mit dem Endpoint löschen

      });
    });
  
    it("visit device page", () => {
      cy.get('a[href="/devices"]').click();
      cy.location("pathname").should("equal", "/devices");
    });
  
    it("add devices and verify", () => {
      // Erstes Gerät hinzufügen und Überprüfung
      cy.get("#name").clear().type("Smartphone");
      cy.get("#description").clear().type("Latest model with 5G support");
      cy.get("#type").select("MOBIL");
      cy.get("#mietpreis").clear().type("100");
      cy.contains("Submit").click();
  
      // Überprüfen, ob das Gerät hinzugefügt wurde
      cy.wait(2000); // Wartezeit erhöhen, um sicherzustellen, dass das Gerät hinzugefügt wird
      cy.reload(); // Seite neu laden, um sicherzustellen, dass die Tabelle aktualisiert wird
      cy.get("tbody>tr").then($rows => {
        console.log('Rows after adding first device:', $rows.length);
        expect($rows.length).to.be.greaterThan(0);
      });
  
      // Zweites Gerät hinzufügen und Überprüfung
      cy.get("#name").clear().type("Stereo System");
      cy.get("#description").clear().type("High fidelity audio");
      cy.get("#type").select("AUDIOVIDEO");
      cy.get("#mietpreis").clear().type("80");
      cy.contains("Submit").click();
  
      // Überprüfen, ob das Gerät hinzugefügt wurde
      cy.wait(2000);
      cy.reload();
      cy.get("tbody>tr").then($rows => {
        console.log('Rows after adding second device:', $rows.length);
        expect($rows.length).to.be.greaterThan(1);
      });
  
      // Drittes Gerät hinzufügen und Überprüfung
      cy.get("#name").clear().type("Vacuum Cleaner");
      cy.get("#description").clear().type("Bagless and cordless");
      cy.get("#type").select("HAUSHALT");
      cy.get("#mietpreis").clear().type("50");
      cy.contains("Submit").click();
  
      // Überprüfen, ob das Gerät hinzugefügt wurde
      cy.wait(2000);
      cy.reload();
      cy.get("tbody>tr").then($rows => {
        console.log('Rows after adding third device:', $rows.length);
        expect($rows.length).to.greaterThan(1);
      });
    });
  });
  