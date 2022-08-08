export class TableSelection{
    static className ="selected"
    constructor(){
        this.gruop =[]
        this.current = null
    }

    selected($el){
        console
        this.clear()
        $el.focus()
        $el.classList.add(TableSelection.className)
        this.gruop.push($el)
        this.current =$el
    }
    clear(){
        this.gruop.forEach($el =>$el.classList.remove(TableSelection.className) )
        this.gruop=[]
        
    }
    selectedGroup(gruop=[]){
        this.clear()
        this.gruop = gruop
        this.gruop.forEach($el => $el.classList.add(TableSelection.className))
    }
}