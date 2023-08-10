for (let i = 0; i < 10; i++) {
  console.log("hello");
}

/*
targil 1
print number from 0 to 100 in the console
*/
for (let i = 0; i < 101; i++) {
  console.log(i);
}

/*
targil 2
print all even numbers between 1 to 10
*/
for (let i = 2; i <= 10; i += 2) {
  // i = i + 2
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/*
    targil 3
    לוח הכפל עד 10
*/
let div = document.querySelector("div");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(i * j);
    div.innerHTML += `<span>i(${i})*j(${j})=${i * j}<span>`;
  }
}

/*
    hw 1
    יש להציג את כל המספרים האי-זוגיים מ1 עד 50
*/

/*
    hw 2
    יש להציג את כל המספרים בין 1 ל 100
*/

/*
    hw 3
    יש להציג את כל המספרים שמתחלקים ב3, בין 1 ל 10
*/
