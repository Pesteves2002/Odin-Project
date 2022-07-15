let currentPlayer = 1;

// Game Board
// 0 = O, X = 1, Blank = 2
const gameBoard = (() => {
  let board = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ];
  let coords = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  let spots_left = 9;
  const getBoard = () => board;
  const getPos = (x, y) => board[x][y];
  const getPosByIndex = (i) => {
    return coords[i];
  };
  const getRow = (y) => board[y];
  const getCol = (x) => {
    let col = [];
    for (let i = 0; i < board.length; i++) {
      col.push(board[i][x]);
    }
    return col;
  };

  const getDiagonal = (diagonal_value) => {
    let diagonal = [];
    if (diagonal_value === 0) {
      for (let i = 0; i < board.length; i++) {
        diagonal.push(board[i][i]);
      }
    } else {
      for (let i = 0; i < board.length; i++) {
        diagonal.push(board[i][board.length - 1 - i]);
      }
    }
    return diagonal;
  };

  const checkGameStatus = () => {
    for (let i = 0; i < board.length; i++) {
      let line = getCol(i);
      if (line[0] == line[1] && line[1] == line[2] && line[0] != 2) {
        return true;
      }
    }
    for (let i = 0; i < board.length; i++) {
      let line = getRow(i);
      if (line[0] == line[1] && line[1] == line[2] && line[0] != 2) {
        return true;
      }
    }
    for (let i = 0; i < 2; i++) {
      let line = getDiagonal(i);
      if (line[0] == line[1] && line[1] == line[2] && line[0] != 2) {
        return true;
      }
    }
    console.log(spots_left);
    if (spots_left == 0) {
      console.log("Draw");
    }
    return false;
  };

  const setPiece = (x, y, value) => {
    if (getPos(x, y) == 2 && (value === 0 || value === 1)) {
      board[x][y] = value;
      spots_left--;

      if (checkGameStatus()) {
        console.log(currentPlayer + "wins");
      } else {
        if (currentPlayer == 1) {
          currentPlayer = 2;
        } else currentPlayer = 1;
      }
      return true;
    }
    return false;
  };

  const play = (i) => {
    let pos = gameBoard.getPosByIndex(i);
    let x = pos[0];
    let y = pos[1];
    let symbol;
    if (currentPlayer == 1) {
      symbol = 0;
    } else {
      symbol = 1;
    }
    let valid = gameBoard.setPiece(x, y, symbol);
    if (valid) {
      const button = document.getElementById("tile" + i);
      if (currentPlayer == 1) button.classList.add("circle");
      else button.classList.add("cross");
    }
  };

  return {
    getBoard,
    getPos,
    getPosByIndex,
    getRow,
    getCol,
    getDiagonal,
    setPiece,
    play,
  };
})();

const displayContainer = (() => {
  const drawDisplayBoard = () => {
    const displayBoard = document.querySelector(".board-container");
    for (let i = 0; i < 9; i++) {
      let tile = document.createElement("button");
      tile.setAttribute("id", "tile" + i);
      tile.addEventListener("click", () => gameBoard.play(i));

      displayBoard.appendChild(tile);
    }
  };
  return { drawDisplayBoard };
})();

const player = (new_name, new_symbol) => {
  let name = new_name;
  let symbol = new_symbol;

  const getName = () => name;
  const getSymbol = () => symbol;

  return {
    getName,
    getSymbol,
  };
};

const player1 = player("Tom", 0);
const player2 = player("Diogo", 1);

console.log(gameBoard.getBoard());

displayContainer.drawDisplayBoard();
