/// <reference types="Cypress" />

context("Actions", () => {
  before(() => {
    cy.visit("https://www.flighthub.com/");
  });

  describe("Validate Deals with common assertion", function () {
    it("Validating always 10 deals shows up on home page - Using have.length", function () {
      cy.get(".hp-deals-table").should("have.length", 10);

      cy.get(".hp-deals-table").should("not.have.length", 5);
    });

    it("Validating same grouped class and id - Using have.id and have.class ", function () {
      /*
      find li within main_search_fares_form class

      cy.get('.main_search_fares_form').find('li').eq(0).should('have.class', 'flight_type_button_v2 flight-type-round-trip active')
      */

      cy.get(".search_form_wrapper").should("have.id", "search_form_flights");

      cy.get("#search_form_flights").should(
        "have.class",
        "search_form_wrapper"
      );

      // cy.get('#search_form_flights').should('not.have.class', 'search_form_wrapper');
    });

    it("Fetching Sign-up and Enter city text area value - Using invoke Value", function () {
      /*
   have.value is not working

  cy.get('.newsletter-form-left').type('antara.chowdhury@gmail.com').should('have.value','antara.chowdhury@gmail.com')

   */

      cy.get(".newsletter-form-left")
        .click()
        .type("antara.chowdhury@gmail.com");

      cy.wait(500);

      cy.get('input[name="email"]')
        .invoke("val")
        .then((sometext) => cy.log(sometext));

      cy.get('input[type="text"]')
        .invoke("val")
        .then((sometext) => cy.log(sometext));
    });

    it("Validating the SEARCH FLIGHT buttons text content - Using contain", function () {
      cy.get("a#btn-search-flight").should("contain", "SEARCH FLIGHTS");

      // cy.get('a#btn-search-flight').should('not.contain', 'SEARCH FLIGHTS')
    });

    it("Validating SEARCH FLIGHT buttons is visible - Using Visibility", function () {
      cy.get("a#btn-search-flight").should("be.visible");

      // cy.get('a#btn-search-flight').should('not.be.visible');
    });

    it("Validating all the deals exists on home page - Using Existence", function () {
      cy.get("a#btn-search-flight").should("be.exist");

      // cy.get('a#btn-search-flight').should('not.exist');
    });

    it("Validating Prefer Non-Stop check box is checked on home page - Using State", function () {
      cy.get(".hp-additional-options").find("a").click();

      cy.get("input[name='non_stop']").click().should("be.checked");
    });

    it("Validating backgrouud color css and color value for SEARCH BUTTON   - Using CSS", function () {
      cy.get("a#btn-search-flight").should(
        "have.css",
        "background-color",
        "rgb(255, 100, 50)"
      );
    });
  });
});
