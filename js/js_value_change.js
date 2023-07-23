// const loadFun = () => {};
// window.onload = loadFun;

/* this is anonymous that only window.onload can call */
window.onload = () => {
  const demo1 = document.querySelector("#demo1");
  //   demo1.innerHTML = "<h1>hello</h1>"; //will change the content and will put html as html tags
  //   demo1.innerText = "<h1>hello</h1>"; //will change the content and will put html as text and not as html tags
  demo1.textContent = "<h1>hello</h1>"; // same as innerText
  console.log(demo1);
};
