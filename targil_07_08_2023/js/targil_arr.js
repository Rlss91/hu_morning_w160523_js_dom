const targil1 = (myArr) => {
  let min = myArr[0]; // min = the first item of the array
  for (let myItem of myArr) {
    // run on all the array
    if (min > myItem) {
      // check if min bigger then myItem, if so then
      min = myItem; // replace min value with myItem value
    }
  }
  console.log("min", min); // print min
};
targil1([9, 6, 32, 56, 8, 1]);

const targil2 = (myArr) => {
  let max = myArr[0]; // max = the first item of the array
  for (let myItem of myArr) {
    // run on all the array
    if (max < myItem) {
      // check if max bigger then myItem, if so then
      max = myItem; // replace max value with myItem value
    }
  }
  console.log("max", max); // print max
};
targil2([9, 6, 32, 56, 8, 1]);

const targil3 = (myArr) => {
  //calculate sum
  let sum = 0;
  for (let myItem of myArr) {
    sum += myItem; // sum = sum + myItem
  }
  //divide by number of numbers in array
  sum /= myArr.length; // sum = sum / myArr.length
  console.log("sum", sum);
};
targil3([5, 5, 5]);
//
let n1 = 5;
let myGrades = [100, 100, 100, 90, 99];
console.log("myGrades[1]", myGrades[4]);
myGrades[0];
myGrades[1];
myGrades[2];
