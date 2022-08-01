class DOM{}



export  const $ = () => new DOM()

$.create = (tagName , classes='') => {
    let $el = document.createElement(tagName)
    if(classes){
        $el.classList.add(classes)
    }
    return $el
}

$.on = (tagName, method, cb)=>{
    tagName.addEventListener(method, cb)
}

$.on = (tagName, method, cb)=>{
    tagName.removeEventListener(method, cb)
}