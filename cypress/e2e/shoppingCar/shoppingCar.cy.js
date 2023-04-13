import ShoppingCarPO from "./shoppingCar"

const shoppingCar = new ShoppingCarPO()
describe('ShoppingCar', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
        cy.popularItems()
        cy.AddingProductToCart()
        shoppingCar.btnShoppingCart()
            .click()
    })

    it('Verificar que un artículo previamente agregado al carrito se pueda editar.', () => {
        
        shoppingCar.btnEdit()
            .click()
            .invoke('attr','href')
            .then(($href) => {
                cy.url().then(($url) =>{
                    expect($url).to.include($href)
                })
            })        
    });

    it('Verificar que un artículo previamente agregado al carrito se pueda eliminar.', () => {

        shoppingCar.btnRemove()
            .click()
        shoppingCar.productInCart()
            .should('not.exist')
        
    });

    it('Verificar que al confirmar la compra redirija a la orden de pago.', () => {
        
        shoppingCar.btnCheckOut()
            .should('be.visible').and('be.enabled')
        shoppingCar.btnCheckOut()
            .click()
        cy.url().should('include',Cypress.env('OrderPaymentLoginUrl'))

    });
    

})