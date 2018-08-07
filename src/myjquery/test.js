import myJquery from './myJquery'

console.log($('p'))
console.log($('h1'))
console.log(`$('p') === $('h1')是同一个实例吗？ => ${$('p') === $('h1')}`)
$('p').addClass('className').addClass('bg')