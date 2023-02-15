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
}
export default new LoginPage;