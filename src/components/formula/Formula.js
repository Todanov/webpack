import { ExcelComponents } from "../../core/ExcelComponent";

export class Formula extends ExcelComponents{
    static className = 'excel__formula'
    constructor(selector){
        super(selector,{
            name: 'Formula',
            listeners: ['input']
        })
    }
    toHTML(){
        return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
    }
    onInput(event){
        console.log(event.target.textContent)
        console.log(this.selector)
    }
}