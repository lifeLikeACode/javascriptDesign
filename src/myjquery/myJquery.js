export default class MyJquery {
  constructor(selector){
    let slice = Array.prototype.slice
    let dom = slice.call(document.querySelectorAll(selector));

    let len = dom ? dom.length : 0;
    
    for(let i = 0;i<len;i++){
      this[i] = dom[i]
    }
    this.length = len
    
  }
  addClass(val){
    for(let i = 0;i<this.length;i++){
        if(this[i].className){
          this[i].className += ' '
        }
        this[i].className += val
    }
    return this
  }
}
window.$ = (function (){
  return function(selector){
    return new MyJquery(selector)
  }
})()