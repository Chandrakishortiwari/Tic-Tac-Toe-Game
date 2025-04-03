import { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-5xl font-extrabold mb-8 text-blue-400 drop-shadow-lg">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-4 bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 flex items-center justify-center text-3xl font-extrabold border-4 border-gray-600 bg-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-xl shadow-lg"
          >
            {value}
          </button>
        ))}
      </div>
      <button
        className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xl font-bold shadow-xl transition-all duration-300"
        onClick={() => setBoard(Array(9).fill(null))}
      >Restart</button>
      
    </div>
  );
}

export default TicTacToe;
