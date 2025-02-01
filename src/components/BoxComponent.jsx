import React from "react";

function BoxComponent({
  cell,
  setCells,
  winner,
  id,
  firstGo,
  setFirstGo,
  cells,
}) {
  function handleClass(event) {
    let checkClass =
      event.target.firstChild.classList.contains("cross") ||
      event.target.firstChild.classList.contains("circle");
    if (!checkClass) {
      if (firstGo === "circle") {
        event.target.firstChild.classList.add("circle");
        setFirstGo("cross");
        handleCellChange("circle");
      } else {
        event.target.firstChild.classList.add("cross");
        setFirstGo("circle");
        handleCellChange("cross");
      }
    }
  }

  function handleCellChange(classList) {
    let updatedArrayCells = cells.map((cell, index) => {
      if (index === id) {
        return classList;
      } else {
        return cell;
      }
    });
    setCells(updatedArrayCells);
  }

  return (
    <div id={id} className="square" onClick={!winner ? handleClass : null}>
      <div className={cell}></div>
    </div>
  );
}

export default BoxComponent;
