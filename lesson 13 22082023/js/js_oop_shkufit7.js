class BasicUser {
  first;
  last;
  username;
  #password;
  is_login;
  constructor(first, last, username, password) {
    this.first = first;
    this.last = last;
    this.username = username;
    this.#password = password;
    this.is_login = false;
  }
  sayWelcome() {
    console.log(`Welcome ${this.first} ${this.last}`);
  }
  setName(first, last) {
    this.first = first;
    this.last = last;
  }
  login(u, p) {
    this.is_login = this.username == u && this.#password == p;
    // if (this.username == u && this.#password == p) {
    //   this.is_login = true;
    // } else {
    //   this.is_login = false;
    // }
    return this.is_login;
  }
  logout() {
    this.is_login = false;
  }
  changePassword(oldp, newp) {
    if (this.#password == oldp) {
      this.#password = newp;
    }
  }
}

class Users {
  users;
  constructor(users) {
    this.users = users;
  }
  print() {
    console.log("users", this.users);
  }
  add(newUser) {
    this.users = [...this.users, newUser];
  }
  isUser(u, p) {
    for (let user of this.users) {
      if (user.login(u, p)) {
        return true;
      }
    }
    return false;
  }
  deleteUser(index) {
    this.users.splice(index, 1);
  }
}

let users = new Users([
  new BasicUser("kenny", "mc", "kenny", "1234"),
  new BasicUser("james", "bond", "007", "1234"),
  new BasicUser("john", "wick", "babayaga", "1234"),
]);

users.add(new BasicUser("kartman", "mc", "kartman", "1234"));
users.print();
users.deleteUser(2);
users.print();
