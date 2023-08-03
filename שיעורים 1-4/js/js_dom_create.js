const createH1 = () => {
  let h1 = document.createElement("h1"); // create new element
  let div = document.querySelector(".container"); // get existing element from html
  h1.innerText = "new element"; // set props
  h1.setAttribute("id", "sdfasdfsdf");
  div.appendChild(h1); // add h1 into elm
};
createH1();
