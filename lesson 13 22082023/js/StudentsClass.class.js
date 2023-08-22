class StudentsClass {
  students_grades; //array of students grades
  constructor(students_grades) {
    this.students_grades = students_grades;
  }
  print() {
    console.log("students_grades", this.students_grades);
    console.log("length of students_grades", this.students_grades.length);
    let sum = 0;
    for (let grade of this.students_grades) {
      sum += grade;
    }
    console.log("sum of students_grades", sum);
    let avg = sum / this.students_grades.length;
    console.log("avg of students_grades", avg);
  }
  add(grade) {
    this.students_grades = [...this.students_grades, grade]; // push the new way
  }
  between(min, max) {
    //between
    let counter = 0;
    for (let grade of this.students_grades) {
      if (grade >= min && grade <= max) {
        counter++;
      }
    }
    return counter;
  }
  data() {
    let failed = 0, //0-69
      pass = 0, //70-90
      top = 0; //91-100
    for (let grade of this.students_grades) {
      if (grade >= 0 && grade <= 69) {
        failed++;
      } else if (grade >= 70 && grade <= 90) {
        pass++;
      } else if (grade >= 91 && grade <= 100) {
        top++;
      }
    }
    console.log("failed", failed, "pass", pass, "top", top);
  }
  search(namesArr, nameToCompare) {
    for (let name of namesArr) {
      if (name == nameToCompare) {
        return true;
      }
    }
    return false;
  }
}

export { StudentsClass };
