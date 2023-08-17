class User {
  name;
  email;
  #password;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }
  login(email, password) {
    if (this.email == email && this.#password == password) {
      return true;
    } else {
      return false;
    }
  }
}

let usersArr = [
  new User("james", "james@007.com", "ifyouknowyouwilldisapear"),
  new User("kenny", "kenny@gmail.com", "1234"),
  new User("john", "john@wick.com", "dontmesswithmydog"),
];

window.addEventListener("load", () => {
  document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault();
    let exampleInputEmail1 = document.getElementById("exampleInputEmail1");
    let exampleInputPassword1 = document.getElementById(
      "exampleInputPassword1"
    );
    for (let user of usersArr) {
      if (user.login(exampleInputEmail1.value, exampleInputPassword1.value)) {
        alert("welcome " + user.name);
        return; //stop here the code and do not continue
      }
    }
    alert("incorrect email or password");
  });
});
