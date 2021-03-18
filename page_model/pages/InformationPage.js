import { Selector } from 'testcafe'

class InformationPage {
    constructor(){        
        this.firstnameField = Selector('#first-name')
        this.lastnameField = Selector('#last-name')
        this.postalcodeField = Selector('#postal-code')
        this.errorMessage = Selector('h3[data-test=error]')
        this.continueButton = Selector('.btn_primary')
    }
}

export default new InformationPage()