import LoginPage_PO from "../support/pageObjects/loginPage"
import HomePage_PO from "../support/pageObjects/home.Page"
import CartPage_PO from "../support/pageObjects/cartPage"
import InfoPage_PO from "../support/pageObjects/infoPage"
import CheckoutPage_PO from "../support/pageObjects/checkoutPage"

const loginPage_PO = new LoginPage_PO();
const homePage_PO = new HomePage_PO();
const cartPage_PO = new CartPage_PO();
const infoPage_PO = new InfoPage_PO();
const checkoutPage_PO = new CheckoutPage_PO();

beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
})

describe('Positive E2E Scenario', () => {
 
  it('user should be able to do a successful check out', () => {

    //Login with valid credentials.
    loginPage_PO.visitloginPage();
    loginPage_PO.userName().type('standard_user');
    loginPage_PO.password().type('secret_sauce');
    loginPage_PO.loginButton().click();
    homePage_PO.product_sort_container().should('be.visible');
    //sort items by price 
    homePage_PO.product_sort_container().select('Price (low to high)');
    homePage_PO.product_sort_container().should('have.value', 'lohi');
    //Add top three products.
    /* homePage_PO.InventoryItemsBtn().eq(0).click();
      homePage_PO.InventoryItemsBtn().eq(1).click();
      homePage_PO.InventoryItemsBtn().eq(3).click();*/
    homePage_PO.InventoryItemsBtn().each(($el, index, list) => {
      if (index <= 2) cy.wrap($el).click();
    })
    homePage_PO.cartBadge().should('exist');
    homePage_PO.cartBadge().should('have.text', '3');
    //continue to checkout 
    homePage_PO.CartBtn().click();
    cartPage_PO.cartPage_title().should('have.text', 'Your Cart');

    cartPage_PO.checkoutBtn().click();
    infoPage_PO.infoPage_title().should('have.text', 'Checkout: Your Information');

    //fill in info
    infoPage_PO.firstName().type('standard');
    infoPage_PO.lastName().type('user');
    infoPage_PO.zipCode().type('1234');
    infoPage_PO.infoPage_continueBtn().click();

    //Finish checkout
    checkoutPage_PO.checkoutPage_title().should('have.text', 'Checkout: Overview');
    checkoutPage_PO.finishBtn().click();
    checkoutPage_PO.thanksMsg().should('have.text', 'THANK YOU FOR YOUR ORDER');

  })

})

describe('Negative Scenario', () => {

  it('Login With invalid users', () => {

    //Login with invalid credentials.
    loginPage_PO.visitloginPage();
    loginPage_PO.userName().type('user');
    loginPage_PO.password().type('invalid');
    loginPage_PO.loginButton().click();
    loginPage_PO.errorMsg().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  })

  it('Remove products from cart', () => {

    //Login with valid credentials.
    loginPage_PO.visitloginPage();
    loginPage_PO.userName().type('standard_user');
    loginPage_PO.password().type('secret_sauce');
    loginPage_PO.loginButton().click();
    homePage_PO.product_sort_container().should('be.visible');
    //sort items by price 
    homePage_PO.product_sort_container().select('Price (low to high)');
    homePage_PO.product_sort_container().should('have.value', 'lohi');
    //Add top three products.
    homePage_PO.InventoryItemsBtn().each(($el, index, list) => {
      if (index <= 2) cy.wrap($el).click();
    })

    homePage_PO.cartBadge().should('exist');
    homePage_PO.cartBadge().should('have.text', '3');
    //continue to checkout 
    homePage_PO.CartBtn().click();
    cartPage_PO.cartPage_title().should('have.text', 'Your Cart');
    //Remove Products from the Cart
    cartPage_PO.removeBtn().each(($el, index, list) => {
      if (index <= 2) cy.wrap($el).click();
    })
    cartPage_PO.removeBtn().should('not.exist');

  })
 

})
