

/// <reference types="Cypress" />

context('Actions', () => {
    before(() => {
     cy.visit('https://www.flighthub.com/')
    })


    describe('Validate with BDD Chai assertion', function()

    {
    
    
    
    it('Validating SEARCH FLIGHTS button text - Using to.equal and not.equal', function()
    {
     /*
     expect(function () {}).to.not.throw();
     expect({a: 1}).to.not.have.property('b');
     expect([1, 2]).to.be.an('array').that.does.not.include(3);

     */

      

    cy.get('a#btn-search-flight')
    .should(($li) => {

       expect($li.get(0).innerText).to.equal('SEARCH FLIGHTS')
         

    })

    cy.get('a#btn-search-flight')
    .should(($li) => {

       expect($li.get(0).innerText).to.not.equal('SEARCH CITY')
         

    })

     
    
    }) 


    it('Validating two search calendar objects inner text are same - using deep eql', function()
    {
     
        //  https://github.com/chaijs/deep-eql

/*
        cy.get('.search-calendar')
        .eq(0)
        .should(($SCal1) => {
        expect($SCal1).to.deep.equal($SCal1)
         
*/


cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) => {


        cy.get('.search-calendar')
        .eq(1)
        .should((SCal_2) => {


        expect(SCal_2.innerText).to.deep.equal(SCal_1.innerText)

        expect(SCal_2.width).to.deep.equal(SCal_1.width)



    })
   })  

   




    
    }) 


    it('Validating  - using nested (NOT DONE)', function()
    {

  
        cy.get('a#btn-search-flight')
        .should((li) => {
    
         
    // expect(li.btn.inline).to.have.nested.property('li.display', 'inline-block');

    //  expect(li.property).to.have.nested.property('ATTRIBUTE_NODE','2');




   /*
   const c = cy.get('body.home');

   cy.log(c);

   */    
        
    
    }) 

    }) 


    it('Validating  - using Ordered (NOT DONE)', function()
    {
     
     

    
    }) 

    it('Validating - using any (NOT DONE)', function()
    {
     
   
    
    }) 

    it('Validating  - using all (NOT DONE)', function()
    {
     
   
    
    }) 

    it('Validating  - Using a (type) (NOT DONE)', function()
    {
     
       
   
       
      
    
    }) 

    it('Validating  - Using include (NOT DONE)', function()
    {
     
    
    
    }) 

    it('Validating undefined calendar - Using ok ', function()
    {
     
        cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) =>  {


        expect(SCal_1.innerText).to.not.be.ok

       /*
       Udefined can not be True or ok
       expect(SCal_1.innerText).to.be.ok
       */


    })

    
    }) 

    it('Validating  - Using true ', function()
    {
     
        cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) =>  {


        expect(SCal_1.innerText).to.not.be.true  // means return false
        

    }) 

    }) 

    it('Validating  - Using false ', function()
    {
     
        
        cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) =>  {


        expect(SCal_1.innerText).to.not.be.false // means return true 
    
    }) 

    }) 

    it('Validating  - Using null ', function()
    {
     
        cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) =>  {


        expect(SCal_1.innerText).to.not.be.null // means return no null 

        /*
       
        expect(SCal_1.innerText).to.be.null  //  Return null
    
        */
    })
    
    }) 

    it('Validating  - Using undefined ', function()
    {
     
        cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) =>  {


        expect(SCal_1.innerText).to.be.undefined // return undefined
    
    }) 
    
    
    }) 

    it('Validating  - Using  exit', function()
    {
     
        cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) =>  {
    
        expect(SCal_1).to.exist

    }) 

    }) 

    it('Validating  - Using empty ', function()
    {
     
     cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) =>  {
    
        expect(SCal_1).to.be.empty

       // expect(SCal_1).to.not.be.empty   // for not empty

    }) 
    
    }) 

    it('Validating  - Using arguments (NOT DONE) ', function()
    {
     
    
    
    }) 

    it('Validating all the deals on home page - Using equal ', function()
    {
     
    // expect(42).to.equal(42)

    cy.get('.search-calendar')
        .eq(0)
        .then((SCal_1) => {


        cy.get('.search-calendar')
        .eq(1)
        .should((SCal_2) => {


        expect(SCal_2.innerText).to.equal(SCal_1.innerText)

        expect(SCal_2.width).to.equal(SCal_1.width)



    })
   }) 
    
    }) 

    it('Validating length of SEARCH FLIGHT button text should be greater than 13 - Using greaterThan (Value) ', function()
    {
     
    // expect(10).to.be.greaterThan(5)

    cy.get('a#btn-search-flight')
    .should(($li) => {

       expect($li.get(0).innerText.length).to.be.greaterThan(13)
         

    })
    
    
    }) 

    it('Validating length of SEARCH FLIGHT button text should be less than 15 - Using lessThan(value) ', function()
    {
     
    //expect(5).to.be.lessThan(10)

    cy.get('a#btn-search-flight')
    .should(($li) => {

       expect($li.get(0).innerText.length).to.be.lessThan(15)
         

    })
    
    
    }) 


    it('Validating length of SEARCH FLIGHT button text should be at least 14 - Using least ', function()
    {
     
    //expect(10).to.be.at.least(10)
    
    cy.get('a#btn-search-flight')
    .should(($li) => {

       expect($li.get(0).innerText.length).to.be.at.least(14)
         

    })
    
    }) 

    it('Validating text number of SEARCH FLIGHT button should be at most 14 - Using most ', function()
    {

    // expect('test').to.have.length.of.at.most(4)

    cy.get('a#btn-search-flight')
    .should(($li) => {

       expect($li.get(0).innerText).to.have.length.of.at.most(14)
         

    })
    
    
    }) 

    it('Validating length of SEARCH FLIGHT button text should be within 13 and 15  - Using whithin (start, finish)', function()
    {
     // expect(7).to.be.within(5,10)

     cy.get('a#btn-search-flight')
     .should(($li) => {
 
        expect($li.get(0).innerText.length).to.be.within(13,15)
          
 
     })
    
    
    }) 

    it('Validating all the deals on home page - Using instanceOf(constructor) (NOT DONE) ', function()
    {
     // expect([1, 2, 3]).to.be.instanceOf(Array)

    
    
    }) 

    it('Validating  - Using property(name, [value]) (NOT DONE)', function()
    {
     //expect(obj).to.have.property('name')
    
    
    }) 


    it('Validating - Using deep.property(name, [value]) (NOT DONE) ', function()
    {
     // expect(deepObj).to.have.deep.property('tests[1]', 'e2e')
    
    
    }) 

    it('Validating - Using ownProperty(name) (NOT DONE)', function()
    {
     
    //expect('test').to.have.ownProperty('length')

    
    
    }) 

    it('Validating  - Using ownPropertyDescriptor(name) (NOT DONE)', function()
    {
     
    //expect({a: 1}).to.have.ownPropertyDescriptor('a')

    
    
    }) 

    it('Validating length of SEARCH FLIGHT text - Using lengthOf(value) ', function()
    {
     //expect('test').to.have.lengthOf(3)

        cy.get('a#btn-search-flight')
        .should(($li) => {
    
           expect($li.get(0).innerText).to.have.lengthOf(14)
             
    
        })
    
    }) 

    it('Validating  - Using match(RegExp) (NOT DONE) ', function()
    {
     // expect('testing').to.match(/^test/)
    
    
    }) 

    it('Validating SEARCH FLIGHT buutton has string SEARCH - Using string(string) ', function()
    {
     
    // expect('testing').to.have.string('test')

    cy.get('a#btn-search-flight')
        .should(($li) => {
    
           expect($li.get(0).innerText).to.have.string('SEARCH')
             
    
        })
    
    
    }) 

    it('Validating  - Using key(key1, [key2], […]) (NOT DONE) ', function()
    {
     
    // expect({ pass: 1, fail: 2 }).to.have.key('pass')


    
    }) 

    it('Validating  - Using throw(constructor) (NOT DONE) ', function()
    {
     
    // expect(fn).to.throw(Error)
    

    
    }) 

    it('Validating  - Using  respondTo(method)(NOT DONE) ', function()
    {
     
        // expect(obj).to.respondTo('getName')
    
    
    }) 


    it('Validating  - Using itself (NOT DONE)', function()
    {
     
        // expect(Foo).itself.to.respondTo('bar')
    
    
    }) 


    it('Validating  - Using satisfy(method) (NOT DONE) ', function()
    {
     // expect(1).to.satisfy((num) => { return num > 0 })
    
    
    }) 

    it('Validating  - Using closeTo(expected, delta) ', function()
    {
     
    // expect(1.5).to.be.closeTo(1, 0.5)
    cy.get('a#btn-search-flight')
    .should(($li) => {

       expect($li.get(0).innerText.length).to.be.closeTo(14, 1)
         

    })

    
    }) 

    it('Validating  - Using members(set) (NOT DONE) ', function()
    {
     // expect([1, 2, 3]).to.include.members([3, 2])
    
    
    }) 


    it('Validating  - Using oneOf(values) ', function()
    {
     // expect(2).to.be.oneOf([1,2,3])

     cy.get('a#btn-search-flight')
     .should(($li) => {
 
        expect($li.get(0).innerText.length).to.be.oneOf([12,13,14])
          
 
     })
    
    
    }) 

    it('Validating  - Using change(function) (NOT DONE)  ', function()
    {
    // expect(fn).to.change(obj, 'val')


    
    
    }) 

    it('Validating  - Using increase(function) (NOT DONE)  ', function()
    {
    // expect(fn).to.increase(obj, 'val')
    
    
    }) 

    it('Validating  - Using decrease(function) (NOT DONE)  ', function()
    {
    //  expect(fn).to.decrease(obj, 'val')


    
    
    }) 

})


})

