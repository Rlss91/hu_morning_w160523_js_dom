let obj = {
  name: "dog",
  type: "mammal",
};
let obj2 = {
  animalName: "cat",
  type: "mammal",
};

class Animal {
  name;
  type;
}

let obj3 = new Animal();
obj3.name = "dolphin";
obj3.type = "mammal";
console.log("obj3", obj3);
