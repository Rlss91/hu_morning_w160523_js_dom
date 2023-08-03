// let a = 3;
// {
//   let a = 5;
//   console.log(a);
// }

// console.log(a);

// function printHello(){
//     console.log("hello world");
// }

const printHello = () => {
  console.log("hello world");
};

printHello();

const sum = (a, b) => {
  let c = a + b;
  console.log("c", c);
};

sum(1, 1);

/* create function to sum 3 parameters */

const sum2 = (a, b) => {
  let c = a + b;
  return c; /* take the value of c and take it out of the function */
};

let valueOfSum2 = sum2(1, 1);
console.log("valueOfSum2", valueOfSum2);

const printParameter = (parameterToPrint) => {
  console.log("parameterToPrint", parameterToPrint);
};

printParameter(5);

printParameter(sum2(1, 1));
//printParameter(2);

const funcInFunc = () => {
  console.log("sum2", sum2(1, 1));
  //   console.log("sum2", 2);
};

funcInFunc();
