// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

 import HomePage from "/Users/achowdhury/Documents/CypressAutoLearning/cypress/integration/Autolearning/pageObjects/homePage.js"

//import myAccountPage from "/Users/achowdhury/Documents/CypressAutoLearning/cypress/integration/Autolearning/pageObjects/myAccountPage.js" 


Cypress.Commands.add('login', (email, password) => {
    
cy.server().route('POST', 'https://c.riskified.com/client_infos.json').as('myaccount');


cy.visit('https://www.flighthub.com/account/')
  
cy.url().should('be', '/account/')
  
cy.get('#account-login-email').type(email);
  
cy.get('#account-login-password').type(password);


cy.get('.ss-form-row').eq(2).click();

cy.get('.myaccount-trips-tabs').should('be.exist');

cy.wait('@myaccount').its('status').should('be', 200);

   
    
});

Cypress.Commands.add('SearchRoundTripflight', (From, To) => {

cy.visit('https://www.flighthub.com/')    

const homeObject = new HomePage()

// type the from departure place
homeObject.FromField().type(From);

// type the destination place
homeObject.ToField().type(To);

// Select a date from the Depart
homeObject.DepartField().click();
homeObject.SelectADepartdate().click();


// Select a date from the Return field
homeObject.ReturnField().click();
//homeObject.SelectAReturndate().click();
homeObject.SelectADepartdate().click();

// Click the Search flight button
homeObject.SearchFlightButton().click();

 
    
});

  
  