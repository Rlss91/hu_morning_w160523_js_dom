const loadFunc = () => {
  console.log("page loaded");
  document.write("<h2>from js</h2>");
};

window.onload = loadFunc;
/*
    when the page done loading
    this line of code will call loadFunc
*/
