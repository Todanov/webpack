import { ExcelComponents } from "../../core/ExcelComponent";
import { createTable } from "./createTable";

export class Table extends ExcelComponents{
    static className = 'excel__table'
    toHTML(){
        return createTable(20)
    }
}