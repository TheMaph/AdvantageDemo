class LoginPO {
    menuUser(){ return cy.get('#menuUserLink')}
    modalLogin(){ return cy.get('login-modal')}
    lblResultMessage(){ return cy.get('#signInResultMessage')}
    txtUserName(){ return cy.get('input[name="username"]')}
    txtPassword(){ return cy.get('input[name="password"]')}
    checkRememberMe(){ return cy.get('[name="remember_me"]')}
    btnSingIn(){ return cy.get('#sign_in_btnundefined')}
    lblHiUser(){ return cy.get('#menuUserLink > span')}

    //---------------------------ASSERTS--------------------//
    assertModalLogin() {return this.modalLogin().should('be.visible')}
    
}   export default LoginPO