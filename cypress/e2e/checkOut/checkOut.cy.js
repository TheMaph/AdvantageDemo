describe('CheckOut', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
        cy.login(Cypress.env('login').user,Cypress.env('login').password)
        cy.popularItems()
        cy.AddingProductToCart()
    })

    it('', () => {
        
    });

    it('', () => {
        
    });

    afterEach(() => {
        cy.removeProduct()
    })
})