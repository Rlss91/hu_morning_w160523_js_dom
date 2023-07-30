const removeH2 = () => {
  let h2 = document.querySelector("#h2remove"); // find elm
  let div = document.querySelector("#maindiv");
  div.removeChild(h2); // remove elm
};

const removeH1 = () => {
  let h1 = document.querySelector("#h1remove");
  h1.remove();
};

const changeSp2 = () => {
  let sp1 = document.createElement("span");
  sp1.id = "sp1";
  sp1.innerText = "span 1";
  let div = document.querySelector("#replaceDiv");
  let sp2 = document.querySelector("#sp2");
  div.replaceChild(sp1, sp2);
};

const addNewItem = () => {
  let item = document.createElement("li");
  item.className = "list-item";
  item.innerText = document.querySelector("#listTxt").value;
  document.querySelector("#list").appendChild(item);
};

const targil3 = () => {
  let lis = document.querySelectorAll(".list-item");
  for (let item of lis) {
    if (item.innerText != "yes" && item.innerText != "no") {
      item.remove();
    } else {
      if (item.innerText == "yes") {
        item.style.color = "green";
      }
      if (item.innerText == "no") {
        item.style.color = "red";
      }
    }
  }
};
