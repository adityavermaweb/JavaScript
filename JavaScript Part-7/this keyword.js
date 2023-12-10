const student = {
    name: "aditya",
    age: 21,
    eng: 96,
    math: 93,
    phy: 92,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) /3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}