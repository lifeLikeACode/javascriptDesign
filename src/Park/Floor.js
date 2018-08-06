class Floor {
    constructor(index, places) {
        this.index = index;
        this.places = places || [];
    }
    emptyPlaceNumber() {
        let num = 0
        this.places.forEach(p => {
            if (p.empty === true)
                num += 1
        })
        return num
    }
}