const dugma1 = () => {
  try {
    /*
        try to execute code with errors
        if error occurs then it will go to catch.
        js will put the error in to myError
    */
    console.log("line 1");
    console.log("txt", txt);
    console.log("line 3");
  } catch (myErr) {
    console.log("myErr", myErr);
  } finally {
    console.log("line 4");
  }
  console.log("line 5");
};
dugma1();

const getElm = () => {
  try {
    let div = document.getElementById("div");
    div.style.backgroundColor = "green";
  } catch (err) {
    console.log("err", err);
  }
};
getElm();
