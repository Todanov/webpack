import { ExcelComponents } from "../../core/ExcelComponent";
import { createTable } from "./createTable";

import { handlerResize } from "./handlerResize";
export class Table extends ExcelComponents{
    static className = 'excel__table'
    constructor(selector){
        super(selector, {
            name:'Table',
            listeners:['mousedown']
        })
    }
    toHTML(){
        return createTable(20)
    }
    onMousedown(event){
        if(event.target.dataset.resize){
            handlerResize(event,this.selector)
        }
   
    }

}