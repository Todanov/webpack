import { ExcelComponents } from "../../core/ExcelComponent";

export class Toolbar extends ExcelComponents{
    static className = 'excel__toolbar'
      constructor(selector, options){
        super(selector,{
          name: 'Toolbar',
          ...options
        }
        )
      }
    toHTML(){
        return `
        <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>

      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>

      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>

      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>

        `
    }
}