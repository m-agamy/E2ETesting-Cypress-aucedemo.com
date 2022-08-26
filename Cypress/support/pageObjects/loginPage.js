class LoginPage_PO {

    visitloginPage() {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs');
    }

    userName() {
       return cy.get('[data-test="username"]');
    }
    password() {
        return cy.get('[data-test="password"]');
    }
    loginButton() {
        return cy.get('[data-test="login-button"]');
    }
    errorMsg() {
        return cy.get('[data-test="error"]');
    }
}
export default LoginPage_PO;