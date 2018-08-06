class Singleton {
  constructor(name){
    this.name = name
    this.state = 'hide'
  }
  show(){
    if(this.state === 'show'){
      console.log('已经显示')
      return
    }
    console.log('触发显示')
    this.state = 'show'
  }
  hide(){
    if(this.state === 'hide'){
      console.log('已经隐藏')
      return
    }
    console.log('触发隐藏')
    this.state = 'hide'
  }
}
Singleton.init = (function(){
  let instance = null
  return function(name){
    if(!instance) {
      instance =  new Singleton(name)
    }
    instance.name = name
    return instance
  }
}())
export default Singleton