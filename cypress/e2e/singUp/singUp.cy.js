import SignUpPO from "./signUpPO"
import User from "./signUpUser"

const signUp = new SignUpPO();
const campo = new User().campoMtd();
describe ('Registrarse', () => {

    beforeEach( () => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
        signUp.menuUser().click()
        signUp.assertModalLogin()
        signUp.btnCreateAccount().click()
        signUp.assertCreateAccount()
    })

    it('Verificar que al introducir correctamente todos los datos de registro, y seleccionar el acuerdo de "politica y privacidad" permita crear una cuenta.', () => {
        signUp.txtUserName()
            .type(campo.userName)
            .invoke('val')
            .then(($val) => {
                expect($val.length).to.be.below(16)
                
            })
        signUp.txtEmail()
            .type(campo.email)
            .invoke('val')
            .then(($val) => {
                cy.wrap($val).should('contain','@')
            })
        signUp.txtPassword()
            .type(campo.password)
            .invoke('val')
            .then(($val) => {
                expect($val).to.match(/^(?=.*[A-Z])(?=.*\d)/)
                cy.wrap($val).should('have.length.greaterThan', 4)
            })
        signUp.txtConfirmPassword()
            .type(campo.password,{force:true})
            .invoke('val')
            .then(($val) => {
                signUp.txtPassword()
                    .invoke('val')
                    .then(($val2) => {
                        expect($val).to.equal($val2)
                    })
            })
        signUp.txtFirstName()
            .type(campo.firstName)
        signUp.txtLastName()
            .type(campo.lastName)
        signUp.txtPhoneNumber()
            .type(campo.phoneNumber)
        signUp.listBoxCountry()
            .select(campo.country)
        signUp.txtCity()
            .type(campo.city)
        signUp.txtAddress()
            .type(campo.address)
        signUp.txtStateProvinceRegion()
            .type(campo.SPR, {force:true})
        signUp.txtPostalCode()
            .type(campo.postalCode)
        
        signUp.assertlblNameOut()
        signUp.assertlblEmailOut()
        signUp.assertlblPasswordOut()
        signUp.assertlblConfirmPasswordOut()

        signUp.checkIAgree().click()
        signUp.assertRegister()
        signUp.assertCheckIAgreeAfter()
        signUp.btnRegister().click()
        signUp.menuUser()
            .should('contain',campo.userName)
    })

    it('Verificar que al introducir datos no válidos de  registro y seleccionar el acuerdo de "politica y privacidad" no permita crear una cuenta.', () => {
        signUp.txtUserName()
            .type("InvalidUserName.12")
            .blur()
        signUp.assertlblNameIn()
            
        signUp.txtEmail()
            .type("InvalidEmail")
            .blur()
        signUp.assertlblEmailIn()
            
        signUp.txtPassword()
            .type("uno")
            .blur()
        signUp.assertlblPasswordIn()

        signUp.txtConfirmPassword()
            .type("hola",{force:true})
            .blur()
        signUp.assertlblConfirmPasswordIn()

        signUp.checkIAgree().click()
        signUp.btnRegister()
            .should('be.disabled')
    })

})