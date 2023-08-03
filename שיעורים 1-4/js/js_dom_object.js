// let arr = ["kenny", "maccormmic", 8];
let userObj = {
  name: "kenny",
  lastName: "mc",
  age: 8,
  test: "sdfasdfasdf",
};

let userObj2 = {
  name: "james",
};

console.log("name", userObj.name);
console.log("lastName", userObj.lastName);
console.log("age", userObj.age);

userObj.name = "Kenny"; // change value
userObj.address = "south park"; // add new property

console.log(userObj);

let arrObj = [userObj, userObj2]; // like students
console.log(arrObj[0]);

userObj.address = {
  city: "tlv",
  st: "eli cohen",
  houseNumber: "500 a",
};

console.log("userObj", userObj);

console.log("arrObj", arrObj);

// delete property
delete userObj.test; // delete objectName.keyName
