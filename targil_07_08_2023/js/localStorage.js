//save data to localStorage
let myKey = "my theme";
let myValue = "dark theme";

localStorage.setItem("some key", "some value"); //save to localStorage
localStorage.setItem(myKey, myValue); //save to localStorage

//get data from localStorage
let myData = localStorage.getItem("some key");
// let myData = localStorage.getItem(myKey);
console.log("myData", myData);
