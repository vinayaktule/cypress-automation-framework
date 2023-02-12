import loginPage from "../../support/page-object/loginPage";
import bankManagerHomePage from "../../support/page-object/bankManagerHomePage";
import { faker } from '@faker-js/faker';


describe('Customer CRUD Operations',()=>{

    beforeEach('Login to Application',()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        loginPage.navigateToBankManageLogin();
    })
    
    it("Bank Manager Home Page navigation & Verification : ",()=>{
        bankManagerHomePage.addCustomer();
        bankManagerHomePage.openAccount();
        bankManagerHomePage.showCustomers();
    })

    it("Create customer verification : ",()=>{
        let firstname = faker.name.firstName();
        let lastname = faker.name.lastName();
        let postcode = faker.address.zipCode();
        cy.log("Information details:"+firstname+" "+lastname+" "+postcode);
        bankManagerHomePage.addCustomer();
        bankManagerHomePage.createCustomer(firstname, lastname, postcode);
        bankManagerHomePage.verifyCreatedCustomer(firstname, lastname, postcode);
    });

    it("Delete customer verification : ",()=>{
        let firstname = faker.name.firstName();
        let lastname = faker.name.lastName();
        let postcode = faker.address.zipCode();
        cy.log("Information details:"+firstname+" "+lastname+" "+postcode);
        bankManagerHomePage.addCustomer();
        bankManagerHomePage.createCustomer(firstname, lastname, postcode);
        bankManagerHomePage.verifyDeleteCustomer(firstname, lastname, postcode);
    });


})