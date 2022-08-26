class HomePage_PO {

    product_sort_container() {
       return cy.get('[data-test="product_sort_container"]')
    }

    InventoryItemsBtn () { 
        return cy.get('[class="btn btn_primary btn_small btn_inventory"]')
    }

    CartBtn(){
        return cy.get('.shopping_cart_link')
    }

    cartBadge(){
        return cy.get('.shopping_cart_badge')
    }
}
export default HomePage_PO;