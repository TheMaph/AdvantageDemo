class ProductPO{

    toolCartNumber(){ return cy.get('#shoppingCartLink > .cart')}
    toolCart(){ return cy.get('#toolTipCart')}
    spanProductColor(){ return cy.get('.rabbit')}
    txtProductQuantity(){ return cy.get('input[name="quantity"]')}
    btnPlus(){ return cy.get('#productProperties .plus')}
    btnMinus(){ return cy.get('#productProperties .minus')}
    btnSaveToCart(){ return cy.get('button[name="save_to_cart"]')}
    lblPrice() {return cy.get('#Description > h2')}

}   export default ProductPO