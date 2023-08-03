let a1 = [1, 2, 3];
let a2 = [...a1];

a1 = [...a1, 4]; //a1.push(4)
a1 = [0, ...a1]; //a1.unshift(0)
// a1 = [...a1, {...obj}]

let a3 = [1, 2, 3];
let a4 = [5, 6, 7];
let a5 = [...a3, 4, ...a4];
// for (let i = 0; i < a3.length; i++) {
//   a5.push(a3[i]);
// }
// a5.push(4);
// for (let i = 0; i < a4.length; i++) {
//   a5.push(a4[i]);
// }

//targil
let namesArr = ["lion", "dog", "owl", "zibra", "jirafa"];
namesArr = [...namesArr, "rex"]; //add rex to names array
