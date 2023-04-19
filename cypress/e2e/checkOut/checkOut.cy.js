import User from "../singUp/signUpUser"
import CheckOutPO from "./checkOutPO"
import Credentials from "./checkoutCredentials"

const checkOutPO = new CheckOutPO()
const user = new User().campoMtd()
const credential = new Credentials()
describe('Checkout #1', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
        cy.login(Cypress.env('login').user,Cypress.env('login').password)
        cy.popularItems()
        cy.AddingProductToCart()
        checkOutPO.btnCheckout().click()
    })

    it('Verificar que se pueda editar la información de usuario desde el módulo "Payment".', () => {
        checkOutPO.editDetails()
            .click()
        checkOutPO.txtAddress()
            .clear().type(user.address)
        checkOutPO.txtPostal()
            .clear().type(user.postalCode)
        checkOutPO.btnNextEdit()
            .click()
        checkOutPO.lblPaymentMethod()
            .should('have.class', 'selected')
    });

    it('Verificar la habilitacion de métodos de pago por "SafePay" y "MasterCredit".', () => {
        checkOutPO.btnNext()
            .click()
        checkOutPO.radioSafePay()
            .click()
        checkOutPO.txtUserNameSafePay()
            .should('be.visible').and('be.enabled')
        checkOutPO.txtPasswordSafePay()
            .should('be.visible').and('be.enabled')
        checkOutPO.radioMasterCredit()
            .click()
        checkOutPO.txtCardNumber()
            .should('be.visible').and('be.enabled')
        checkOutPO.txtCvvNumber()
            .should('be.visible').and('be.enabled')
    });

    it('Verificar que al ingresar datos invalidos no se realice la compra a través de "SafePay".', () => {
        checkOutPO.btnNext()
            .click()
        checkOutPO.radioSafePay()
            .click()
        checkOutPO.txtUserNameSafePay()
            .type('Name')
            .blur()
            checkOutPO.assertInvalidUserName()
        checkOutPO.txtPasswordSafePay()
            .type('password')
            .blur()
            checkOutPO.assertInvalidPassword()
        checkOutPO.checkSafeChanges()
            .click()
            .should('be.visible').and('not.be.checked')
        checkOutPO.btnPayNow()
            .should('be.disabled')
    });

    it('Verificar que al ingresar datos invalidos no se realice la compra a través de "MasterCredit".', () => {
        checkOutPO.btnNext()
            .click()
        checkOutPO.radioMasterCredit()
            .click()
        checkOutPO.txtCardNumber()
            .type('XXXXXXXX1234')
            .blur()
            checkOutPO.assertInvalidCardNumber()
        checkOutPO.txtCvvNumber()
            .type('1A2')
            .blur()
            checkOutPO.assertInvalidCvvNumber()
        checkOutPO.boxMonth()
            .type('13')
        checkOutPO.boxYear()
            .type('2010')
        checkOutPO.txtCardName()
            .type('201ASdas CRI2ADS')
            .blur()
            checkOutPO.assertInvalidCardName()
        checkOutPO.btnPayNow()
            .should('be.disabled')
    });

    afterEach(() => {
        cy.removeProduct()
    })
})

describe('Checkout #2', () =>{

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
        cy.login(Cypress.env('login').user,Cypress.env('login').password)
        cy.popularItems()
        cy.AddingProductToCart()
        checkOutPO.btnCheckout().click()
    })
    
    it('Verificar que al introducir credenciales correctas se lleve a cabo la compra a través de "SafePay".', () => {
        checkOutPO.btnNext()
            .click()
        checkOutPO.radioSafePay()
            .click()
        checkOutPO.txtUserNameSafePay()
            .type(credential.safePay().userName)
            .should('have.value',credential.safePay().userName)
        checkOutPO.txtPasswordSafePay()
            .type(credential.safePay().password)
            .should('have.value',credential.safePay().password)
        checkOutPO.checkSafeChanges()
            .click()
            .should('be.visible').and('not.be.checked')
        checkOutPO.btnPayNow()
            .click()
        checkOutPO.divPaymentSuccess()
            .should('be.visible')
        checkOutPO.txtThankText()
            .should('contain', 'Thank you for buying with Advantage')
        checkOutPO.successSections().each((elemento) => {
            cy.wrap(elemento)
                .should('be.visible')
        })
    });

    it('Verificar que al introducir credenciales correctas se lleve a cabo la compra a través de "MasterCredit".', () => {
        checkOutPO.btnNext()
            .click()
        checkOutPO.radioMasterCredit()
            .click()
        checkOutPO.txtCardNumber()
            .type(credential.masterCredit().cardNumber)
            .invoke('val')
            .then(($val) => {
                expect(credential.masterCredit().cardNumber).to.equal($val.replace(/ /g,''))
            })
        checkOutPO.txtCvvNumber()
            .type(credential.masterCredit().cvvNumber)
            .should('have.value',credential.masterCredit().cvvNumber)
        checkOutPO.boxMonth()
            .type(credential.masterCredit().month)
            .should('have.value',credential.masterCredit().month)
        checkOutPO.boxYear()
            .type(credential.masterCredit().year)
            .should('have.value',credential.safePay().password)
        checkOutPO.txtCardName()
            .type(credential.masterCredit().cardName)
            .should('have.value',credential.safePay().password)
        checkOutPO.btnPayNow()
            .click()
        checkOutPO.divPaymentSuccess()
            .should('be.visible')
        checkOutPO.txtThankText()
            .should('contain', 'Thank you for buying with Advantage')
        checkOutPO.successSections().each((elemento) => {
            cy.wrap(elemento)
                .should('be.visible')
        })
    });
})