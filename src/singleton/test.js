import Singleton from './index.js'

const s1 = Singleton.init('s1');
console.log(s1.name);
// console.log(Singleton.init)
const s2 = Singleton.init('s2');
console.log(s2.name);
s1.show()
s2.show()
s2.hide()
s1.hide()
console.log(`s1===s2${s1===s2}`);