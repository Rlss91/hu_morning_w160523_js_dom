const inlineStyle = () => {
  /* like inline style */
  const elm = document.querySelector("div");
  elm.style.backgroundColor = "red";
  // document.body.style.backgroundColor = "green"; // change background color to green
  // document.body.setAttribute("style", "background-color: green;");// change background color to green
};
inlineStyle();

/* demo 1 */
const demo1Func = () => {
  const elm = document.querySelector("h1");
  elm.style.backgroundColor = "grey";
  elm.style.color = "blue";
  elm.style.fontSize = "20px";
  elm.style.textAlign = "center";
  elm.style.textShadow = "5px 5px #558ABB";
};
demo1Func();

const demo3Func = () => {
  const elm = document.querySelector("h1");
  console.log("backgroundColor", elm.style.backgroundColor);
  console.log("color", elm.style.color);
  console.log("fontSize", elm.style.fontSize);
};
demo3Func();
