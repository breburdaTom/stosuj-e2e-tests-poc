/// <reference types="Cypress" />

describe('Registrace', () => {

    it('Navigates to Registrace and checks email input field validation', () => {
        cy.visit('registrace')
        cy.get('input[id="email"]').type('test{enter}')
        cy.get('p[id="email-helper-text"]').contains('E-mail musí být platný')
    })

    it('Navigates to Registrace and checks password input field validation', () => {
        cy.visit('registrace')
        cy.get('input[id="password"]').type('{enter}')
        cy.get('p[id="password-helper-text"]').contains('Toto pole je povinné')
    })

    it.only('Navigates to Registrace and checks Podminky sluzby checkbox validation', () => {
        cy.visit('registrace')
        cy.get('input[id="email"]').type('{enter}')
        cy.get('p').contains('Je vyžadován souhlas s Podmínkami služby').should('exist')
        cy.get('input[name="agreement"]').check()
        cy.get('p').contains('Je vyžadován souhlas s Podmínkami služby').should('not.exist')
    }) 

})