
import { $ } from "../../core/DOM";
import { ExcelComponents } from "../../core/ExcelComponent";
import { nextSelector, range } from "../../core/utils";
import { createTable } from "./createTable";

import { handlerResize } from "./handlerResize";
import { TableSelection } from "./TableSelection";
export class Table extends ExcelComponents{
    static className = 'excel__table'
    constructor(selector,options){
        super(selector, {
            name:'Table',
            listeners:['mousedown','keydown','input'],
            ...options
        })
    }
    prepare(){

    }
    init(){
        super.init()
        this.selection = new TableSelection()
        const cell =this.selector.querySelector('[data-id="0:0"]')
        this.selection.selected(cell)
        this.$emmit('table:select', cell)
        this.$on('formula:input', text => {
            console.log(text)
            this.selection.current.innerHTML = text
        })
        this.$on('formula:down' ,event => {
            this.selection.current.focus()
        })
    }

    toHTML(){
        return createTable(20)
    }
    onMousedown(event){
        if(event.target.dataset.resize){
            handlerResize(event,this.selector)
        }else if(event.target.dataset.cell === 'cell'){
                const target = event.target
            if(event.shiftKey){
               let start = $.id(target.dataset.id)
               let end = $.id(this.selection.current.dataset.id)
               const cols = range(start.col,end.col)
               const rows = range(start.row,end.row)
               const ids = cols.reduce((acc,col)=>{
                    rows.forEach(row=>acc.push(`${row}:${col}`))
                    return acc
            },[])
            console.log(ids)
               const cells = ids.map(id => this.selector.querySelector(`[data-id="${id}"]`))
               
               this.selection.selectedGroup(cells)
            }else{
                this.selection.selected(target)
            }
        }
   
    }
    onKeydown(event){
        const keys = ['Enter', 'Tab', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight']
        const {key} = event

        if(keys.includes(key) && !event.shiftKey){
            event.preventDefault()
            const id  = $.id(this.selection.current.dataset.id)
            const next = this.selector.querySelector(nextSelector(key, id))
            this.selection.selected(next)
            this.$emmit('table:select', next)
        }
    }
    onInput(event){
        this.$emmit('table:input', event.target)
    }

}

