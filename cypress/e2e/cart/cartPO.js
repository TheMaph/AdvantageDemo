class CartPO{  

    lblProductPrice() { return cy.get('#Description > h2')}
    lblProductQuantity() { return cy.get('#product > td:nth-child(2) > a > label:nth-child(2)') }
    lblProductCarPrice() { return cy.get('.price') }
    btnRemoveProduct() { return cy.get('.removeProduct') }
    lblTotal() { return cy.get('.cart-total') }
    productInCart() { return cy.get('#product') }

}   export default CartPO