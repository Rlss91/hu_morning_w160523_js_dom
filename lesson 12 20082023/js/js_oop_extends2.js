class Point {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let p = new Point(5, 5);

class Point3D extends Point {
  //x - point
  //y - point
  z;
  //   constructor(z) {
  //     // super(x, y);
  //     super(2, 20);
  //     this.z = z;
  //   }
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
}

// let p2 = new Point3D(5); // x = 2, y = 20, z = 5
let p2 = new Point3D(2, 3, 4);
