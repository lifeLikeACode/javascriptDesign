class Person {
  constructor(name){
    this.name = name
  }
  getName (){
    return this.name
  }
  setName(name){
    this.name = name
  }
}
const p = new Person('xj')
alert(p.getName())