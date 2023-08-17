class Rect {
  w;
  h;
  #area; //private property
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.calcArea();
  }
  calcArea() {
    this.#area = this.w * this.h;
  }
  getArea() {
    return this.#area;
  }
}
let rect = new Rect(5, 5);
console.log("rect", rect);
// rect.area = 100;
// rect.#area = 100;
console.log("rect", rect);
console.log(rect.getArea());
