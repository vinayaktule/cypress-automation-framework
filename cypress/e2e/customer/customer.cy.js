import customerPage from "../../support/page-object/customerPage"
import loginPage from "../../support/page-object/loginPage"
import customerHomePage from "../../support/page-object/customerHomePage"

describe('Customer Page Test',()=>{  
    beforeEach('Login to Application',()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        //cy.fixture('../../fixtures/customer.json').as('CustomerData');
    })
    
    it('Customer Home Page content verification',()=>{
        loginPage.navigateToCustomerLogin();
        customerPage.selectCustomerDefault()
            .clickLoginBtn();
        customerHomePage.verifyCustomerHomePageContent()
    })

    

})

