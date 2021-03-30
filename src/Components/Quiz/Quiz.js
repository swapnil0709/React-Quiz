import React, { useEffect, useState } from "react";
import Timer from "../Timer/Timer";
import "./Quiz.scss";
import UserInput from "../UserInput/UserInput";

export default function Quiz({ id }) {
  // States
  const [currentQue, setCurrentQue] = useState("default");
  const [timer, setTimer] = useState(20);
  const [inputData, setInputData] = useState("");
  const [questionsCount, setQuestionsCount] = useState(1);
  const [array, setArray] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const generateQuestion = (range) => {
    let num1 = Math.floor(Math.random() * range) + 1;
    let num2 = Math.floor(Math.random() * range) + 1;
    let option = Math.floor(Math.random() * 5);
    let question;
    let correctAnswer;

    switch (option) {
      case 0:
        question = `${num1} + ${num2} = ?`;
        correctAnswer = num1 + num2;
        break;
      case 1:
        question = `${num1} - ${num2} = ?`;
        correctAnswer = num1 - num2;
        break;
      case 2:
        question = `${num1} * ${num2} = ?`;
        correctAnswer = num1 * num2;
        break;
      case 3:
        question = `${num1} / ${num2} = ?`;
        correctAnswer = Math.round(num1 / num2);
        break;
      case 4:
        question = `${num1} % ${num2} = ?`;
        correctAnswer = num1 % num2;
        break;
      default:
        break;
    }
    setArray((prev) => [
      ...prev,
      {
        question: question,
        correctAnswer: correctAnswer,
        userAnswer: inputData,
      },
    ]);
    setCurrentQue(question);
  };

  //   Hooks UseEffect

  useEffect(() => {
    generateQuestion(9);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleButton();
    }
  }, [timer]);
  const handleButton = () => {
    if (inputData !== "")
      setArray((prev) => {
        array[array.length - 1].userAnswer = Number(inputData);
        return [...prev];
      });
    if (questionsCount < 20) {
      generateQuestion(9);
      setQuestionsCount((prevCount) => prevCount + 1);
      setTimer(20);
    } else {
      setTimer(0);
      if (questionsCount === 20) {
        array.forEach((e) => {
          if (e.correctAnswer === e.userAnswer) {
            setFinalScore(finalScore + 1);
          }
        });
      }

      console.log(finalScore);
    }

    setInputData("");
  };

  const handleChange = ({ target }) => {
    setInputData(target.value);
  };
  return (
    <div className="questionContainer">
      <div className="quizNav">
        <h1>Questions: {questionsCount}/20 </h1>
        <Timer
          timer={timer}
          setTimer={setTimer}
          questionsCount={questionsCount}
        />
      </div>

      <div className="box">
        <p className="question">{currentQue}</p>
        <input
          type="text"
          placeholder="Type Answer"
          className="input"
          onChange={handleChange}
          value={inputData}
        />
        <button
          className={`btnNext${id}`}
          onClick={() => {
            handleButton();
          }}
        >
          {questionsCount === 20 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
