//function that accept number and add 5
const add5 = (myNumber) => {
  myNumber += 5; // myNumber = myNumber + 5;
  console.log("myNumber", myNumber);
};

add5(7); //call add5 function and pass 7 to this function

const f1 = (myElm) => {
  myElm.style.backgroundColor = "green";
};

const f2 = () => {
  let divBox = document.getElementById("divBox");
  f1(divBox);
  //   f1(document.getElementById("divBox"));
};

const printLoaded = () => {
  console.log("loaded");
};

window.addEventListener("load", () => {
  f2();
  printLoaded();
});
// f2();
