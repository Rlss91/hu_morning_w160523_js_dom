let arr = [1, 2, 3];

let jsonStr = JSON.stringify(arr); // convert everything to string (json format)

console.log("arr", arr);

console.log("jsonStr", jsonStr);

let backToArr = JSON.parse(jsonStr); // convert from json string back to original

console.log("backToArr", backToArr);

/*
    targil 1
    create array of names and convert the array to json
*/

/*
    targil 2
    convert json from targil 1 back to original and console log it
*/
