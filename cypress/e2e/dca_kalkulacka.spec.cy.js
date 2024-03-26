/// <reference types="Cypress" />
describe('DCA Kalkulacka', () => {

it('Navigates to DCA Kalkulacka and performs actions on interactive elements', () => {
    cy.visit('#dca-kalkulacka')
  
    cy.contains('DCA kalkulačka').click()
    cy.url().should('include', '#dca-kalkulacka')
    cy.contains('Kolik investovat? DCA kalkulačka')

    cy.get('[aria-haspopup="listbox"]').contains('4 roky').click()
    cy.get('li[data-value="8"]').click()
    cy.get('[aria-haspopup="listbox"]').contains('1 týden').click()
    cy.get('li[data-value="30"]').click()
    cy.get('input[value="2000"]').clear().type('1000')
})

}) 
