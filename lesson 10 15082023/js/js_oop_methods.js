class Rect {
  w = 1;
  h = 1;
  calcArea() {
    return this.w * this.h;
  }
  calcPerimeter() {
    return 2 * (this.w + this.h);
  }
}

let r1 = new Rect();
let r2 = new Rect();
r1.w = 5;
r1.h = 5;
let r1Area = r1.calcArea();
let r1p = r1.calcPerimeter();
console.log("r1Area", r1Area);
console.log("r1p", r1p);

let r2Area = r2.calcArea();
let r2p = r2.calcPerimeter();
console.log("r2Area", r2Area);
console.log("r2p", r2p);
