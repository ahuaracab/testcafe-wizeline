import { Selector } from 'testcafe'

class OverviewPage{
    constructor(){
        this.summaryInfo = Selector('.summary_info')
        this.finishButtton = Selector('.cart_button')
        this.firstProduct = Selector('a[id="item_4_title_link"] div[class="inventory_item_name"]')
        this.secondProduct = Selector('a[id="item_0_title_link"] div[class="inventory_item_name"]')
    }
}

export default new OverviewPage()