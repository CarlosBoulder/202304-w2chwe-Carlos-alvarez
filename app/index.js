import { updateMatrix } from "./gameLogic.js";
import createTable from "./createTable.js";

let initialMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

let matrixToReset = initialMatrix;

let boardContainer = document.querySelector(".board");
let initialTable = createTable(initialMatrix);

boardContainer.appendChild(initialTable);

const handleStartButton = () => {
  let updatedMatrix = updateMatrix(initialMatrix);
  let newTableGame = createTable(updatedMatrix);

  boardContainer.replaceChild(newTableGame, initialTable);
  initialTable = newTableGame;
  initialMatrix = updatedMatrix;
};

const handleResetButton = () => {
  let resetTable = createTable(matrixToReset);

  boardContainer.replaceChild(resetTable, initialTable);
  initialTable = resetTable;
  initialMatrix = matrixToReset;
};

const registerEventListeners = () => {
  const startButton = document.querySelector(".start-button");
  startButton.addEventListener("click", () => {
    handleStartButton();
  });

  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => {
    handleResetButton();
  });
};
registerEventListeners();
