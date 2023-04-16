import { updateMatrix } from "./gameLogic";
import { updateStatus } from "./gameLogic.js";

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

describe("Given a function updateMatrix", () => {
  describe("When it receives the matrix initialMatrix", () => {
    test("Then it should return a new matrix, expectedMatrix", () => {
      let expectedMatrix = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ];

      let result = updateMatrix(initialMatrix);

      expect(result).toStrictEqual(expectedMatrix);
    });
  });
});

describe("Given a function updateStatus", () => {
  describe("When the state is 1 in the initialMatrix and there are less than 2 alive neighbors", () => {
    test("Then it should return the new state, 0", () => {
      let positionX = 6;
      let positionY = 4;
      let expectedResult = 0;

      let result = updateStatus(positionX, positionY, initialMatrix);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When the state is 1 in the initialMatrix and there are 2 alive neighbors", () => {
    test("Then it should return the state 1", () => {
      let positionX = 2;
      let positionY = 2;
      let expectedResult = 1;

      let result = updateStatus(positionX, positionY, initialMatrix);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When the state is 1 in the initialMatrix and there are more than 3 alive neighbors", () => {
    test("Then it should return the new state, 0", () => {
      let positionX = 3;
      let positionY = 3;
      let expectedResult = 0;

      let result = updateStatus(positionX, positionY, initialMatrix);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When the state is 0 in the initialMatrix and there are 3 alive neighbors", () => {
    test("Then it should return the new state, 1", () => {
      let positionX = 3;
      let positionY = 1;
      let expectedResult = 1;

      let result = updateStatus(positionX, positionY, initialMatrix);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When the state is 0 in the initialMatrix and there are less than 3 alive neighbors", () => {
    test("Then it should return the new state, 0", () => {
      let positionX = 2;
      let positionY = 1;
      let expectedResult = 0;

      let result = updateStatus(positionX, positionY, initialMatrix);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When the state is 0 in the initialMatrix and there are more than 3 alive neighbors", () => {
    test("Then it should return the new state, 0", () => {
      let positionX = 2;
      let positionY = 3;
      let expectedResult = 0;

      let result = updateStatus(positionX, positionY, initialMatrix);

      expect(result).toBe(expectedResult);
    });
  });
});
