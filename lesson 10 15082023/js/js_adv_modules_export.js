const add2Numbers = () => {
  console.log("modules export add2Numbers");
};
const add3Numbers = () => {
  console.log("modules export add3Numbers");
};
const workOnlyInThisFile = () => {
  console.log("modules 2", 1 + 1);
}; //we did not export this function

const calc = (n1, n2) => n1 + n2;
// const calc = (n1, n2) => {
//   return n1 + n2;
// };

export { add2Numbers, add3Numbers, calc };
/*
    to allow execute functions etc from another file
    we must export them
*/
