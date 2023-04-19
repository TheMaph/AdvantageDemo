class SignUpPO {
    menuUser() { return  cy.get('#menuUserLink')}
    modalLogin() { return cy.get('login-modal')}
    btnCreateAccount() { return cy.get('a.create-new-account').contains('CREATE NEW ACCOUNT')}
    txtUserName() { return cy.get('[name="usernameRegisterPage"]')}
    txtEmail() { return cy.get('[name="emailRegisterPage"]')}
    txtPassword() { return cy.get('[name="passwordRegisterPage"]')}
    txtConfirmPassword() { return cy.get('[name="confirm_passwordRegisterPage"]')}
    txtFirstName() { return cy.get('[name="first_nameRegisterPage"]')}
    txtLastName() { return cy.get('[name="last_nameRegisterPage"]')}
    txtPhoneNumber() { return cy.get('[name="phone_numberRegisterPage"]')}
    listBoxCountry() { return cy.get('[name="countryListboxRegisterPage"]')}
    txtCity() { return cy.get('[name="cityRegisterPage"]')}
    txtAddress() { return cy.get('[name="addressRegisterPage"]')}
    txtStateProvinceRegion() { return cy.get('[name="state_/_province_/_regionRegisterPage"]')}
    txtPostalCode() { return cy.get('[name="postal_codeRegisterPage"]')}
    checkIAgree() { return cy.get('[name="i_agree"]')}
    btnRegister() { return cy.get('#register_btnundefined')}
    lblName() { return cy.get('[a-hint="Username"] > .inputContainer > .animated')}
    lblEmail() { return cy.get('[a-hint="Email"] > .inputContainer > .animated')}
    lblPassword() {return cy.get('[a-hint="Password"] > .inputContainer > .animated')}
    lblConfirmPassword() { return cy.get('[a-hint="Confirm password"] > .inputContainer > .animated')}

    //------------------------------------ASSERTS------------------------------------//
    
    assertlblNameOut() { return this.lblName().should('not.have.class','invalid')}
    assertlblNameIn() { return this.lblName().should('have.class','invalid')}
    assertlblEmailOut() { return this.lblEmail().should('not.have.class','invalid')}
    assertlblEmailIn() { return this.lblEmail().should('have.class','invalid')}
    assertlblPasswordOut() { return this.lblPassword().should('not.have.class','invalid')}
    assertlblPasswordIn() { return this.lblPassword().should('have.class','invalid')}
    assertlblConfirmPasswordOut() { return this.lblConfirmPassword().should('not.have.class','invalid')}
    assertlblConfirmPasswordIn() { return this.lblConfirmPassword().should('have.class','invalid')}
    assertModalLogin() { return this.modalLogin().should('be.visible')}
    assertCreateAccount() { return cy.url('include', '/register')}
    assertRegister() { return this.checkIAgree().should('be.enabled')}
    assertCheckIAgreeAfter() { return this.checkIAgree().should('be.checked')}
    

} export default SignUpPO