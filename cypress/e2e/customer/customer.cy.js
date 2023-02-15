import customerPage from "../../support/page-object/customerPage"
import loginPage from "../../support/page-object/loginPage"
import customerHomePage from "../../support/page-object/customerHomePage"

let customerData;
describe('Customer Page Test',()=>{  
    beforeEach('Login to Application',()=>{
        cy.fixture('customer').then((customerDetails)=>{
            customerData = customerDetails;
        });
        cy.visit('/');
    })
    
    it('Customer Home Page content verification',()=>{
        loginPage.navigateToCustomerLogin();
        customerPage.selectCustomerDefault()
            .clickLoginBtn();
        customerHomePage.verifyCustomerHomePageContent()
    })

    it.only('Customer Home Page content verification using DDT',()=>{
        loginPage.navigateToCustomerLogin();
        cy.log(customerData);
        customerPage.selectCustomerDDT(customerData.customerName)
            .clickLoginBtn();
        customerHomePage.verifyCustomerHomePageContent()
    })
})

