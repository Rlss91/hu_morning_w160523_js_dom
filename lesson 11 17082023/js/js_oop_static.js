class Circle {
  static pi = 3.14;
  static myMethod(param1) {}
  r;
  constructor(r) {
    this.r = r;
  }
  calcP() {
    return 2 * Circle.pi * this.r;
  }
}

console.log("static pi", Circle.pi);
let c = new Circle(5);
let c2 = new Circle(10);
console.log({ c, c2 });

//targil
class Distance {
  static cmToMeter = 100;
  cm;
  constructor(cm) {
    this.cm = cm;
  }
  convertMeterToCm(meter) {
    this.cm = meter * Distance.cmToMeter;
  }
}
let d = new Distance(0);
d.convertMeterToCm(7);
console.log(d);
