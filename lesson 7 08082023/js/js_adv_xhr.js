const xhr = new XMLHttpRequest(); // create object to send ajax request
xhr.onload = () => {
  /*
    when the server response this function will work
    */
  console.log("xhr", xhr);
  console.log("status", xhr.status);
  console.log("response", xhr.response);
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
/* 
    this line of code define 
        what is the type of the request
    and what is the url of the request
*/
xhr.send(); // send the request

//taril
const xhr2 = new XMLHttpRequest(); // create object to send ajax request
xhr2.onload = () => {
  /*
    when the server response this function will work
    */
  console.log("response", xhr2.response);
};

xhr2.open("GET", "https://jsonplaceholder.typicode.com/posts/2");
/* 
    this line of code define 
        what is the type of the request
    and what is the url of the request
*/
xhr2.send(); // send the request
