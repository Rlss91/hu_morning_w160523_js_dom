window.addEventListener("load", () => {
  document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault();
  });
  document.getElementById("addBtn").addEventListener("click", () => {
    let newElm = document.createElement("li"); // create new li
    newElm.innerHTML = document.querySelector("#itemInput").value; // take value of input and put it in new elm
    newElm.className = "list-group-item"; // set class from bs
    document.getElementById("list").appendChild(newElm); // add new elm to list
    newElm.addEventListener("mouseenter", (kiwi) => {
      //e.target this is the element
      console.log("kiwi", kiwi);
      kiwi.target.classList.add("active"); // add active to class, active class came from bootstrap
    });
    newElm.addEventListener("mouseleave", (e) => {
      //e.target = the list item that activated the event
      //.classList.remove will remove active class from li
      e.target.classList.remove("active");
    });
  });
});
