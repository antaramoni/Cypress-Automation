

/// <reference types="Cypress" />


import HomePage from "/Users/achowdhury/Documents/CypressAutoLearning/cypress/integration/Autolearning/pageObjects/homePage.js"



context('Actions', () => {
    before(() => {
   cy.visit('https://www.flighthub.com/')
    })


describe('Validate Search a flight feature', function()

{
    

it('Search a round trip flight with no data found', function()
{

cy.SearchRoundTripflight('New York, United States - All Airports [NYC]','Toronto, ON, Canada - All Airports [YTO]');

if (cy.contains('Continue Search'))
{
    cy.contains('Continue Search').click();

    cy.get('.feedback-error').should('contain','We apologize, no fares were found.')
}

else
{
    cy.get('.feedback-error').should('contain','We apologize, no fares were found.')
}

}) 


    



}) 

})


