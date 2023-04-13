import CartPO from "./cartPO";

const cartPO = new CartPO()
let price,quantity,total;
describe('Seccion carrito', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
        cy.popularItems()
        cy.AddingProductToCart()
    })
    it('Verificar que la suma del valor de todos los productos corresponda al valor del "Checkout".', () => {
        
        cartPO.lblProductPrice()
            .invoke('text')
            .then(($text) => {
                price = $text.replace('\n                SOLD OUT\n                ','')
                    .replace(' $','')
                    .replace(',','')
            })
        cartPO.lblProductQuantity()
            .invoke('text')
            .then(($text) => {
                quantity = $text.replace('QTY:','')
            })
        cartPO.lblProductCarPrice()
            .invoke('text')
            .then(($text) => {
                total = parseFloat(price) * parseFloat(quantity)
                expect($text.replace(',','')).to.equal('$'+`${total}`+'.00')
            })
        cartPO.lblTotal()
            .invoke('text')
            .then(($text) => {
                expect($text.replace(',','')).to.equal('$'+`${total}`+'.00')
            })
    });

    it('Verificar que se pueda eliminar un producto previamente agregado.', () => {
        cy.removeProduct()
    });
})