class Malben {
  w;
  h;
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  calcArea() {
    return this.w * this.h;
  }
  calcPerimeter() {
    return 2 * (this.w + this.h);
  }
}

/*
    fish extends all properties and methods of animal
*/
class Ribua extends Malben {}

let ribua = new Ribua(5, 5);
console.log("ribua", ribua);

class Animal {
  raceName;
  #something;
  constructor(raceName, something) {
    this.raceName = raceName;
    this.#something = something;
  }
  printSomething() {
    console.log("something", this.#something);
  }
}

let animal = new Animal("asdf", "yes");
animal.printSomething();

/*
    fish extends all properties and methods of animal
*/
class Fish extends Animal {
  zimmimType;
  constructor(raceName, zimmimType) {
    super(raceName, "kiwi"); //constructor of parent class
    this.zimmimType = zimmimType;
  }
  /*
    private methods or properties not accessible in classes that extends from another class
  */
  //   printFishSomething() {
  //     console.log("zimmim type", this.zimmimType, "something", this.#something);
  //   }
}

let fish = new Fish("marlin", "asdf");
console.log("fish", fish);
// fish.printSomething();
// fish.printFishSomething();

/*
    fish extends all properties and methods of animal
*/
class Yonek extends Animal {
  numberOfMonth;
  constructor(raceName, numberOfMonth) {
    super(raceName);
    this.numberOfMonth = numberOfMonth;
  }
}

class Circle {
  r;
}

class CircleChild extends Circle {
  constructor(r) {
    super();
    this.r = r;
  }
}
