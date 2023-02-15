import LoginPage from "../../support/page-object/loginPage";

beforeEach('Login to Application',()=>{
    cy.visit('/');
})

describe("Login Page content Verification", () => {
    it("should load login page", () => {
        LoginPage.verifyTitle()
            .verifyPageContent()
            .navigateToCustomerLogin();
    });
});