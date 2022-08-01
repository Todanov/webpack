import { $ } from "./DOM"
import { onChanegeName } from "./utils"

export class DOMListeners{
    constructor(selector, options){
        this.selector = selector,
        this.name = options.name || ''
        this.listeners= options.listeners || []
    }

    addDOMListeners(){
        this.listeners.map(listener => {
            let onMethod = onChanegeName(listener)
            if(!this[onMethod]){
                throw  new Error(`Not fount metohod ${onMethod} in component ${this.name}`)
            }
            console.log(this)
            this[onMethod] =this[onMethod].bind(this)
            $.on(this.selector, listener, this[onMethod])
        
        })
    }

    removeDOMListeners(){
        this.listeners.map(listener => {
            let onMethod = onChanegeName(listener)
            this[onMethod] = this[onMethod].bind(this)
            $.rem(this.selector, listener, this[onMethods])
        })
    }
}