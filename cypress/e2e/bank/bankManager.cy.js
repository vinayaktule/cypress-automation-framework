import loginPage from "../../support/page-object/loginPage";
import bankManagerHomePage from "../../support/page-object/bankManagerHomePage";
import { faker } from '@faker-js/faker';


describe('Customer CRUD Operations',()=>{

    beforeEach('Login to Application',()=>{
        cy.visit('/')
        loginPage.navigateToBankManageLogin();
    })
    
    it("Bank Manager Home Page navigation & Verification",()=>{
        bankManagerHomePage.clickAddCustomer();
        bankManagerHomePage.clickOpenAccount();
        bankManagerHomePage.clickShowCustomers();
    })

    it("Create customer verification",()=>{
        let firstname = faker.name.firstName();
        let lastname = faker.name.lastName();
        let postcode = faker.address.zipCode();
        cy.log("Information details:"+firstname+" "+lastname+" "+postcode);
        bankManagerHomePage.clickAddCustomer()
            .createCustomer(firstname, lastname, postcode)
            .verifyCreatedCustomer(firstname, lastname, postcode);
    });

    it("Delete customer verification",()=>{
        let firstname = faker.name.firstName();
        let lastname = faker.name.lastName();
        let postcode = faker.address.zipCode();
        cy.log("Information details:"+firstname+" "+lastname+" "+postcode);
        bankManagerHomePage.clickAddCustomer()
            .createCustomer(firstname, lastname, postcode)
            .clickShowCustomers()
            .deleteSearchedCustomer(firstname)
            .verifyDeleteCustomer(firstname);
    });

    it("Open Account for customer", ()=>{
        let firstname = faker.name.firstName();
        let lastname = faker.name.lastName();
        let fullname = firstname+" "+lastname;
        let postcode = faker.address.zipCode();
        let currency = ['Rupee', 'Dollar', 'Pound'];
        let value = Math.floor(Math.random() * currency.length);
        let randomCurrency = currency[value];
        cy.log("random currency:"+value+": " +randomCurrency);
        cy.log("Information details:"+firstname+" "+lastname+" "+postcode);
        bankManagerHomePage.clickAddCustomer()
            .createCustomer(firstname, lastname, postcode)
            .clickOpenAccount()
            .openAccountForCustomer(fullname, randomCurrency);
    })
})