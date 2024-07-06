import { useState } from "react";

function App() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const handleSquareClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // Game status
  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Player turn: ${isXNext ? "X" : "O"}`;

  // Reset game
  const handleReset = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="tic-tac-toe-board">
        {board.map((value, index) => (
          <div
            className="square"
            key={index}
            onClick={() => handleSquareClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <button
        onClick={handleReset}
        className="btn btn-lg btn-outline-danger mt-3 mb-2"
      >
        Reset
      </button>
    </>
  );
}

export default App;
