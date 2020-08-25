/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";

context("Actions", () => {
  before(() => {
    cy.visit("https://www.flighthub.com/");
  });

  describe("Validate login using custom command", function () {
    it("Search flight button text validation using page objects", function () {
      const home = new HomePage();

      home.searchFlightButton().should("contain", "SEARCH FLIGHTS");
    });

    it("Search for a round tril flight using custom command and page objects", function () {
      cy.SearchRoundTripflight();
    });

    it("Validating sign-up feature using page objects", function () {});

    it("Search for a city using page objects", function () {});
  });
});
