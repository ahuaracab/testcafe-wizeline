import { Selector } from 'testcafe'

class CartPage {
    constructor(){
        this.cartTitle = Selector('.subheader')
        this.checkoutButton = Selector('.checkout_button')
        this.firstProduct = Selector('a[id="item_4_title_link"] div[class="inventory_item_name"]')
        this.secondProduct = Selector('a[id="item_0_title_link"] div[class="inventory_item_name"]')
    }
}

export default new CartPage()