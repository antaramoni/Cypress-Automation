/// <reference types="Cypress" />

context("Actions", () => {
  before(() => {
    cy.visit("https://www.cheapoair.ca/");
  });

  describe("Validate_Deals", function () {
    it("Validating all the deals on home page - Normal way USING get and its", function () {
      cy.get(".deals__title:visible")
        .contains("Today's Flight Deals")
        .and("not.be.disabled");
      cy.get(".deals__title:visible")
        .contains("Featured Offers")
        .and("not.be.disabled");
      cy.get(".deals__title:visible")
        .contains("Our Best Price")
        .and("not.be.disabled");
      cy.get(".deals__title:visible")
        .contains("Top Hotel Deals")
        .and("not.be.disabled");
      cy.get(".deals__title:visible")
        .contains("Top Car Deals")
        .and("not.be.disabled");

      // Using eq() indexing
      cy.get(".deals__title:visible")
        .eq(4)
        .contains("Top Car Deals")
        .and("not.be.disabled");

      // fetching number of deals
      let deals_number = cy.get(".deals__title:visible").its("length");
    });

    it("Validating all the deals on home page - Using multiple assertion", function () {
      let deal_list = [
        "Today's Flight Deals*",
        "Featured Offers*",
        "Our Best Price*",
        "Top Hotel Deals*",
        "Top Car Deals*",
      ];

      cy.get(".deals__title:visible")
        .should("have.length", 5)
        .and(($li) => {
          expect($li.get(1).textContent, "deal" + 1).to.equal(deal_list[1]);
        });
    });

    it("Validating all the deals on home page - USING find", function () {
      cy.get(".deals__title:visible").each(($el, index, $list) => {
        $el
          .find(".deals__title:visible")
          .text()
          .includes(
            "Today's Flight Deals",
            "Featured Offers",
            "Our Best Price",
            "Top Hotel Deals",
            "Top Car Deals"
          );
      });
    });
  });
});
