//sallow copy
let obj1 = { name: "kenny", last: "mc" };
let obj2 = { ...obj1 };
//deep copy
let arrOfObj = [
  { name: "kenny", last: "mc" },
  { name: "john", last: "wick" },
];
let newArrOfObj = [];
//shallow copy of array of objects
// for (let item of arrOfObj) {
//   newArrOfObj = [...newArrOfObj, { ...item }];
// }
//deep copy of array of objects
newArrOfObj = JSON.parse(JSON.stringify(arrOfObj));

//targil
let obj = {
  info: {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character/?page=20",
    prev: "https://rickandmortyapi.com/api/character/?page=18",
  },
  results: [
    {
      id: 361,
      name: "Toxic Rick",
      status: "Dead",
      species: "Humanoid",
      type: "Rick's Toxic Side",
      gender: "Male",
      origin: {
        name: "Alien Spa",
        url: "https://rickandmortyapi.com/api/location/64",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/27"],
      url: "https://rickandmortyapi.com/api/character/361",
      created: "2018-01-10T18:20:41.703Z",
    },
  ],
};
