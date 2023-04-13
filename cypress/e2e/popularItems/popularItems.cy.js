import PopularItemsPO from "./popularItemsPO"

const popularItemsPO = new PopularItemsPO()

describe('Popular Items', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
    })
    it('Verificar que en la sección "Popular items" de la barra de navegación aparezca una lista con los productos más pretendidos por los clientes.', () => {
        popularItemsPO.btnPopularItems()
            .click({force:true})
        popularItemsPO.lblPopularItems()
            .should('contain','POPULAR ITEMS')
        popularItemsPO.divProduct()
            .should('exist')
    });

    it('Verificar que al presionar "View Details" redirija la página al producto seleccionado.', () => {        
        cy.popularItems()
    })
})