import Car from './Car.js'
import QuickCar from './QuickCar'
import SpecialCar from './SpecialCar'
import Trip from './Trip'
const car = new QuickCar('BWM', '浙A68888')
const trip = new Trip(car)
console.log(car)

trip.showCarMsg()
trip.showPay()