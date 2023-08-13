let bool = false;
console.log("bool = false");
if (bool) {
  // bool == true
  console.log("bool true");
} else {
  console.log("bool false");
}

let n = 0;
console.log("n = 1");
if (n) {
  // n != 0
  console.log("n is true");
} else {
  console.log("n is false");
}

window.addEventListener("load", () => {
  document.getElementById("btn1").addEventListener("click", () => {
    let elm = document.getElementById("div1");
    console.log("elm", elm);
    if (elm) {
      elm.innerHTML = "hello";
    }
    // if (elm != null) {
    //   elm.innerHTML = "hello";
    // }
  });
});

//targil 1
window.addEventListener("load", () => {
  document.getElementById("targil1Btn").addEventListener("click", () => {
    let { value } = document.getElementById("txtTargil1");
    // let value = document.getElementById("txtTargil1").value
    if (value) {
      //value != ""
      console.log("value", value);
    } else {
      console.log("please input text in to text box");
    }
  });
});
