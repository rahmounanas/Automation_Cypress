import { LoginPage } from "./Pages/LoginPage"
const loginPage = new LoginPage()

describe('All Login Tests ', function () {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    
    it('Login Valid', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Dashboard').should('be.visible')
    })

    it('Login Invalid', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin1234')
        loginPage.clickLogin()
        cy.contains('Dashboard').should('be.visible')
    })

})
