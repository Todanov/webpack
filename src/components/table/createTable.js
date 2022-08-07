const CODES ={
    A : 65,
    Z : 90
}
function createCell(_,col){
   
    return `
    <div class="cell" contenteditable="" data-col=${col}>
          
    </div>
    `
}
function createColumn(element,index){

    return `
        <div class="column" data-type="resizable" data-col=${index}>
            ${element}
            <div class="col-resize" data-resize="col" ></div>
        </div>
    `
}

function createRow(index, content){
    const resize = index ? '<div class="row-resize" data-resize="row"></div>': ''
    return `
        <div class="row" data-type="resizable">
           <div class="row-info">${index ? index : ''}
           ${resize}
           </div> 
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
        .map((el,i) =>createColumn(el,i))
        .join('')
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