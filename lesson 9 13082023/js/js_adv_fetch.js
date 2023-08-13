// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((dataFromServer) => {
//     console.log("dataFromServer", dataFromServer);
//     return dataFromServer.json(); // promise 2
//   })
//   .then((actualData) => {
//     console.log("actualData", actualData);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
const fetchFunc = async () => {
  try {
    let dataFromServer = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    /*
        fetch send get request to server 
        as promise and wait for response,
        the response will be status etc.
        the actual data will be in stream format.
        in order to convert from stream to object or array etc.
        we need to use response.json()
    */
    console.log("dataFromServer", dataFromServer);
    let actualData = await dataFromServer.json();
    /*
        response.json() is a promise that convert stream back to object or array etc.
    */
    console.log("actualData", actualData);
  } catch (err) {}
};
fetchFunc();

//targil 1
const targil1Func = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // send request to server
    let data = await response.json(); // convert response from server to actual data
    document.getElementById("divTargil1").innerHTML = `
        <div>${data.completed}</div>
        <div>${data.id}</div>
        <div>${data.title}</div>
        <div>${data.userId}</div>
    `;
  } catch (err) {
    console.log("err", err);
  }
};
targil1Func();

//targil 2
const targil2Func = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // send request to server
    let data = await response.json(); // convert response from server to actual data
    document.getElementById("divTargil2").innerHTML = `
          <div>${data.completed}</div>
          <div>${data.id}</div>
          <div>${data.title}</div>
          <div>${data.userId}</div>
      `;
    response = await fetch("https://jsonplaceholder.typicode.com/todos/2"); // send request to server
    data = await response.json(); // convert response from server to actual data
    document.getElementById("divTargil2").innerHTML += `
          <div>${data.completed}</div>
          <div>${data.id}</div>
          <div>${data.title}</div>
          <div>${data.userId}</div>
      `;
    response = await fetch("https://jsonplaceholder.typicode.com/todos/3"); // send request to server
    data = await response.json(); // convert response from server to actual data
    document.getElementById("divTargil2").innerHTML += `
          <div>${data.completed}</div>
          <div>${data.id}</div>
          <div>${data.title}</div>
          <div>${data.userId}</div>
      `;
    response = await fetch("https://jsonplaceholder.typicode.com/todos/4"); // send request to server
    data = await response.json(); // convert response from server to actual data
    document.getElementById("divTargil2").innerHTML += `
          <div>${data.completed}</div>
          <div>${data.id}</div>
          <div>${data.title}</div>
          <div>${data.userId}</div>
      `;
  } catch (err) {
    console.log("err", err);
  }
};
targil2Func();
