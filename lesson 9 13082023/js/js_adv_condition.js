const f1 = () => {
  console.log("f1 worked - true");
  return true;
};
const f2 = () => {
  console.log("f2 worked - 0");
  return 0;
};
const f3 = () => {
  console.log("f3 worked");
};

console.log("&& stop on the first false");
f1() && f2() && f3();
console.log("|| stop on the first true");
f1() || f2() || f3();
