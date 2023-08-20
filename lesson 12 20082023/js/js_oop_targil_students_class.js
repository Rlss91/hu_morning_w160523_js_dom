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
}

let studentsClass = new StudentsClass([80, 90, 100]);

window.addEventListener("load", () => {
  document.getElementById("numberOfGradesBtn").addEventListener("click", () => {
    let { value } = document.getElementById("numberOfGradesInput");
    let inputsContainer = document.getElementById("inputsContainer");
    inputsContainer.innerHTML = "";
    for (let i = 0; i < +value; i++) {
      let newInput = document.createElement("input");
      newInput.className = "inputGrade";
      inputsContainer.appendChild(newInput);
    }
    let btnAddGrades = document.createElement("button");
    btnAddGrades.innerText = "click to add grades";
    inputsContainer.appendChild(btnAddGrades);
    btnAddGrades.addEventListener("click", () => {
      let gradesInputs = document.querySelectorAll(".inputGrade");
      for (let inputElm of gradesInputs) {
        studentsClass.add(+inputElm.value); //grade from input to students array
      }
      studentsClass.print();
    });
  });
});
