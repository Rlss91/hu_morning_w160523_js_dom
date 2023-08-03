const exp1 = () => {
  let elm1 = document.getElementById("div1");
  console.log("elm1.id", elm1.id);
};
exp1();

const exp2_changeId = () => {
  let elm1 = document.getElementById("div1");
  elm1.setAttribute("id", "div0");
  console.log("elm1.id", elm1.id);
};
exp2_changeId();

const demo1get = () => {
  let elm = document.querySelector("a");
  if (elm == null) {
    // did not found the element
    return; // stop the function
  }
  console.log("demo1get");
  console.log("id", elm.id);
  console.log("target", elm.target);
  console.log("href", elm.href);
};
demo1get();

const demo1set = () => {
  let elm = document.querySelector("a");
  elm.setAttribute("href", "https://www.hackeru.co.il/");
  console.log("href", elm.href);
};
demo1set();

/* login */
const loginFunc = () => {
  const elm = document.getElementById("userPassword"); //get password input element
  if (elm.value == "hackeru123") {
    //check if the password is hackeru123
    document.body.style.backgroundColor = "green"; // change the backround to green
  } else {
    document.body.style.backgroundColor = "red"; // change the backround to green
  }
};

/* change type */
const changeTypeFunc = () => {
  const elm = document.getElementById("userPassword");
  if (elm.type == "password") {
    // if input type is password then
    elm.setAttribute("type", "text"); // change input type to password
  } else {
    elm.setAttribute("type", "password"); // change input type to text
  }
};
changeTypeFunc();
