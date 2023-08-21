import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXstate, setIsXstate] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let key of winnerLogic) {
      const [a, b, c] = key;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      } else if (
        state[a] !== null &&
        state[b] !== null &&
        state[c] !== null &&
        state[a] === state[b] &&
        state[a] !== state[c]
      ) {
        return "Tie";
      }
    }
    return false;
  };

  const isWinner = checkWinner();
  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXstate ? "X" : "O";
    setState(copyState);
    setIsXstate(!isXstate);
  };
  const handleReset = (index) => {
    setState(Array(9).fill(null));
  };
  console.log(isWinner);
  return (
    <div style={{ marginTop: "50px" }}>
      <div> {isWinner ? <>{isWinner} won the game</> : <>{isWinner}</>}</div>
      <button onClick={() => handleReset()}>Play again!</button>

      <>
        <div className="board-row">
          <Square onClick={() => handleClick(0)} value={state[0]} />
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className="board-row">
          <Square onClick={() => handleClick(3)} value={state[3]} />
          <Square onClick={() => handleClick(4)} value={state[4]} />
          <Square onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className="board-row">
          <Square onClick={() => handleClick(6)} value={state[6]} />
          <Square onClick={() => handleClick(7)} value={state[7]} />
          <Square onClick={() => handleClick(8)} value={state[8]} />
        </div>
      </>
    </div>
  );
};

export default Board;
