import { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winningCombination = checkWinner(newBoard);
    if (winningCombination) {
      setWinner(newBoard[winningCombination[0]]);
    }
  };

  const checkWinner = (newBoard) => {
    const combinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return combinations[i];
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-5xl font-extrabold mb-8 text-blue-400 drop-shadow-lg">Tic Tac Toe</h1>

      {winner && <h2 className="text-3xl font-bold text-green-400 mb-4">Winner: {winner} 🎉</h2>}

      <div className="grid grid-cols-3 gap-4 bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={value || winner}
            className="w-24 h-24 flex items-center justify-center text-3xl font-extrabold border-4 border-gray-600 bg-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-xl shadow-lg disabled:opacity-50"
          >
            {value}
          </button>
        ))}
      </div>

      <button
        className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xl font-bold shadow-xl transition-all duration-300"
        onClick={() => {
          setBoard(Array(9).fill(null));
          setIsXNext(true);
          setWinner(null);
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default TicTacToe;
