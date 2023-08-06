const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mul = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;

const calc = () => {
  let res = add(1, 1);
  console.log("res", res);
};

calc();

const callBackCalc = (myCBFunc) => {
  /*
  myCBFunc is the function that will be given when the function callBackCalc will be called
  for example if we call like this callBackCalc(add);
  js will do myCBFunc = add
  so now myCBFunc is add
  */
  let res = myCBFunc(1, 1); // for example let res = add(1, 1);
  console.log("res", res);
};
callBackCalc(add);
callBackCalc(sub);

//targil
const helloFunc = () => {
  console.log("hello");
};
const worldFunc = () => {
  console.log("world");
};
const dogFunc = () => {
  console.log("dog");
};

const targilCBFunc = (printFunc) => {
  printFunc();
};
targilCBFunc(helloFunc);

//targil 2
const callBackCalc2 = (calcFunc, n1, n2) => {
  let res = calcFunc(n1, n2);
  console.log("res", res);
};
callBackCalc2(add, 1, 1);
callBackCalc2(add, 12, 13);
