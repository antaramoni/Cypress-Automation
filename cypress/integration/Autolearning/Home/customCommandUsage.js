

/// <reference types="Cypress" />

context('Actions', () => {
    before(() => {
  //  cy.visit('https://www.flighthub.com/')
    })


    describe('Validate login using custom command', function()

    {
    
    
    
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

