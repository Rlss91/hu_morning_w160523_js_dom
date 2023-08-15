import { calc } from "./calc.js";

//dom logic
window.addEventListener("load", () => {
  let btn = document.getElementById("btn");
  if (btn) {
    btn.addEventListener("click", () => {
      let num1 = document.getElementById("num1");
      let num2 = document.getElementById("num2");
      let resDiv = document.getElementById("resDiv");
      if (num1 && num2 && resDiv) {
        resDiv.innerHTML = calc(+num1.value, +num2.value);
      }
    });
  }
});
