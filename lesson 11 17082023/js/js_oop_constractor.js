class User {
  name;
  age;
  username;
  constructor(name, age) {
    this.age = age;
    this.name = name;
    this.username = "a";
  }
}

let user = new User("kenny", 10);
console.log("user", user);

let user2 = new User("anne", 40);
console.log("user2", user2);

//targil
class BasicUser {
  first;
  last;
  username;
  password;
  is_login;
  constructor(first, last, username, password) {
    this.first = first;
    this.last = last;
    this.username = username;
    this.password = password;
    this.is_login = false;
  }
  sayWelcome() {
    //targil 2
    console.log(`welcome ${this.first} ${this.last}`);
  }
  changeName(first, last) {
    //targil 3
    this.first = first;
    this.last = last;
  }
  login(username, password) {
    //targil 4
    if (this.username == username && this.password == password) {
      this.is_login = true;
    } else {
      this.is_login = false;
    }
  }
  logout() {
    //targil 5
    this.is_login = false;
  }
  change_password(oldPassword, newPassword) {
    //targil 6
    if (this.password == oldPassword) {
      this.password = newPassword;
    }
  }
}

let p1 = new BasicUser("james", "bond", "007", "1234");
p1.login("worior", "1234");
