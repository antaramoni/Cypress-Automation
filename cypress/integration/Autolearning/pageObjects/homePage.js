class homePage
{

  FromField()
  {
    
      return cy.get('input[name=\'seg0_from\']');

  }  
    
  ToField()
  {
    
      return cy.get('input[name=\'seg0_to\']');
  }
    
  DepartField()
  {
    
      return cy.get('input[name=\'seg0_date\']');
  }

  SelectADepartdate()
  {
    
      return cy.get('.ui-state-default.ui-state-highlight.ui-state-active');
  }

    
  ReturnField()
  {
    
      return cy.get('input[name=\'seg1_date\']');
  }

  SelectAReturndate()
  {
    
      return cy.get('.ui-state-default').eq(2);
  }


  SearchFlightButton()
  {
    
      return cy.get('a#btn-search-flight');
  }
    
    /*
    PassengersField()
    {
    return cy.get('')
    }
    
    ClassField()
    {
    return cy.get('')
    }
    
    EnterYourEmailAddressTextField()
    {
      return cy.get('')
    }
    
    SignUpField()
    {
      return cy.get('')
    }
    
    EnterACityTextField()
    {
      return cy.get('')
    }
    
    SearchButtonEnterAcity()
    
    {
      return cy.get('')
    }
    
*/

}

export default homePage;