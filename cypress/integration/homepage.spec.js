/// <reference types="cypress" />

describe('TinderSay Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Correct Header with Text and button - with icon', () => {

        // check title in header
        cy.contains('TinderSay')
        
        // check button for theme change
        cy.get('header > div > button')

        // check if button has icon
        cy.get('header > div > button > span > svg')

        // check if button is clickable
        cy.get('header > div > button').click()
    })

    it('Card View with buttons and texts', () => {

        // check if cards are displayed
        cy.get('[id="card-id"]')

        // check if quote and author are displayed
        cy.get('[id="card-id"] > div > h5').as('quote')
        
        // check author is displayed
        cy.get('[id="card-id"] > div > h6').as('author')

        cy.get('[id="btn-grp"] > div').children().as('btn-grp')
        
    })

})