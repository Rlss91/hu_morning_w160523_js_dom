// avg
const avg = (...myNArr) => {
  /*
        1) sum every item of myNArr
        2) div by number of items
        3) console log
    */
  let mySum = 0;
  for (let myN of myNArr) {
    // sum every item of myNArr
    mySum += myN; // mySum = mySum + myN
  }
  mySum /= myNArr.length; // mySum = mySum / myNArr.length
  console.log("mySum", mySum);
};

avg(1, 2, 3, 5, 6);

//targil
const findMax = (...myArr) => {
  let myMax = myArr[0];
  for (let myItem of myArr) {
    if (myMax < myItem) {
      myMax = myItem;
    }
  }
  console.log("myMax", myMax);
};
findMax(-1, -5, -8);
