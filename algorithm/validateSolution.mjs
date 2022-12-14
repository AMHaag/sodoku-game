/* eslint-disable @typescript-eslint/no-unused-vars */
import { Board } from './classes.mjs';
const testGrid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

function checkGroup(group) {
  const sum = group.reduce((a, v) => {
    return a + v;
  }, 0);
  if (sum !== 45) {
    return false;
  }
  const uniqSet = new Set(group);
  if (uniqSet.size !== 9) {
    return false;
  }
  let properRange = true;
  group.forEach((v) => {
    if (v < 1 || v > 9) {
      properRange = false;
    }
  });
  if (!properRange) {
    return false;
  }
  return true;
}
function createSubgrid(matrix, x, y) {
  return [
    matrix[x][y],
    matrix[x][y + 1],
    matrix[x][y + 2],
    matrix[x + 1][y],
    matrix[x + 1][y + 1],
    matrix[x + 1][y + 2],
    matrix[x + 2][y],
    matrix[x + 2][y + 1],
    matrix[x + 2][y + 2],
  ];
}
function createCol(matrix, y) {
  const col = [
    matrix[0][y],
    matrix[1][y],
    matrix[2][y],
    matrix[3][y],
    matrix[4][y],
    matrix[5][y],
    matrix[6][y],
    matrix[7][y],
    matrix[8][y],
  ];
  return col;
}

function checkFullMatrix(matrix) {
  let solutionIsValid = true;
  for (let i = 0; i < 9; i++) {
    if (!checkGroup(matrix[i])) {
      solutionIsValid = false;
      console.log(`error in row ${i}`, matrix[i]);
      break;
    }
    if (!checkGroup(createCol(matrix, i))) {
      solutionIsValid = false;
      console.log(`error in col ${i}`, createCol(matrix, i));
      break;
    }
  }
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      let subgrid = createSubgrid(matrix, x, y);
      if (!checkGroup(subgrid)) {
        solutionIsValid = false;
        console.log(`error in subgrid ${x},${y}`, subgrid);
        break;
      }
    }
    if (!solutionIsValid) {
      break;
    }
  }

  return solutionIsValid;
}
function checkAllGroupsForDuplicates(matrix) {
  let testBoard = new Board(matrix);
  let duplicateFound = false;
  for (let i = 0; i < 9; i++) {
    if (duplicateFound) {
      break;
    }
    let testRow = testBoard.returnRowArray(i);
    let testCol = testBoard.returnColArray(i);
    let testSub = testBoard.returnSubgridArray(i);
    testRow = testRow.filter((cv) => {
      if (cv > 0) {
        return cv;
      }
    });
    testCol = testCol.filter((cv) => {
      if (cv > 0) {
        return cv;
      }
    });
    testSub = testSub.filter((cv) => {
      if (cv > 0) {
        return cv;
      }
    });

    let testRowSet = new Set(testRow);
    let testColSet = new Set(testCol);
    let testSubSet = new Set(testSub);
    if (testRow.length !== testRowSet.size) {
      console.error(`Duplicate value found in row:${i}`);
      console.error(`Set:${testRowSet} Post Map Array: ${testRow}`);
      duplicateFound = true;
      break;
    }
    if (testCol.length !== testColSet.size) {
      console.error(`Duplicate value found in col:${i}`);
      duplicateFound = true;
      break;
    }
    if (testSub.length !== testSubSet.size) {
      console.error(`Duplicate value found in sub:${i}`);
      duplicateFound = true;
      break;
    }
  }
  return duplicateFound;
}
function checkBoardForDuplicates_client(matrix) {
  let testBoard = new Board(matrix);
  let duplicateFound = false;
  let errorMessage = [];
  for (let i = 0; i < 9; i++) {
    if (duplicateFound) {
      break;
    }
    let testRow = testBoard.returnRowArray(i);
    let testCol = testBoard.returnColArray(i);
    let testSub = testBoard.returnSubgridArray(i);
    testRow = testRow.filter((cv) => {
      if (cv > 0) {
        return cv;
      }
    });
    testCol = testCol.filter((cv) => {
      if (cv > 0) {
        return cv;
      }
    });
    testSub = testSub.filter((cv) => {
      if (cv > 0) {
        return cv;
      }
    });

    let testRowSet = new Set(testRow);
    let testColSet = new Set(testCol);
    let testSubSet = new Set(testSub);
    if (testRow.length !== testRowSet.size) {
      errorMessage.push(`Duplicate value found in row:${i + 1}\n`);
      // console.error(`Duplicate value found in row:${i}`);
      // console.error(`Set:${testRowSet} Post Map Array: ${testRow}`);
      duplicateFound = true;
     
    }
    if (testCol.length !== testColSet.size) {
      errorMessage.push(`Duplicate value found in col:${i + 1}\n`);
      // console.error(`Duplicate value found in col:${i}`);
      duplicateFound = true;
      
    }
    if (testSub.length !== testSubSet.size) {
      errorMessage.push(`Duplicate value found in box:${i + 1}\n`);
      // console.error(`Duplicate value found in sub:${i}`);
      duplicateFound = true;
      
    }
  }
  if (duplicateFound) {
    return errorMessage;
  }
  return duplicateFound;
}
function checkGroupForDuplicate(array) {
  let duplicateFound = false;
  let testArr = array;
  testArr = testArr.filter((v) => {
    if (v > 0) {
      return v;
    }
  });
  let testSet = new Set(testArr);

  if (testArr.length !== testSet.size) {
    duplicateFound = true;
    testArr.sort();
    console.error(`Duplicate value found:${testArr}`);
  }
  return duplicateFound;
}
function checkCellForConflicts(x, y, board) {
  let rowConflicts = checkGroupForDuplicate(board.returnRowArray(x));
  let colConflicts = checkGroupForDuplicate(board.returnColArray(y));
  let subConflicts = checkGroupForDuplicate(
    board.returnSubgridArrayByCoordinate(x, y)
  );
  if (rowConflicts && colConflicts && subConflicts) {
    return true;
  }
  return false;
}
function checkForInvalidCharacters_client(matrix) {
  let errorCells = [];
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      const cell = matrix[x][y]
      const regex = new RegExp('[\D]')
      if (!Number.isInteger(cell)) {
        errorCells.push(`row:${x + 1} col:${y + 1}`);
        continue;
      }
      if (cell > 9 || cell < 0) {
        errorCells.push(`row:${x + 1} col:${y + 1}`);
        continue;
      }
    }
  }
  if (errorCells.length > 0) {
    return errorCells;
  }
  return false;
}

function countNumberOfClues_client(matrix){
  const clues = [];
  for(let x=0;x<9;x++){
    for (let y=0;y<9;y++){
      const cell = matrix[x][y]
      if(cell>0){clues.push(cell)}
    }
  }
  return clues.length
}

export {
  createSubgrid,
  createCol,
  checkFullMatrix,
  checkAllGroupsForDuplicates,
  checkGroupForDuplicate,
  checkCellForConflicts,
  checkForInvalidCharacters_client,
  checkBoardForDuplicates_client,
  countNumberOfClues_client,
};
