import { Selector } from 'testcafe'

class FinalPage{
    constructor(){
        this.completeHeaderTitle = Selector('.complete-header')        
    }
}

export default new FinalPage()