class CartPage_PO {

    cartPage_title() {
       return cy.get('.title');
    }
    cartPage_title() {
        return cy.get('.title');
     }
     checkoutBtn() {
        return cy.get('[data-test="checkout"]');
     }
     removeBtn(){
         return cy.get('[class="btn btn_secondary btn_small cart_button"]')
     }
}
export default CartPage_PO;