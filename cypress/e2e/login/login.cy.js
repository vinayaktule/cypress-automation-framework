import LoginPage from "../../support/page-object/loginPage";

beforeEach('Login to Application',()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
})

describe("LoginPage", () => {
    it("should load login page", () => {
        LoginPage.verifyTitle();
    });
});