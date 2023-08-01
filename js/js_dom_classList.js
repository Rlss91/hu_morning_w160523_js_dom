window.addEventListener("load", () => {
  let div = document.querySelector("div");
  div.classList.add("a4"); // add class to existing elm
  div.classList.remove("a2"); // remove class from existing elm
  document.querySelector("button").addEventListener("click", () => {
    let div = document.querySelector("div");
    div.classList.toggle("a5"); // add a5 to class if not exists else will remove a5 to class
    // toggle = on off switch = metteg!!!
  });
});
