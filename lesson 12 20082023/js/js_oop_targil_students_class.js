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
}

let studentsClass = new StudentsClass([80, 90, 100]);

const handleNumberOfGradesBtn = () => {
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
};

const handleScopeBtn = () => {
  let { value: minValue } = document.getElementById("scopeMinInput");
  let { value: maxValue } = document.getElementById("scopeMaxInput");
  document.getElementById("scopeDiv").innerHTML = studentsClass.between(
    +minValue,
    +maxValue
  );
};

const handleDataBtn = () => {
  studentsClass.data();
};

window.addEventListener("load", () => {
  document
    .getElementById("numberOfGradesBtn")
    .addEventListener("click", handleNumberOfGradesBtn);
  document.getElementById("scopeBtn").addEventListener("click", handleScopeBtn);
  document.getElementById("dataBtn").addEventListener("click", handleDataBtn);
  document.getElementById("startBtn").addEventListener("click", () => {
    let { value } = document.getElementById("startInput");
    if (value == 1) {
      studentsClass.print();
    } else if (value == 2) {
      handleNumberOfGradesBtn();
    } else if (value == 3) {
      handleScopeBtn();
    } else {
      handleDataBtn();
    }
  });
});
