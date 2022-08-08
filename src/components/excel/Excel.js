import { $ } from "../../core/DOM"
import { Observe } from "../../core/Observe"

export class Excel{
    constructor(selector, options){
        this.$el=document.querySelector(selector)
        this.components = options.components
        this.emmiter = new Observe()
    }

    Root(){
        let $root = $.create('div', 'excel')
        const componentsOptions ={
            emmit: this.emmiter
        }
        this.components = this.components.map(Component => {
            let $element = $.create('div',Component.className)
            let component = new Component($element, componentsOptions)
            $element.innerHTML = component.toHTML()
            $root.append($element)
            return component
        })
        return $root
    }

    render(){
        this.$el.append(this.Root())
        this.components.map(component => component.init())
    }
    destroy(){
        this.components.map(componenet => componenet.destroy())
    }
}