import loginPage from "../../support/page-object/loginPage"


let loginDetails;
describe("Login dynamically",()=>{
    
    beforeEach(()=>{
        cy.fixture('login').then(function(loginData){
            loginDetails=loginData
         })
        
    })

    it("Fixture Data from login.json file: ",()=>{
        cy.log("Printing Fixure Data :")
            cy.log(loginDetails.username)
            cy.log(loginDetails.password)
            cy.log(loginDetails.usernames.standarduser)
            cy.log(loginDetails.usernames.lockedoutuser)
            cy.log(loginDetails.usernames.problemuser)
            cy.log(loginDetails.usernames.performanceglitchuser)
    })

})
