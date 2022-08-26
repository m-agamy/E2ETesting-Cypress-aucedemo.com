class CheckoutPage_PO {

    checkoutPage_title() {
      return cy.get('.title');
   }

    finishBtn() {
      return cy.get('[data-test="finish"]')
   }
   thanksMsg() {
      return cy.get('.complete-header')
   }
}
export default CheckoutPage_PO;