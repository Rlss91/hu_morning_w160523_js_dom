/*
  let elmsArr = [
    {
      tagName:"h1",
      content:"test"
    },
    {
      tagName:"h2",
      content:"test2"
    },
  ];
*/

let elmsArr = [];

const createElm = (tagName, content) => {
  //tagName = "h1"
  //content = "test"
  let pageDiv = document.getElementById("pageDiv");
  let newElm = document.createElement(tagName);
  pageDiv.appendChild(newElm);
  newElm.innerText = content;
  elmsArr.push({ tagName: tagName, content: content });
  console.log("elmsArr", elmsArr);
};

const restorePage = () => {
  elmsArr = []; // clear the array
  let newElmsArr = []; // clear the array
  let jsonStr = localStorage.getItem("tags"); // get string json from localStorage
  console.log("jsonStr", jsonStr);
  newElmsArr = JSON.parse(jsonStr); //convert from json to array
  console.log("newElmsArr", newElmsArr);
  for (let item of newElmsArr) {
    /*
      item = {
        tagName: "h1", content: "test1"
      }
    */
    createElm(item.tagName, item.content);
  }
};

window.addEventListener("load", () => {
  document.getElementById("form1").addEventListener("submit", (e) => {
    //happends when we put btn in form
    e.preventDefault(); //stop refresh
  });
  document.getElementById("submitBtn").addEventListener("click", () => {
    let inputTag = document.getElementById("inputTag");
    let inputContent = document.getElementById("inputContent");
    createElm(inputTag.value, inputContent.value);
    //createElm("h1", "test")
  });
  document.getElementById("saveBtn").addEventListener("click", () => {
    let jsonStr = JSON.stringify(elmsArr); // convert array to string (json)
    //why we need to convert? to save it in localStorage
    //localStorage can save only strings
    localStorage.setItem("tags", jsonStr); //save to localStorage
  });
  restorePage();
});
