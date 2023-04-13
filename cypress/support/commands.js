import LoginPO from "../e2e/logIn/loginPO"
import PopularItemsPO from "../e2e/popularItems/popularItemsPO"
import ProductPO from "../e2e/product/productPO"
import CartPO from "../e2e/cart/cartPO"

const loginPO = new LoginPO()
const popularItemsPO = new PopularItemsPO()
const productPO = new ProductPO()
const cartPO = new CartPO()

Cypress.Commands.add('login', (email, password) => {
    loginPO.menuUser()
        .click()
    loginPO.assertModalLogin()
    loginPO.txtUserName()
        .type(email)
    loginPO.txtPassword()
        .type(password)
    loginPO.checkRememberMe()
        .click()
    loginPO.btnSingIn()
        .should('be.enabled')
    loginPO.btnSingIn()
        .click()
})

Cypress.Commands.add('popularItems', () =>{
    popularItemsPO.btnDetails().first()
        .click()
        .invoke('attr','href')
        .then(($href) => {
            cy.url().should('contain',$href)
        })
})

Cypress.Commands.add('QuantityCheck', ($number) => {
    productPO.txtProductQuantity()
        .invoke('val')
        .then(($val) => {
            expect($val).to.equal(`${$number}`)
        })
})

Cypress.Commands.add('AddingProductToCart', () => {
    const random = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    productPO.txtProductQuantity()
        .type(random)
        .invoke('val')
        .then(($val) => {
            expect($val).to.equal(`${random}`)
        })
    productPO.btnSaveToCart()
        .click()
    productPO.toolCart()
        .should('be.visible')
    productPO.toolCartNumber()
        .should('contain',`${random}`)
})

Cypress.Commands.add('removeProduct', () => {
    cartPO.btnRemoveProduct()
            .click()
    cartPO.productInCart()
        .should('not.exist')
})