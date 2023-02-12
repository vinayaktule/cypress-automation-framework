import loginPageOR from '../object-repo/loginPage.json'

class LoginPage {
    verifyTitle() {
        cy.get(loginPageOR.homeTitle).should('be.visible');
        return this;
    }

    verifyPageContent() { 
        cy.get(loginPageOR.heading).should('be.visible').and('have.text', 'XYZ Bank');
        cy.contain('Customer Login').should('be.visible');
        cy.contain('Bank Manager Login').should('be.visible');
        return this;
    }

    navigateToCustomerLogin() {
        cy.contains('Customer Login').click();
    }

    navigateToBankManageLogin() {
        cy.contains('Bank Manager Login').click();
    }
}
export default new LoginPage;