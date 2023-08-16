const add2NumbersProcess = (n1, n2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = n1 + n2;
      if (res % 2 == 0) {
        resolve(res);
      } else {
        reject("the number is odd");
      }
    }, 1000);
  });
};
/*
    this promise ask 2 number
    if sum is even then the promise will success and will give back the sum
    else will fail and will give back the error msg
*/

//way 1 (callback)
add2NumbersProcess(2, 3)
  .then((result) => {
    /* 
    if the promise success what we want to do
    */
    console.log("the promise succeeded", result);
  })
  .catch((err) => {
    /* 
    else if the promise fail what we want to do
    */
    console.log("the promise failed with error msg:", err);
  });
