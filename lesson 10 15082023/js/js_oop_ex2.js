class SimpleUser {
  first = "john";
  last = "cena";
  age = 50;
  sayWelcome() {
    console.log(this.first + "Welcome");
  }
  changeName(first, last) {
    this.first = first;
    this.last = last;
  }
}
let su = new SimpleUser();
su.changeName("johnny", "cast away");
su.sayWelcome();
