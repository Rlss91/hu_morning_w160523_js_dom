console.log("line 1");
console.log("line 2");
console.log("line 3");
console.log("line 4");

const f1 = () => {
  console.log("print f1");
  console.log("f1 done");
};

const f2 = () => {
  console.log("f2 started");
  console.log("call f1");
  f1();
  console.log("f2 done");
};

f2();
