const createTable = (matrix) => {
  let newTableGame = document.createElement("table");

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

    newTableGame.appendChild(tr);
  }

  newTableGame.setAttribute("cellspacing", "0");
  return newTableGame;
};

export default createTable;
