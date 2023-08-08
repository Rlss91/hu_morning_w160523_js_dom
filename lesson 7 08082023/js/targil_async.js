//targil 1
setTimeout(() => {
  document.body.style.backgroundColor = "salmon"; // eden d :)
}, 5000);

//targil 2
// setTimeout(() => {
//   let newDiv = document.createElement("div"); //create new div
//   newDiv.classList.add("wrapper"); //add wrapper class to div
//   document.body.appendChild(newDiv); //add new div to html
// }, 10000);

//targil 3
const getRandomIntInclusive = (min, max) => {
  /*
        generate random number between min and max
        example generate random number between 1 to 10
    */
  min = Math.ceil(min); // round up
  max = Math.floor(max); // round down
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};
let didClientClicked = false;
setTimeout(() => {
  /*
    this function will be called after random number of sec between 5 to 10
    if user clicked on btn it will not execute code inside if
    else it will display you lose and will hide the btn
    */
  if (didClientClicked == false) {
    //did not clicked
    let btn = document.getElementById("targil3Btn");
    btn.style.display = "none";
    //btn.remove()
    alert("you lose 😢");
  }
}, getRandomIntInclusive(5000, 10000));
document.getElementById("targil3Btn").addEventListener("click", () => {
  /*
        will update didClientClicked
        and will alert you win
    */
  didClientClicked = true;
  alert("you win 😊");
});
