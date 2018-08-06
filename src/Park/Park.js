class Park {
    constructor(floors, carList) {
        this.floors = floors || [];
        this.carList = {} //存储摄像头拍摄返回的车辆信息
    }

    in (car) {

    }
    out(car) {

    }
    emptyPlaceNumber() {
        return this.floors.map(floor => {
            return `${floor.index} 层还有 ${floor.emptyPlaceNumber()}个空闲车位`
        }).join('\n')
    }
}