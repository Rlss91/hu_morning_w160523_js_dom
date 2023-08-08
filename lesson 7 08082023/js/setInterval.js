// stopper
// setInterval(() => {
//   console.log("hello");
// }, 3000);

const add0 = (myNum) => (myNum < 10 ? "0" + myNum : myNum);

// const add0 = (myNum) => {
//   if (myNum < 10) {
//     return "0" + myNum;
//   } else {
//     return myNum;
//   }
// };

window.addEventListener("load", () => {
  let timeDiv = document.getElementById("timeDiv");
  setInterval(() => {
    let dateNow = new Date(); // new Date() is what get the current time
    console.log(dateNow);
    timeDiv.innerHTML = `${add0(dateNow.getHours())}:${add0(
      dateNow.getMinutes()
    )}:${add0(dateNow.getSeconds())}`;
    //dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds()
    // when we need to concatenate strings and variables we will use ``
  }, 1000);
});

//stopper
window.addEventListener("load", () => {
  let stopperDiv = document.getElementById("stopperDiv");
  let stopper = 0;
  setInterval(() => {
    stopperDiv.innerHTML = stopper;
    stopper++; // stopper = stopper + 1
  }, 1000);
});
