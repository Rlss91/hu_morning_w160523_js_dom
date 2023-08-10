// stopper
let div = document.querySelector("div"); //div
let stopper = 0; //remember how match sec
window.addEventListener("load", () => {
  document.querySelector("button").addEventListener("click", () => {
    setInterval(() => {
      div.innerHTML = stopper;
      stopper++; //stopper = stopper + 1
    }, 1000);
  });
});
