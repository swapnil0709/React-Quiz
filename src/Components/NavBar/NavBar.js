import React from "react";
import "./NavBar.scss";
export default function NavBar() {
  return (
    <div className="nav">
      <h1 className="logo">Maths Quiz</h1>
      <span className="cumulativeScore">Cumulative Score: 0</span>
    </div>
  );
}
