import Car from './Car'
export default class QuickCar extends Car {
    constructor(name, number) {
        super(name, number);
        this.price = 1;
    }
}