class Place {
    constructor() {
        this.empty = true
    }

    in () {
        this.empty = false;
    }

    out() {
        this.empty = true;
    }
}