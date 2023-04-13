import ProductPO from "./productPO";

const productPO = new ProductPO()

const color = ['rgb(54, 131, 209)','rgb(195, 195, 195)']
const colorName = ['BLUE','GRAY']

describe('Producto', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
        cy.popularItems()
    })
    it('Verificar que el color del artículo elegido coincida con el que se ha seleccionado.', () => {
        productPO.spanProductColor().each((elemento,index) => {
            cy.wrap(elemento)
                .should('have.css', 'background-color', color[index])
                .and('have.attr', 'title', colorName[index])
        })
    });

    it('Verificar que los botones más (+) y menos (-) funcionen correctamente.', () => {
        cy.QuantityCheck(1)
        productPO.btnPlus()
            .click()
        cy.QuantityCheck(2)
        productPO.btnMinus()
            .click()
        cy.QuantityCheck(1)
    });

    it('Verificar que al seleccionar un color y establecer la cantidad de productos a comprar, se agregue correctamente en el carrito.', () => {
        cy.AddingProductToCart()
    });
})