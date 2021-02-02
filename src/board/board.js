import React, { useState } from "react";

import { Square } from "./square";
import { calculateWinner } from "../utils";
// import packageJSON from '../../package.json' Example to get by relative path the file from another folder

export const Board = (props) => {
  const [history, changeHistory] = useState([]);
  const [squares, changeSquares] = useState([]);
  const [xIsNext, changeXIsNext] = useState(true);

  const handleClick = (i) => () => {
    const current = history[history.length - 1];
    const squaresNext = squares.slice();

    if (calculateWinner(squaresNext) || squaresNext[i]) {
      return;
    }

    squaresNext[i] = xIsNext ? "X" : "O";

    const nextHistory = history.concat([
      {
        squares: squaresNext,
      },
    ]);

    changeHistory(nextHistory);
    changeSquares(squaresNext);
    changeXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={handleClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
