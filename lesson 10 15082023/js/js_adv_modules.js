import "./js_adv_modules2.js";
/*
    to execute and import code from another js file we will use
    import command and will provide path to js file
*/

import { add2Numbers, calc } from "./js_adv_modules_export.js";

add2Numbers();

const f1 = () => {
  console.log("hello");
};
f1();

console.log(calc(5, 5));
