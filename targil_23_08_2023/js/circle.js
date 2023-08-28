class Circle {
  r;
  #area;
  #perimeter;
  constructor(r) {
    this.r = r;
    this.#calcArea();
  }
  #calcArea() {
    this.#area = Math.PI * this.r * this.r;
  }
}

// let c = new Circle(5)
// c.
