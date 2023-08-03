let arr = [1, 2, 3];
//json
//"[1,2,3]"
let obj = {
  name: "kenny",
  last: "mc",
  age: 8,
};
// json
/*
    "{
        "name": "kenny",
        "last": "mc",
        "age": 8
    }"
*/

let jsonString = JSON.stringify(obj); // convert object to string json
console.log("jsonString", jsonString);

let stringFromJson = JSON.parse(jsonString); // convert string to object
console.log("stringFromJson", stringFromJson);
