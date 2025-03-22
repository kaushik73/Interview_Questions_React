import { useState } from "react";

const TicTakToe = () => {
  const css = {
    row: {
      display: "flex",
      justifyContent: "center",
      gap: 10,
    },
    box: {
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black",
      cursor: "pointer",
    },
  };

  const [chance, setChance] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkIfWinner = (newBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
        return;
      }
    }
    if (!newBoard.includes("")) {
      setWinner("Draw");
    }
  };

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;

    const newBoard = board.slice();
    newBoard[index] = chance;
    setBoard(newBoard);

    checkIfWinner(newBoard);
    setChance(chance === "X" ? "O" : "X");
  };

  return (
    <div style={css?.container}>
      <div style={css.row}>Chance: {chance}</div>
      <div style={css.row}>Winner: {winner}</div>
      <div>
        {[0, 1, 2].map((row) => (
          <div key={row} style={css.row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <div
                  key={index}
                  style={css.box}
                  onClick={() => handleClick(index)}
                >
                  {board[index]}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTakToe;
