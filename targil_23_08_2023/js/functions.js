const add = (a, b) => {
  let sum = a + b;
  return sum;
};

console.log(add(1, 1));
console.log(2 + 2);
console.log(3 + 3);

let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const findNumber = (arr, n) => {
  for (let num of arr) {
    if (num == n) {
      //stop here
      //let the one who called the function that i found the number
      return true;
    }
  }
  return false;
};

const changeColorOfElm = () => {
  let elm = document.getElementById("cream");
  if (!elm) {
    return;
  }
  elm.style.color = "blue";
};
