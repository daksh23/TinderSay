/// <reference types="cypress" />

describe('API Tests', () => {
    it('Get Quote text with author', () => {
        cy.visit('http://localhost:3000/')

        // cy.intercept({
        //     method: 'GET', 
        //     url: 'https://type.fit/api/quotes', 
        // }, [] 
        // ).as('getQuotes')

        cy.intercept('GET', 'https://type.fit/api/quotes', { fixture: 'getQuotes.json' })

    })
})