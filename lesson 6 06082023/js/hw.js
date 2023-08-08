//hw 1
let user = { name: "james", last: "bond", age: 40 };

let { name: name1, last: last1 } = user;
/*
    let name1 = user.name,
    last1 = user.last
*/

console.log("name1", name1);
console.log("last1", last1);

//hw 2
const hw2 = (...myNums) => {
  let min = myNums[0];
  for (let num of myNums) {
    if (min > num) {
      min = num;
    }
  }
  console.log("min", min);
};
hw2(4, 2, 10);

//hw 3
window.addEventListener("load", () => {
  document.querySelector("button").addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
  });
});
