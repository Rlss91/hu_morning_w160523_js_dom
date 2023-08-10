//!callback hell
// xhrPromise("https://jsonplaceholder.typicode.com/posts/2")
//   .then((value) => {
//     console.log("value", value);
//     xhrPromise("https://jsonplaceholder.typicode.com/posts/2")
//       .then((value) => {
//         console.log("value", value);
//         xhrPromise("https://jsonplaceholder.typicode.com/posts/2")
//           .then((value) => {
//             console.log("value", value);
//           })
//           .catch((err) => {
//             console.log("err", err);
//           });
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

const alwaysSuccessPromise = () => {
  return new Promise((resolve, reject) => {
    resolve("yey");
    // reject("error from promise");
  });
};

const myFunc = async () => {
  //async mean that there will be promise in this function
  try {
    let myValue = await alwaysSuccessPromise(); // replacement for then
    //if the promise success then the result will be in myValue
    console.log("myValue", myValue);
  } catch (err) {
    //if promise fail then it will go to catch and will put the error msg to err
    console.log("err", err);
  }
};
// myFunc();

/*
    const myFunc = () => {
        alwaysSuccessPromise().then((myValue)=>{
            console.log("myValue", myValue);
        }).catch((err)=>{
            console.log("err", err);
        })
    }
    myFunc();
*/

const myFunc2 = async () => {
  //async mean that there will be promise in this function
  try {
    console.log("myFunc2");
    let myValue = await alwaysSuccessPromise(); // replacement for then
    console.log("myValue", myValue);
    let myValue2 = await alwaysSuccessPromise(); // replacement for then
    console.log("myValue2", myValue2);
    let myValue3 = await alwaysSuccessPromise(); // replacement for then
    //if the promise success then the result will be in myValue
    console.log("myValue3", myValue3);
  } catch (err) {
    //if promise fail then it will go to catch and will put the error msg to err
    console.log("err", err);
  }
};
myFunc2();
