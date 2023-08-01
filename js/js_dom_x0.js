let whoPlayNow;

const newGame = () => {
  whoPlayNow = "x"; // x start first
  let cells = document.querySelectorAll("#gamerDiv > div"); // get all cells
  for (let cell of cells) {
    cell.innerHTML = ""; //clear all cells
    cell.addEventListener("click", () => {
      console.log("you clicked");
    });
  }
};

window.addEventListener("load", () => {
  newGame();
  document.getElementById("playAgainBtn").addEventListener("click", () => {
    newGame();
  });
});
/*
    1) who's playing now
    2) x play first
    3) before check if cell is empty
    4) check if end game and who won or even
    5) play again
*/
