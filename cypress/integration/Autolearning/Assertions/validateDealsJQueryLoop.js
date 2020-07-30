

/// <reference types="Cypress" />

context('Actions', () => {
    before(() => {
     cy.visit('https://www.cheapoair.ca/')
    })


describe('Validating all the deals Using jQuery loop', () =>

{

    ['Today\'s Flight Deals*','Featured Offers*','Our Best Price*','Top Hotel Deals*','Top Car Deals*'].forEach((deal) =>
    {
    
    it('Validate the deals with JQuery Loop:' + deal,function()
    {
    

     cy.get(".deals__title:visible").should('contain', deal);
       
        
    })
   
      
    })
 

})



})




