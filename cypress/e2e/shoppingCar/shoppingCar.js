class ShoppingCarPO{

    btnEdit() { return cy.get('.edit')}
    btnRemove() { return cy.get('.remove')}
    btnCheckOut() { return cy.get("#checkOutButton")}  
    productInCart() { return cy.get('#shoppingCart > table > tbody > tr') }   
    btnShoppingCart() { return cy.get('#shoppingCartLink') }

}   export default ShoppingCarPO