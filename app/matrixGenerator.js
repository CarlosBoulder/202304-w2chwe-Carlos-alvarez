const matrixGenerator = (size) => {
  let alives = [
    [2, 1],
    [2, 2],
    [3, 1],
  ];

  let matrix = Array(size)
    .fill()
    .map(() => Array(size).fill(0));

  for (let i = 0; i < alives.length; i++) {
    let aliveX = alives[i][0];
    let aliveY = alives[i][1];
    matrix[aliveX][aliveY] = 1;
  }
  return matrix;
};

export default matrixGenerator;
