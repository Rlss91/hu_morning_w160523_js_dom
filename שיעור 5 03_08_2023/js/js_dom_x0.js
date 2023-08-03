let whoPlayNow;

// let x=5
// x == 7 ? console.log("true") : console.log("false")

const ifEndGame = () => {
  /*
    1) check vertical
    2) check horizontal
    3) check diagonal
    4) if one of them if true
    4.1) someone won the game
    5) else if the board is full
    5.1) then tekko
  */
  let whoWonTheGame;
  /*
  if x won the game whoWonTheGame = x
  if o won the game whoWonTheGame = o
  else no one won the game whoWonTheGame = 🐲
 */
  let cells = document.querySelectorAll("#gamerDiv > div"); // get all cells
  //*check vertical
  // console.log(cells);
  for (let i = 0; i <= 2; i++) {
    if (
      cells[i].innerHTML == cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
      cells[i].innerHTML != ""
    ) {
      //the first column is equal
      whoWonTheGame = cells[i].innerHTML;
    }
  }
  //*check horizontal
  for (let i = 0; i < 9; i += 3) {
    // i += 3 => i = i + 3
    if (
      cells[i].innerHTML == cells[i + 1].innerHTML &&
      cells[i + 1].innerHTML == cells[i + 2].innerHTML &&
      cells[i].innerHTML != ""
    ) {
      //the first column is equal
      whoWonTheGame = cells[i].innerHTML;
    }
  }
  //*check diagonal
  // \
  let i = 0;
  if (
    cells[i].innerHTML == cells[i + 4].innerHTML &&
    cells[i + 4].innerHTML == cells[i + 8].innerHTML &&
    cells[i].innerHTML != ""
  ) {
    //the first column is equal
    whoWonTheGame = cells[i].innerHTML;
  }
  i = 2;
  if (
    cells[i].innerHTML == cells[i + 2].innerHTML &&
    cells[i + 2].innerHTML == cells[i + 4].innerHTML &&
    cells[i].innerHTML != ""
  ) {
    //the first column is equal
    whoWonTheGame = cells[i].innerHTML;
  }
  //*check if game end and someone won or tekko
  if (whoWonTheGame != undefined) {
    alert(`${whoWonTheGame} won the game`);
    // alert(whoWonTheGame + " won the game");
  } else {
    for (let cell of cells) {
      if (cell.innerHTML == "") {
        return; //stop here and continue the game
      }
    }
    alert("no one won the game");
  }
};

const handleClickXO = (myE) => {
  /*
    1) check if empty
    2) set innerHTML
    3) next turn
    4) end game
  */
  if (myE.target.innerHTML != "") {
    //the div has x or o
    return; // stop here
  }
  //the div is empty and I can put in this div x or o
  myE.target.innerHTML = whoPlayNow;
  whoPlayNow == "x" ? (whoPlayNow = "o") : (whoPlayNow = "x");
  // if (whoPlayNow == "x") {
  //   whoPlayNow = "o";
  // } else {
  //   whoPlayNow = "x";
  // }
  ifEndGame();
};

const initPageLoad = () => {
  //set click on every cell
  let cells = document.querySelectorAll("#gamerDiv > div"); // get all cells
  for (let myDiv of cells) {
    myDiv.addEventListener("click", handleClickXO);
  }
};

const newGame = () => {
  whoPlayNow = "x"; // x start first
  let cells = document.querySelectorAll("#gamerDiv > div"); // get all cells
  for (let cell of cells) {
    cell.innerHTML = ""; //clear all cells
  }
};

window.addEventListener("load", () => {
  initPageLoad();
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
