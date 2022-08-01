import { DOMListeners } from "./DOMListeners";

export class ExcelComponents extends DOMListeners {
    constructor(selector, options={}){
        super(selector, options)
    }
    toHTML(){
        return ''
    }

    init(){
        this.addDOMListeners()
    }
}