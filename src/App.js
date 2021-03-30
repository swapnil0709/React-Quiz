import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Quiz from "./Components/Quiz/Quiz";
import StartGame from "./Components/StartGame/StartGame";
function App() {
  const [start1, setStart1] = useState(false);
  const [start2, setStart2] = useState(false);
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="left">
          {start1 ? (
            <Quiz id={1} />
          ) : (
            <StartGame start={start1} setStart1={setStart1} id={1} />
          )}
        </div>
        <div className="right">
          {start2 ? (
            <Quiz id={2} />
          ) : (
            <StartGame start={start2} setStart2={setStart2} id={2} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
