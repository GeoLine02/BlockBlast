import { v4 as uuidv4 } from "uuid";

export const blocks = [
  { id: uuidv4(), shape: [[1, 1, 1, 1]], width: 4, height: 1 },
  { id: uuidv4(), shape: [[1, 1, 1]], width: 3, height: 1 },
  { id: uuidv4(), shape: [[1, 1]], width: 2, height: 1 },
  { id: uuidv4(), shape: [[1]], width: 1, height: 1 },
  {
    id: uuidv4(),
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    width: 3,
    height: 2,
  },
  {
    id: uuidv4(),
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    width: 3,
    height: 2,
  },
  {
    id: uuidv4(),
    shape: [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    width: 2,
    height: 3,
  },
  {
    id: uuidv4(),
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    width: 3,
    height: 2,
  },
  {
    id: uuidv4(),
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    width: 3,
    height: 2,
  },
  {
    id: uuidv4(),
    shape: [
      [1, 1],
      [1, 1],
    ],
    width: 2,
    height: 2,
  },
];
