setTimeout(() => {
  //this function is async
  console.log("line 0");
}, 3000);

console.log("line 1");
console.log("line 2");
console.log("line 3");
console.log("line 4");

window.addEventListener("load", () => {
  let btn = document.getElementById("btn1");
  btn.addEventListener("click", () => {
    //this function is async
    console.log("you clicked");
  });
});

// setTimeout(() => {
//   console.log("setTimeout");
// }, 1);
// window.addEventListener("load", () => {
//   console.log("f1");
// });
