import customerPageOR from '../object-repo/customerPage.json';

class CustomerPage{

    selectCustomerDefault(){
        cy.get('select').select('Harry Potter')
            .should("contain.text", "Harry Potter");
        // cy.get(customerPageOR.customerDropDown).select('Harry Potter')
        //.should("contain.text", "Harry Potter");
        return this;
    }

    selectCustomerDDT(customer){
        cy.get(customerPageOR.customerDropDown).select(customer);
        return this;
    }

    clickLoginBtn(){
        cy.get(customerPageOR.loginBtn).click();
    }
}

export default new CustomerPage();