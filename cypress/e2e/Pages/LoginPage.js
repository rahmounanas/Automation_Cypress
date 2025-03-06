export class LoginPage{
    username_input = "[placeholder='username']"
    password_input = "[placeholder='password']"
    Login_button = '.oxd-button'

    enterUsername(user){
        cy.get(this.username_input).type(user)
    }

    enterPassword(pass){
        cy.get(this.password_input).type(pass)
    }

    clickLogin(){
        cy.get(this.Login_button).click()
    }
}