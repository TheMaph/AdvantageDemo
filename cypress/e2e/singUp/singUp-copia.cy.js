import SignUpPO from "./signUpPO"
import User from "./signUpUser"

const signUp = new SignUpPO();
const user = new User();
describe ('Sign a client', () => {

    beforeEach( () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
    })

    it('correct information', () => {
        signUp.menuUserMtd().click()
        signUp.assertModalLoginMtd()
        signUp.btnCreateAccountMtd().click()

        signUp.assertCreateAccountMtd()
        //---------------------------------Typing info---------------------------------------//
        signUp.txtUserNameMtd()
            .type(user.atributo.userName)
            .invoke('val')
            .then(($val) => {
                expect($val.length).to.be.below(16)
            })
        signUp.txtEmailMtd()
            .type(user.atributo.email)
            .invoke('val')
            .then(($val) => {
                cy.wrap($val).should('contain','@')
            })
        signUp.txtPasswordMtd()
            .type(user.atributo.password)
            .invoke('val')
            .then(($val) => {
                expect($val).to.match(/^(?=.*[A-Z])(?=.*\d)/)
                cy.wrap($val).should('have.length.greaterThan', 4)
            })
        signUp.txtConfirmPasswordMtd()
            .type(user.atributo.password,{force:true})
            .invoke('val')
            .then(($val) => {
                signUp.txtPasswordMtd()
                    .invoke('val')
                    .then(($val2) => {
                        expect($val).to.equal($val2)
                    })
            })
        signUp.txtFirstNameMtd()
            .type(user.atributo.firstName)
            .invoke('val')
            .then(($val) => {
                expect($val).to.match(/^[a-zA-Z]+$/)
            })

        signUp.txtLastNameMtd()
            .type(user.atributo.lastName)
            .invoke('val')
            .then(($val) => {
                expect($val).to.match(/^[a-zA-Z]+$/)
            })
        signUp.txtPhoneNumberMtd()
            .type(user.atributo.phoneNumber)
            .invoke('val')
            .then(($val) => {
                expect($val).to.match(/\d+/)
            })
        signUp.listBoxCountryMtd()
            .select(user.atributo.country)
        signUp.txtCityMtd()
            .type(user.atributo.city)
            .invoke('val')
            .then(($val) => {
                expect($val).to.match(/^[a-zA-Z]+$/)
            })
        signUp.txtAddressMtd()
            .type(user.atributo.address)
        signUp.txtStateProvinceRegionMtd()
            .type(user.atributo.SPR, {force:true})
        signUp.txtPostalCodeMtd()
            .type(user.atributo.postalCode)
        //------------------------------------------------------------------------------------//
        signUp.checkIAgreeMtd().click()
        signUp.assertRegister()
        signUp.assertCheckIAgreeAfter()

        //signUp.btnRegisterMtd().click()
        signUp.lblHiUserMtd()
            .should('contain',user.atributo.userName)
    })

})