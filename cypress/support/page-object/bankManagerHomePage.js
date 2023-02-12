import bankManagerHomePageOR from "../object-repo/bankManagerHomePage.json"

class BankManagerHomePage{

    verifyBankManagerHomePage(){
        cy.contains("Add Customer").should("be.visible")
        cy.contains("Open Account").should("be.visible")
        cy.contains("Customers").should("be.visible")
    }

    addCustomer(){
        cy.contains("Add Customer").click();
        cy.contains("Add Customer").invoke('attr','class').should('contain','btn-primary');
    }

    openAccount(){
        cy.contains("Open Account").click();
        cy.contains("Open Account").invoke('attr','class').should('contain','btn-primary');
    }

    showCustomers(){
        cy.contains("Customers").click();
        cy.contains("Customers").invoke('attr','class').should('contain','btn-primary');

    }

    createCustomer(firstname, lastName, postcode ){
        cy.get(bankManagerHomePageOR.inputFirstName).type(firstname);
        cy.get(bankManagerHomePageOR.inputLastName).type(lastName);
        cy.get(bankManagerHomePageOR.inputPostCode).type(postcode);
        cy.get(bankManagerHomePageOR.addCustomerSubmitBtn).click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Customer added successfully with customer id');
         })
    }

    verifyCreatedCustomer(firstname,lastName, postcode){
        this.showCustomers();
        cy.get(bankManagerHomePageOR.searchCustomer).type(firstname);
        cy.get(bankManagerHomePageOR.trFirstName).should("have.text", firstname);
        cy.get(bankManagerHomePageOR.trLastName).should("have.text", lastName);
        cy.get(bankManagerHomePageOR.trPostCode).should("have.text", postcode);
    }

    verifyDeleteCustomer(firstname,lastName, postcode){
        this.showCustomers();
        cy.get(bankManagerHomePageOR.searchCustomer).type(firstname);
        cy.get(bankManagerHomePageOR.trFirstName).should("have.text", firstname);
        cy.get(bankManagerHomePageOR.trLastName).should("have.text", lastName);
        cy.get(bankManagerHomePageOR.trPostCode).should("have.text", postcode);
        cy.get(bankManagerHomePageOR.trDeleteBtn).click();
        cy.get(bankManagerHomePageOR.trFirstName).should('have.length',0);
    }
}

export default new BankManagerHomePage();