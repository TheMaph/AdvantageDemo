import LoginPO from "./loginPO"

const loginPO = new LoginPO()
const userName = Cypress.env('login').user
const password = Cypress.env('login').password
describe('Iniciar Sesion', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include',Cypress.env('baseUrl'))
    })
    it('Verificar que al ingresar datos previamente registrados en los campos "username" y "password", inicie sesión correctamente.', () => {
        cy.login(userName,password)
        cy.url()
            .should('include',Cypress.env('baseUrl'))
        loginPO.lblHiUser()
            .should('contain', userName)
    });

    it('Verificar que al ingresar datos no correspondientes en los campos "username" y "password", no sea posible iniciar sesión.', () => {
        cy.login(userName,'fakePassword')
        loginPO.lblResultMessage()
            .should('contain', 'Incorrect user name or password.')
            .and('be.visible')
    });
})