import { ExcelComponents } from "../../core/ExcelComponent";

export class Formula extends ExcelComponents{
    static className = 'excel__formula'
    constructor(selector, options){
        super(selector,{
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options
        })
    }

    toHTML(){
        return `
        <div class="info">fx</div>
        <div id='formula' class="input" contenteditable spellcheck="false"></div>
        `
    }
    init(){
        super.init()
        this.formula = this.selector.querySelector('#formula')
        this.$on('table:select', cell => {
            // console.log(cell.textContent.innerHtml = event.target.textContent)
            this.formula.textContent = cell.textContent 
        })
        this.$on('table:input', cell => {
            this.formula.textContent=cell.textContent
        })
    }
    onInput(event){
        const text = event.target.textContent
        this.$emmit('formula:input', text)
    }
    onKeydown(event){
        if(event.key === 'Enter'|| event.key === 'Tab'){
            event.preventDefault()
            this.$emmit('formula:down',)
        }

    }
}