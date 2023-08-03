/* by tag name */
let divs = document.getElementsByTagName("div");
// let divs = document.querySelectorAll("div")

console.log("divs", divs); // print all divs
console.log("div 1", divs[0]); // print only the first div

/* by class name */
let elmClasses = document.getElementsByClassName("p-class");
// let elmClasses = document.querySelectorAll(".p-class");

console.log("elm", elmClasses); // print all elmClasses
console.log("elm 1", elmClasses[0]); // print only the first element

/* demo1 */
const demo1Func = () => {
  let lis = document.querySelectorAll("li");
  // for(let i=0;i<lis.length;i++){
  //     console.log(lis[i])
  // }
  for (let item of lis) {
    console.log(item);
  }
};
demo1Func();

/* demo2 by shani */
const demo2 = () => {
  let liex = document.getElementsByClassName("ex1");
  for (let item of liex) {
    console.log(item);
  }
};
demo2();

/* demo3 */
const demo3 = () => {
  let liex = document.querySelectorAll(".ex1");
  for (let item of liex) {
    console.log(item);
  }
};
demo3();

/* demo4 */
const demo4 = () => {
  let classStart = ".ex";
  let arr = []; // save here all elements that we will find
  let elm; // one element that querySelector will find
  let i = 1;
  elm = document.querySelector(classStart + i); //(".ex1")
  while (elm != null) {
    arr.push(elm); // add the elm to the array
    i++; //next elm
    elm = document.querySelector(classStart + i); //(".ex2")
  }
  console.log(arr);
};
demo4();
