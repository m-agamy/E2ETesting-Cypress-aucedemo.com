class InfoPage_PO {

    firstName() {
       return cy.get('[data-test="firstName"]');
    }
    lastName() {
        return cy.get('[data-test="lastName"]');
     }
     zipCode() {
        return cy.get('[data-test="postalCode"]');
     }
     infoPage_title() {
      return cy.get('.title');
   }
   infoPage_continueBtn() {
      return cy.get('[data-test="continue"]')
   }

}
export default InfoPage_PO;