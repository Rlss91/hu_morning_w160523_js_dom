class Student {
  static ID = 0;
  id;
  first;
  constructor(first) {
    this.#nextId();
    this.first = first;
  }
  #nextId() {
    this.id = Student.ID;
    Student.ID++;
    localStorage.setItem("nextId", Student.ID + "");
  }
}

let studentsArr = [
  new Student("kenny"), //0
  new Student("james"), //1
  new Student("john"), //2
];
