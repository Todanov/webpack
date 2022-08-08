import { DOMListeners } from "./DOMListeners";

export class ExcelComponents extends DOMListeners {
    constructor(selector, options={}){
        super(selector, options)
        this.emmit = options.emmit
        this.prepare()
      
    }
    prepare(){}
    toHTML(){
        return ''
    }
    $emmit(event, ...args){
        this.emmit.emmitet(event,...args)
    }
    $on(event,fn){
        this.emmit.subscribe(event,fn)
    }
    $remove(fn){
        this.emmit.unsubscribe(fn)
    }
    init(){
        this.addDOMListeners()
    }

    destroy(){
        this.removeDOMListeners()
        this.$remove()
    }
}