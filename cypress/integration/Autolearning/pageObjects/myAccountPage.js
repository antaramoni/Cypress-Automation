

class myAccountPage
{




loginEmail()
{
   return cy.get('#account-login-email')
}
 
loginPass()
{
   return cy.get('#account-login-password')
}

  
loginSubmit()
{
   return cy.get('.ss-form-row').eq(2)
}



loginSuccess()
{
   return cy.get('.myaccount-trips-tabs');
}


}

export default myAccountPage;