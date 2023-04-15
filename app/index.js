let matrix = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
];

let boardContainer = document.querySelector(".board");
console.log(boardContainer);
let tableGame = document.createElement("table");

for (let x = 0; x < matrix.length; x++) {
  let tr = document.createElement("tr");
  for (let y = 0; y < matrix[x].length; y++) {
    let td = document.createElement("td");
    td.setAttribute("class", "cell");
    if (matrix[x][y] === 1) {
      td.setAttribute("class", "cellAlive");
    }
    tr.appendChild(td);
  }

  tableGame.appendChild(tr);
}

tableGame.setAttribute("cellspacing", "0");
boardContainer.appendChild(tableGame);
