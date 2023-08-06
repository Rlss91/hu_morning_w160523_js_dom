const getValue = () => {
  //   let txt = document.querySelector("#txt");
  // console.log("txt", txt.value);
  let { value } = document.querySelector("#txt");
  // let txt = document.querySelector("#txt");
  // let value = txt.value
  console.log("txt", value);
};
getValue();

const getMoreValues = () => {
  let user = { name: "james", last: "bond", codeName: "007" };
  let { name, last } = user;
  /*
    let name = user.name
    let last = user.last
  */
  console.log("name", name);
  console.log("last", last);
};
getMoreValues();

const getValueAndChangeName = () => {
  let { value } = document.querySelector("#txt");
  /*
   let txt = document.querySelector("#txt");
   let value = txt.value
  */
  let { value: value2 } = document.querySelector("#txt2"); // change name
  /*
    let txt2 = document.querySelector("#txt2");
    let value2 = txt2.value
  */
  console.log("value", value);
  console.log("value2", value2);
};
getValueAndChangeName();

const arrayDestruct = () => {
  let arr = ["dog", "rex", "dolphins", "squirrel", "parrot", "donkey"];
  let [myAnimal1, myAnimal2, , myAnimal4] = arr;
  //take the first elm of the array  and put it in myAnimal1
  //take the 2 elm of the array and put it in myAnimal2
  //skip the 3 elm of the array
  //take the 4 elm of the array and put it in myAnimal4
  console.log("myAnimal1", myAnimal1);
  console.log("myAnimal2", myAnimal2);
  console.log("myAnimal4", myAnimal4);
};
arrayDestruct();
