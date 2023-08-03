window.addEventListener("load", () => {
  localStorage.setItem("myName", "value to save"); // save data to localStorage
  let myData = localStorage.getItem("myName"); // get data from localStorage
  console.log(myData);
});
