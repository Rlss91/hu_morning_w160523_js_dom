window.addEventListener("load", () => {
  document.getElementById("btn").addEventListener("click", () => {
    let { value: usernameValue } = document.getElementById("username");
    let { value: passwordValue } = document.getElementById("password");
    if (usernameValue == "lenny" && passwordValue == "a1234") {
      alert("you shall pass");
    } else {
      alert("you shall not pass!!!");
    }
  });
});
