/// <reference types="Cypress" />

describe('Stosuj homepage', () => {
  it('Visits stosuj.cz and checks main navigation', () => {
    cy.visit('/')
    cy.contains('Úvodní stránka')
    cy.contains('Štosuj.cz průvodce')
    cy.contains('Proč Bitcoin?')
    cy.contains('Ceník')
    cy.contains('Měnové páry')
    cy.contains('DCA kalkulačka')
    cy.contains('Komunita a kontakt')
    cy.contains('Podmínky služby')
    
    cy.contains('Registrace')
    cy.contains('Přihlášení')
  })

  it('Visits stosuj.cz navigates to pruvodce', () => {
    cy.visit('www.stosuj.cz')
  
    cy.contains('Štosuj.cz průvodce').click()
    cy.url().should('include', 'proc-bitcoin/jak-vam-stosuj-cz-pomuze')
    cy.contains('Jak vám Štosuj.cz pomůže')
    
  })

}) 

