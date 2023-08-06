const f1 = () => {};

const onlyOneParam = (myParam) => {}; // only when we have one parameter

const onlyOneLineOfCodeAndReturn = (myN1, myN2) => myN1 + myN2;
// const onlyOneLineOfCodeAndReturn = (myN1, myN2) => {
//   return myN1 + myN2;
// };

let sum = onlyOneLineOfCodeAndReturn(5, 5);
console.log("sum", sum);
