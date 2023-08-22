const handleBtnClick = () => {
  //   console.log(new Date());
  console.log("click");
};

window.addEventListener("load", () => {
  document.getElementById("addBtn").addEventListener("click", () => {
    document.getElementById("clickBtn").addEventListener("click", () => {
      //   console.log(new Date());
      console.log("click");
    });
  });
  document.getElementById("removeBtn").addEventListener("click", () => {
    document
      .getElementById("clickBtn")
      .removeEventListener("click", handleBtnClick);
  });
});
