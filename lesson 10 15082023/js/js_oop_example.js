// let userArr = [
//   {
//     name: "kenny",
//     last: "mc",
//   },
//   {
//     name: "james",
//     lname: "bond",
//   },
// ];

// for (let myItem of userArr) {
//   console.log(myItem.lname);
// }

/*
    class create blueprint to create objects
*/

class User {
  name;
  last;
}
/*
    new create new object from class
*/
let user = new User();
console.log("user", user);
user.name = "kenny";
let user2 = new User();
user2.name = "james";

let usersArr = [new User(), new User(), new User()];
usersArr[0].name = "arad";
usersArr[2].name = "arad";
console.log("usersArr", usersArr);
