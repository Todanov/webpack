import {$} from '../../core/DOM'

export function handlerResize(event,selector){
    const resizer = event.target
    const parent = resizer.closest('[data-type="resizable"]')
    const cords = parent.getBoundingClientRect()
    const type = event.target.dataset.resize
    const sideProp = type === 'col' ? 'bottom' : 'right'
     
    let value  
    
    $.css(resizer, {
     opacity:1,
     [sideProp] : '-5000px'
    })
    document.onmousemove = e => {
     if(type ==='col'){
         const delta = e.pageX - cords.right
          value = cords.width + delta
         $.css(resizer,{right: -delta + 'px'})
     }else{
         const delta=e.pageY -cords.bottom
          value = cords.height + delta
          $.css(resizer,{bottom: -delta + 'px'})
     }
     }
     
   
    document.onmouseup = () => {
         document.onmousemove = null
         document.onmouseup =null
         if(type==='col'){
             $.css(parent, {width:value + 'px'})
             selector.querySelectorAll(`[data-col="${parent.dataset.col}"]`)
                 .forEach(el => el.style.width = value + 'px')
         }else{
             parent.style.height = value + 'px'
             $.css(parent, {height:value + 'px'})
         }

         $.css(resizer,{
             opacity: 0,
             bottom: 0,
             right: 0,
         })
    }
}