class FactoryButton {
  constructor(){
  }
  createButton(type){
    return new Button(type)
  }
}
class Button {
  constructor(name){
    this.name = name
  }
  show(){
    console.log(`这是一个${this.name}按钮`)
  }
}
export default FactoryButton 
