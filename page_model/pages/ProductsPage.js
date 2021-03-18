import { Selector } from 'testcafe'

class ProductsPage{
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.burgerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.cartLink = Selector('.shopping_cart_link')
        this.addFirstProductToCartButton = Selector('div.inventory_item:nth-child(1) > div.pricebar:nth-child(3) > button')
        this.addSecondProductToCartButton = Selector('div.inventory_item:nth-child(2) > div.pricebar:nth-child(3) > button')
        this.firstProduct = Selector('a[id="item_4_title_link"] div[class="inventory_item_name"]')
        this.secondProduct = Selector('a[id="item_0_title_link"] div[class="inventory_item_name"]')
    }
}

export default new ProductsPage()