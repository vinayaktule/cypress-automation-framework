import {LOGIN_USERS} from '../../constants';

describe('Login happy flow',()=>{
    it('Login valid',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type(LOGIN_USERS.VALID.username)
        cy.get('#password').type(LOGIN_USERS.VALID.password)
        cy.get('#login-button').click();
        cy.contains(LOGIN_USERS.INVALID_LOGIN_MSG.text).should('not.exist')
    })
    it('Login invalid',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type(LOGIN_USERS.INVALID.username)
        cy.get('#password').type(LOGIN_USERS.INVALID.password)
        cy.get('#login-button').click();
        cy.contains(LOGIN_USERS.INVALID_LOGIN_MSG.text).should('exist')
    })
});