import React, { useState, useEffect } from 'react';
import "../../styles/sodoku.css";


const boardData = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

const solutionData = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

const SudokuGame = () => {
  const [numSelected, setNumSelected] = useState(null);
  const [errors, setErrors] = useState(0);
  const [board, setBoard] = useState(boardData.map((row) => row.split('')));
  const [solution] = useState(solutionData);

  useEffect(() => {
    setGame();
  }, []); // Empty dependency array ensures it runs only once on component mount

  const setGame = () => {
    // Setup the game board
    // ... (Same as the setGame() function in the original code)

    // Other parts of the original setGame() function that create the Sudoku board go here.
  };

  const selectNumber = (num) => () => {
    setNumSelected(num);
  };

  const selectTile = (r, c) => () => {
    if (!numSelected) return;
    if (board[r][c] !== '-') return;

    if (solution[r][c] === numSelected) {
      // Set the selected number on the board
      const newBoard = [...board];
      newBoard[r][c] = numSelected;
      setBoard(newBoard);
    } else {
      setErrors((prevErrors) => prevErrors + 1);
    }
  };

  return (
    <div>
      {/* Render the Sudoku board */}
      <div id="board">
        {/* Render the Sudoku board tiles */}
        {board.map((row, r) => (
          <div key={r} className="board-row">
            {row.map((cell, c) => (
              <div
                key={c}
                className={`tile ${cell === '-' ? 'empty-tile' : 'tile-start'}`}
                onClick={selectTile(r, c)}
              >
                {cell === '-' ? '' : cell}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Render the number options */}
      <div id="digits">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div
            key={num}
            className={`number ${numSelected === num ? 'number-selected' : ''}`}
            onClick={selectNumber(num)}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Display errors count */}
      <div id="errors">Errors: {errors}</div>
    </div>
  );
};

export default SudokuGame;
