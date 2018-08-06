export default class Trip {
    constructor(car) {

        this.car = car
    }
    showCarMsg() {
        console.log(`车牌号是${this.car.number},车辆品牌为${this.car.name}`)
    }
    showPay() {
        console.log(`请支付车费${this.car.price * 5}`)
    }
}