/// <reference types="Cypress" />

describe('DCA Kalkulacka', () => {

it('Navigates to DCA Kalkulacka and performs actions on interactive elements', () => {
    cy.visit('#dca-kalkulacka')
  
    cy.contains('DCA kalkulačka').click()
    cy.url().should('include', '#dca-kalkulacka')
    cy.contains('Kolik investovat? DCA kalkulačka')

    cy.get('[aria-haspopup="listbox"]').contains('4 roky').click()
    // TODO: xxx
})

}) 
