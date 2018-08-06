import FactoryButton from './index'
// console.log(FactoryButton)
const create = new FactoryButton()
const shopCarButton = create.createButton('shopCar')
shopCarButton.show()

const buyButton = create.createButton('buy')
buyButton.show()
