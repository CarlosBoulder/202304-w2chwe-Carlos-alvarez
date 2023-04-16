const updateMatrix = (originalMatrix) => {
  const updatedMatrix = structuredClone(originalMatrix);
  for (let x = 1; x < originalMatrix.length - 1; x++) {
    for (let y = 1; y < originalMatrix[x].length - 1; y++) {
      updatedMatrix[x][y] = updateStatus(x, y, originalMatrix);
    }
  }
  return updatedMatrix;
};

const updateStatus = (x, y, originalMatrix) => {
  let myState = originalMatrix[x][y];

  let aliveNeighbors = countAliveNeighbors(x, y, originalMatrix);
  if (myState === 1) {
    if (aliveNeighbors <= 1 || aliveNeighbors > 3) {
      myState = 0;
    }
    return myState;
  } else if (myState === 0) {
    if (aliveNeighbors === 3) {
      myState = 1;
    }
    return myState;
  }
};

const countAliveNeighbors = (x, y, matrix) => {
  let states = [];
  states.push(
    matrix[x - 1][y - 1],
    matrix[x - 1][y],
    matrix[x - 1][y + 1],
    matrix[x][y - 1],
    matrix[x][y + 1],
    matrix[x + 1][y - 1],
    matrix[x + 1][y],
    matrix[x + 1][y + 1]
  );

  let accumulator = 0;
  for (let i = 0; i < states.length; i++) {
    if (states[i] === 1) {
      accumulator++;
    }
  }
  return accumulator;
};

export default updateMatrix;
