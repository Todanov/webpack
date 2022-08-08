export class Observe{
    constructor(){
        this.listeners =[]
    }

    emmitet(event , ...args){
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
    }
    subscribe(event, fn){
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
    }
    unsubscribe(fn){
        this.listeners = this.listeners.filter(listener => listener !==fn)   
     }
}



