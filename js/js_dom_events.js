// window.onload = () => {
window.addEventListener("load", () => {
  document.querySelector("#btn1").onclick = () => {
    console.log("btn 1 click");
  }; // add event, only the last will work
  document.querySelector("#btn1").onclick = () => {
    console.log("btn 1 click");
  };

  //   document.querySelector("#btn2").addEventListener("click", () => {
  //     console.log("btn 2 click");
  //   }); // add event, every function will work
  //   document.querySelector("#btn2").addEventListener("click", () => {
  //     console.log("btn 2 click");
  //   });
  const handleBtn2Click = () => {
    console.log("btn 2 click");
  };
  const handleBtn2Click2 = () => {
    console.log("btn 2 click, 2");
  };
  /*
    when using addEventListener we can apply more then 1 listener,
  */
  document.querySelector("#btn2").addEventListener("click", handleBtn2Click); // add event, every function will work
  document.querySelector("#btn2").addEventListener("click", handleBtn2Click2);
  /*
    to remove unwanted listener we will use removeEventListener
  */
  document
    .querySelector("#btn2")
    .removeEventListener("click", handleBtn2Click2); // remove one of the listener function
});

window.addEventListener("load", () => {
  //on submit
  document.getElementById("form1").addEventListener("submit", (ev) => {
    ev.preventDefault();
    /* prevent default behavior, in our case it stop refresh  */
    console.log("form click");
    console.log("ev", ev);
  });
});

window.addEventListener("load", () => {
  // when user release key on keyboard, display in console what he write in the input
  document.getElementById("txt1").addEventListener("keyup", (ev) => {
    console.log(ev.target.value); //ev.target = element, value = what the user write in the input
  });
});
