import { $ } from "../../core/DOM"

export class Excel{
    constructor(selector, options){
        this.$el=document.querySelector(selector)
        this.components = options.components
    }

    Root(){
        let $root = $.create('div', 'excel')
        this.components = this.components.map(Component => {
            let $element = $.create('div',Component.className)
            let component = new Component($element)
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
}