/*
    generate random number after 500 ms
    if the number even then the promise succeeded
    else promise failed
*/
const getRandomIntInclusive = (min, max) => {
  /*
          generate random number between min and max
          example generate random number between 1 to 10
      */
  min = Math.ceil(min); // round up
  max = Math.floor(max); // round down
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};
let myPromise = new Promise((resolve, reject) => {
  /*
        resolve = if promise succeeded.
        reject = if promise failed.
        resolve and reject are functions callback.
        in this code we define new promise.
        we define what this promise should do.
    */
  setTimeout(() => {
    let myRandomNumber = getRandomIntInclusive(1, 10);
    if (myRandomNumber % 2 == 0) {
      //the number is even
      resolve(myRandomNumber); //the promise succeeded and we pass the random number
      // resolve -> then
    } else {
      //the number is even
      reject("error " + myRandomNumber); //the promise failed and we pass reason why the promise failed
      //reject -> catch
    }
  }, 500);
});

//execute promise
myPromise
  .then((myNumber) => {
    //if promise succeeded then what we will do with the data
    console.log("myNumber", myNumber);
  })
  .catch((myError) => {
    //if promise failed then what we will do with the data
    console.log("error", myError);
  });

// targil 1
let myPromise2 = new Promise((resolve, reject) => {
  if ("abc".length == 3) {
    resolve("yes");
  } else {
    reject("no");
  }
});

myPromise2
  .then((myValue) => {
    console.log(myValue);
  })
  .catch((err) => {
    console.log(err);
  });

const myCreatePromiseFunc = (n1, n2) => {
  /*
        this code create new promise each time we call (execute) to the function
    */
  return new Promise((resolve, reject) => {
    resolve(n1 + n2);
  });
};

myCreatePromiseFunc(1, 1)
  .then((myValue) => {
    console.log(myValue);
  })
  .catch((err) => {
    console.log("err", err);
  });

//*when execute myCreatePromiseFunc(1, 1)
// let myPromise3 = myCreatePromiseFunc(1, 1);
//*it will convert to this
// let myPromise3 = new Promise((resolve, reject) => {
//     resolve(1 + 1);
//   });
//*execute the promise
// myPromise3
//   .then((myValue) => {
//     console.log(myValue);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

//targil 3
const promiseInFunc = (n1, n2, n3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let mm = (n1 + n2 + n3) / 3; // ממוצע
      if (mm == n1 || mm == n2 || mm == n3) {
        reject("error"); //promise failed
      } else {
        resolve(mm); //promise succeeded
      }
    }, 1000);
  });
};

promiseInFunc(1, 3, 3)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log("err", err));
