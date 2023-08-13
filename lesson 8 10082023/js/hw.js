//hw 1
const hw1Func = (n1, n2) => {
  return new Promise((resolve, reject) => {
    if ((n1 + n2) % 2 == 0) {
      //even
      resolve(n1 + n2);
    } else {
      reject("the number is odd");
    }
  });
};

//hw 2
const hw2Func = async () => {
  try {
    let mySum = await hw1Func(1, 1);
    console.log("mySum", mySum);
  } catch (err) {
    console.log("err", err);
  }
};
// hw2Func();

//hw 3
const hw3Func = (myArr) => {
  return new Promise((resolve, reject) => {
    for (let myItem of myArr) {
      if (myItem == 5) {
        console.log("find 5");
        resolve("success");
        return;
      }
    }
    //if the for loop did not stopped then it mean that we did not find number 5 in array
    //and the promise failed
    console.log("failed");
    reject("failed");
  });
};

hw3Func([1, 5, 1, 5, 1, 5])
  .then((ok) => {
    console.log("ok");
  })
  .catch((err) => {
    console.log("err", err);
  });
