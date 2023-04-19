class CheckOutPO{
    btnCheckout(){ return cy.get('#checkOutPopUp')}
    editDetails(){ return cy.get('[role="link"]').contains('Edit shipping details') }
    txtAddress(){ return cy.get('[name="address"]') }
    txtPostal(){ return cy.get('[name="postal_code"]') }
    btnNextEdit(){ return cy.get('#next_btnundefined') }
    btnNext(){ return cy.get('#next_btn')}
    lblPaymentMethod(){ return cy.get('.roboto-regular').contains('2. PAYMENT METHOD')}
    radioSafePay(){ return cy.get('[name="safepay"]')}
    radioMasterCredit(){ return cy.get('[name="masterCredit"]') }
    txtUserNameSafePay(){ return cy.get('[name="safepay_username"]')}
    lblInvalidUserName(){ return cy.get('[sec-model="savePay.username"] > .inputContainer> label')}
    txtPasswordSafePay(){ return cy.get('[name="safepay_password"]')}
    lblInvalidPassword(){ return cy.get('[sec-model="savePay.password"] > .inputContainer >label')}
    checkSafeChanges(){ return cy.get('[name="save_safepay"]')}
    checkMasterCredit(){ return cy.get('[name="save_master_credit"]')}
    btnPayNow(){ return cy.get('#pay_now_btn_SAFEPAY')}
    txtCardNumber() { return cy.get('[name="card_number"]') }
    lblInvalidCardNumber(){ return cy.get('[sec-model="card.number"] > .inputContainer > label') }
    txtCvvNumber(){ return cy.get('[name="cvv_number"]')}
    lblInvalidCvvNumber(){ return cy.get('[sec-model="card.cvv"] > .inputContainer > label')}
    boxYear(){ return cy.get('[name="yyyyListbox"]')}
    boxMonth(){ return cy.get('[name="mmListbox"]')}
    txtCardName(){ return cy.get('[name="cardholder_name"]')}
    lblInvalidCardName() { return cy.get('[sec-model="card.name"] > .inputContainer > label')}
    divPaymentSuccess(){ return cy.get('#orderPaymentSuccess')}
    txtThankText(){ return cy.get('#orderPaymentSuccess > h2 > span')}
    successSections(){ return cy.get('.seccion')}

    //--------------------------------------ASSERTS-----------------------------//

    assertInvalidUserName(){ return this.lblInvalidUserName().should('have.class','invalid') }
    assertInvalidPassword(){ return this.lblInvalidPassword().should('have.class','invalid')}
    assertInvalidCardNumber(){ return this.lblInvalidCardNumber().should('have.class','invalid') }
    assertInvalidCvvNumber(){ return this.lblInvalidCvvNumber().should('have.class','invalid')}
    assertInvalidCardName(){ return this.lblInvalidCardName().should('have.class','invalid')}
}export default CheckOutPO