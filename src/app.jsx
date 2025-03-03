import { useEffect, useState } from "preact/hooks";
import BoxComponent from "./components/BoxComponent";

export function App() {
  // ko igra prvi
  const [firstGo, setFirstGo] = useState("cross");
  // pobednik
  const [winner, setWinner] = useState(null);
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);

  useEffect(() => {
    checkWinner();
  }, [cells]);

  function checkWinner() {
    let winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let checkAllCell = cells.every((cell) => cell !== "");

    for (let i = 0; i < winnerCombinations.length; i++) {
      let combination = winnerCombinations[i];
      let crossWin = combination.every((comb) => cells[comb] === "cross");
      let circleWin = combination.every((comb) => cells[comb] === "circle");
      if (crossWin) {
        setWinner("The winner is cross!");
        return;
      } else if (circleWin) {
        setWinner("The winner is circle!");
        return;
      } else if (checkAllCell) {
        setWinner("It's a draw!");
      }
    }
  }

  function resetGame() {
    setWinner(null);
    let emptyCells = new Array(9).fill("");
    setCells(emptyCells);
    setFirstGo("circle");
  }
  return (
    <div className="app">
      <h1 className="title">X/O Game</h1>
      <div className="squareContainer">
        {cells.map((cell, index) => {
          return (
            <BoxComponent
              cell={cell}
              setCells={setCells}
              key={index}
              id={index}
              winner={winner}
              firstGo={firstGo}
              setFirstGo={setFirstGo}
              cells={cells}
            />
          );
        })}
      </div>
      {/* {winner ? (
        <button className="resetBtn" onClick={resetGame}>
          Reset Game
        </button>
      ) : (
        <button className="disResetBtn">Reset Game</button>
      )} */}
      {winner && (
        <button className="resetBtn" onClick={resetGame}>
          Reset Game
        </button>
      )}
      {winner && <h2 className="winnerHeader">{winner}</h2>}
      {/* && ovo znaci ako je true i samo ako je true  */}
    </div>
  );
}
