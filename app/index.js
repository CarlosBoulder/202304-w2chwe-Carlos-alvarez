import updateMatrix from "./gameLogic.js";
import createTable from "./createTable.js";

let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

let boardContainer = document.querySelector(".board");
let initialTable = createTable(matrix);

initialTable.setAttribute("cellspacing", "0");
boardContainer.appendChild(initialTable);

const handleStartButton = () => {
  let updatedMatrix = updateMatrix(matrix);
  let newTableGame = createTable(updatedMatrix);

  boardContainer.replaceChild(newTableGame, initialTable);
  initialTable = newTableGame;
  matrix = updatedMatrix;
};

const registerEventListeners = () => {
  const startButton = document.querySelector(".start-button");
  startButton.addEventListener("click", () => {
    handleStartButton();
  });
};
registerEventListeners();
