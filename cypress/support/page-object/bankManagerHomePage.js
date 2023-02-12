import bankManagerHomePageOR from "../object-repo/bankManagerHomePage.json"

class BankManagerHomePage{

    verifyBankManagerHomePage(){
        cy.contains("Add Customer").should("be.visible")
        cy.contains("Open Account").should("be.visible")
        cy.contains("Customers").should("be.visible")
        return this;
    }

    clickAddCustomer(){
        //Using custom command to click text passed in as a parameter
        cy.clickText("Add Customer");
        cy.contains("Add Customer").invoke('attr','class').should('contain','btn-primary');
        return this;
    }

    clickOpenAccount(){
        //Using custom command to click text passed in as a parameter
        cy.clickText("Open Account");
        cy.contains("Open Account").invoke('attr','class').should('contain','btn-primary');
        return this;
    }

    clickShowCustomers(){
        //Using custom command to click text passed in as a parameter
        cy.clickText("Customers");
        cy.contains("Customers").invoke('attr','class').should('contain','btn-primary');
        return this;
    }

    createCustomer(firstname, lastName, postcode ){
        cy.get(bankManagerHomePageOR.inputFirstName).type(firstname);
        cy.get(bankManagerHomePageOR.inputLastName).type(lastName);
        cy.get(bankManagerHomePageOR.inputPostCode).type(postcode);
        cy.get(bankManagerHomePageOR.submitBtn).click();
        return this;
    }

    verifyCreatedCustomer(firstname,lastName, postcode){
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Customer added successfully with customer id');
         })
        this.clickShowCustomers();
        cy.get(bankManagerHomePageOR.searchCustomer).type(firstname);
        cy.get(bankManagerHomePageOR.trFirstName).should("have.text", firstname);
        cy.get(bankManagerHomePageOR.trLastName).should("have.text", lastName);
        cy.get(bankManagerHomePageOR.trPostCode).should("have.text", postcode);
        return this;
    }

    searchCustomer(firstname){
        cy.get(bankManagerHomePageOR.searchCustomer).clear().type(firstname);
        return this;
    }

    deleteSearchedCustomer(firstname){
        this.searchCustomer(firstname);
        cy.get(bankManagerHomePageOR.trDeleteBtn).click();
        return this;
    }

    verifyDeleteCustomer(firstname){
        this.searchCustomer(firstname);
        cy.get(bankManagerHomePageOR.trFirstName).should('have.length',0);
        return this;
    }

    openAccountForCustomer(customerName, currency){
        cy.get('#userSelect').select(customerName);
        cy.get('#currency').select(currency);
        cy.get(bankManagerHomePageOR.submitBtn).click();
        return this;
    }

    verifyOpenAccount(){
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Account created successfully with account Number');
         })
         return this;
    }
}

export default new BankManagerHomePage();