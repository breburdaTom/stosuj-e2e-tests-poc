/// <reference types="Cypress" />
describe('Login', () => {

    it('Navigates to Login and checks email input field validation', () => {
        cy.visit('login')
        cy.get('input[id="email"]').type('test{enter}')
        cy.get('p[id="email-helper-text"]').contains('E-mail musí být platný')
    })

    it('Navigates to Login and checks password input field validation', () => {
        cy.visit('login')
        cy.get('input[id="password"]').type('{enter}')
        cy.get('p[id="password-helper-text"]').contains('Toto pole je povinné')
    })

})