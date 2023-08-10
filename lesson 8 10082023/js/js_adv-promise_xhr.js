const xhrPromise = (url, method = "GET") => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject("request failed with status " + xhr.status);
      }
    };
    xhr.open(method, url);
    xhr.send();
  });
};

xhrPromise("https://jsonplaceholder.typicode.com/posts/2")
  .then((value) => {
    console.log("value", value);
  })
  .catch((err) => {
    console.log("err", err);
  });

//!callback hell
// xhrPromise("https://jsonplaceholder.typicode.com/posts/2")
//   .then((value) => {
//     console.log("value", value);
//     xhrPromise("https://jsonplaceholder.typicode.com/posts/2")
//       .then((value) => {
//         console.log("value", value);
//         xhrPromise("https://jsonplaceholder.typicode.com/posts/2")
//           .then((value) => {
//             console.log("value", value);
//           })
//           .catch((err) => {
//             console.log("err", err);
//           });
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
