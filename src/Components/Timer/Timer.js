import React, { useEffect } from "react";

export default function Timer({ timer, setTimer, questionsCount }) {
  useEffect(() => {
    if (questionsCount <= 20) {
      const timerId =
        timer > 0 &&
        setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
      return () => clearInterval(timerId);
    } else {
      setTimer(0);
    }
  }, [timer]);

  return (
    <div>
      <span className="timer">Time Left: {timer}</span>
    </div>
  );
}
