/// <reference types="Cypress" />

context("Actions", () => {
  before(() => {
    //  cy.visit('https://www.flighthub.com/')
  });

  describe("Validate using environment variable ", function () {
    it("Requeust a URL using cypress.json", function () {
      cy.visit(Cypress.env("QA"));
    });

    it("Requeust a URL using cypress.json", function () {
      cy.visit(Cypress.env("Staging"));
    });

    it("Requeust a URL using cypress.json", function () {
      cy.visit(Cypress.env("Production"));
    });
  });
});
