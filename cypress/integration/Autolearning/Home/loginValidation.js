

/// <reference types="Cypress" />

import myAccountPage from "../pageObjects/myAccountPage"




context('Actions', () => {
    before(() => {
   cy.visit('https://www.flighthub.com/account/')
    })


describe('Validate login using custom command', function()

{
    
    
    
it('Login successful validation using page objects', function()
{

const myAccount = new myAccountPage();
myAccount.

myAccount.loginEmail().type('antara.jb@gmail.com')

myAccount.loginPass().type('12345678')

myAccount.loginSubmit().click();

myAccount.loginSuccess().should('be.exist')
 


}) 



it('Login using custom command and passing raw argument data', function()
{
     
cy.login('antara.jb@gmail.com','12345678');

}) 

    

it('Login using custom command and read test data from json', function()
{
     
cy.fixture('FlightHub_user.json').then((user)  => {
var email = user.email
var pass = user.password

cy.login(email,pass)

})

}) 







})

})
