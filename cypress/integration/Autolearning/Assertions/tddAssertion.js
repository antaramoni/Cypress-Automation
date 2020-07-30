

/// <reference types="Cypress" />

context('Actions', () => {
    before(() => {
     cy.visit('https://www.flighthub.com/')
    })


describe('Validate with all TDD assertions', function()

{



it('Validating   - USING .isOk(object/expression, [message])', function()
{
 

//    assert.isOk('Antara', 'everything is ok')


   assert.isOk(cy.get('a#btn-search-flight').contains('SEARCH FLIGHTS'), 'Should return TRUE, SEARCH FLIGHT button text is ok')

 
}) 



it('Validating  - Using .isNotOk(object, [message]) ', function()
{
    
    assert.isNotOk(false, 'It will pass')
   
 //  assert.isNotOk(cy.get('a#btn-search-flight').contains(null), 'It should return false')
   
      

}) 


it('Validating  - USING  .equal(actual, expected, [message])', function()
{

   // assert.equal(3, 3, 'vals equal')

   // let t = cy.get('a#btn-search-flight').its('text')

   //let t = cy.get('a#btn-search-flight').invoke('text')

   let t = cy.get('a#btn-search-flight').text()

    assert.equal(t,'SEARCH FLIGHTS', 'Value matches')
    

})   


it('Validating  - USING ', function()
{

  
    

})  

it('Validating  - USING ', function()
{

  
    

})  

it('Validating  - USING ', function()
{

  
    

})  

it('Validating  - USING ', function()
{

  
    

})  
  




})

})
