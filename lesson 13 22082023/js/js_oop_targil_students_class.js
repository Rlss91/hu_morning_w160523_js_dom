import { StudentsClass } from "./StudentsClass.class.js";

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

const testSearch = () => {
  console.log(
    studentsClass.search(
      ["james", "kenny", "garfild", "moshe", "spongebob"],
      "moshe"
    )
  );
};
testSearch();
