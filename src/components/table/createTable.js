const CODES ={
    A : 65,
    Z : 90
}
function createCell(){
    return `
    <div class="cell" contenteditable="">
          
    </div>
    `
}
function createColumn(element){
    return `
        <div class="column">
            ${element}
        </div>
    `
}

function createRow(index, content){
    return `
        <div class="row">
           <div class="row-info">${index ? index : ''}</div> 
           <div class = "row-data">${content}</div> 
        </div>
    `
}

function toCharCode(_ ,index){
    return String.fromCharCode(CODES.A + index)
}

export const createTable =(rowsCount=15)=> {
    const columnCount = CODES.Z -CODES.A + 1
    const rows =[]
    const columns =new Array(columnCount)
        .fill('')
        .map((el,index) => toCharCode(el,index) )
        .map(el =>createColumn(el))
        .join('')
    console.log(columns) 
    rows.push(createRow(null,columns))

    for(let i = 0; i < rowsCount; i++){
        const cells =new Array(columnCount)
        .fill('')
        .map((el,index)=>createCell(el, index))
        .join('')
        rows.push(createRow(i  + 1,cells))
    }
    return rows.join('')
}