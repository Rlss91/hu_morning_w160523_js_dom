let user1, user2, address;
user1 = {
  name: "john",
  last: "wick",
  age: 50,
};
address = {
  street: "yesh",
  city: "hayfa",
  house: "12",
};
user2 = {
  name: "james",
  codeName: "007",
};
let userAndAddress = {
  ...user1,
  ...address,
  ...user2,
}; //multi object copy
console.log({ user1, user2, address, userAndAddress }); // display all objects
let userAndAddress2 = { ...userAndAddress }; // copy userAndAddress to userAndAddress2 without changing the objects
//changes on one object will not effect the other
console.log({ userAndAddress, userAndAddress2 });

let user3 = {
  name: "tobby",
  last: "ma",
  address: {
    street: "brooklyn",
    house: "5",
  },
};
let user4 = { ...user3 }; // copy user3 into user4
user3.name = "kenny";
user4.address = { ...user3.address }; // copy user3 address into user4 address
user3.address.street = "south park";
console.log({ user3, user4 });

//targil
let dog1 = {
  name: "sandy",
  age: 4,
};
let dog2 = { ...dog1 };
dog2.name = "chonk";
