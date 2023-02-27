import loginPageOR from '../object-repo/loginPage.json'

class LoginPage {
    verifyTitle() {
        cy.get(loginPageOR.homeTitle).should('be.visible');
        return this;
    }

    verifyPageContent() { 
        cy.get(loginPageOR.heading).should('be.visible').and('have.text', 'XYZ Bank');
        cy.contains('Customer Login').should('be.visible');
        cy.contains('Bank Manager Login').should('be.visible');
        return this;
    }

    navigateToCustomerLogin() {
        cy.clickText('Customer Login');
    }

    navigateToBankManageLogin() {
        cy.clickText('Bank Manager Login');
    }


    
    loginToApp(username, password){
        cy.get('#username').type(username.toLowerCase());
        cy.get('#password').type(password.toLowerCase());
        cy.get('#Login').click();

    }
}
export default new LoginPage;