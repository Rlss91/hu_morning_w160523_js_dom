const handlePageLoad = () => {
  console.log("here");
};

window.addEventListener("load", handlePageLoad);

const myFunction = (myCbFunc) => {
  myCbFunc();
};
myFunction(handlePageLoad);

const add = () => 1 + 1;
const sub = () => 1 - 1;

const calcFunc = (myCalcFunc) => {
  myCalcFunc();
};
calcFunc(sub);

/*
    
*/
