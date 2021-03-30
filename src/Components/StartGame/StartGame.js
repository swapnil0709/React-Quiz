import React from "react";
import "./StartGame.scss";
export default function StartGame({
  setStart1,

  setStart2,
  id,
}) {
  return (
    <div className="containerStart">
      <button
        className={`btnNext${id}`}
        onClick={() => {
          if (id === 1) {
            setStart1(true);
          } else {
            setStart2(true);
          }
        }}
      >
        Start
      </button>
    </div>
  );
}
