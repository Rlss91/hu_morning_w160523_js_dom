const getRandomIntInclusive = (min, max) => {
  /*
            generate random number between min and max
            example generate random number between 1 to 10
        */
  min = Math.ceil(min); // round up
  max = Math.floor(max); // round down
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

let n1 = getRandomIntInclusive(1, 10);
let n2 = getRandomIntInclusive(1, 10);

window.addEventListener("load", () => {
  document.getElementById("quest").innerText = `${n1} + ${n2} = `; //n1 + "+" + n2 + "=";
  // when using `` we can add them to the string by using ${them}
  document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault(); //stop refresh
    let answer = document.getElementById("answer");
    if (n1 + n2 == answer.value) {
      // if the client correct then
      document.body.style.backgroundColor = "green";
    } else {
      // if the client incorrect
      document.body.style.backgroundColor = "red";
    }
  });
});
