import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username, setUsername] = useState(null);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specilizes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Whatch",
          correct: true,
        },
        {
          text: "Shoe",
          correct: false,
        },
        {
          text: "Car",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is current captain of Indian men cricket team?",
      answers: [
        {
          text: "MS Dhoni",
          correct: false,
        },
        {
          text: "Virat Kohli",
          correct: false,
        },
        {
          text: "Rohit Sharma",
          correct: true,
        },
        {
          text: "KL Rahul",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which company made ReactJS?",
      answers: [
        {
          text: "Facebook",
          correct: true,
        },
        {
          text: "Google",
          correct: false,
        },
        {
          text: "Adobe",
          correct: false,
        },
        {
          text: "Microsoft",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who invented Mobile phone?",
      answers: [
        {
          text: "Graham Bell",
          correct: false,
        },
        {
          text: "Edison",
          correct: false,
        },
        {
          text: "Larry Page",
          correct: false,
        },
        {
          text: "Martin Cooper",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is the longest River in the world?",
      answers: [
        {
          text: "Ganges",
          correct: false,
        },
        {
          text: "Amazon",
          correct: false,
        },
        {
          text: "Thames",
          correct: false,
        },
        {
          text: "Nile",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who was the first woman to go to space?",
      answers: [
        {
          text: "Valentina Tereshkova",
          correct: true,
        },
        {
          text: "Sally Ride",
          correct: false,
        },
        {
          text: "Liu Yang",
          correct: false,
        },
        {
          text: "Sunita Williams",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Apart from Venus, which planet rotates from east to west?",
      answers: [
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Uranus",
          correct: true,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Name the highest mountain in the Alps.",
      answers: [
        {
          text: "Matterhorn",
          correct: false,
        },
        {
          text: "Mont Blanc",
          correct: true,
        },
        {
          text: "Jungfrau",
          correct: false,
        },
        {
          text: "Monte Cervino",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the groove under the nose called?",
      answers: [
        {
          text: "Philtrum",
          correct: true,
        },
        {
          text: "Rayon",
          correct: false,
        },
        {
          text: "Petersham",
          correct: false,
        },
        {
          text: "Janeiro",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What value is the Roman numeral XL?",
      answers: [
        {
          text: "510",
          correct: false,
        },
        {
          text: "90",
          correct: false,
        },
        {
          text: "40",
          correct: true,
        },
        {
          text: "490",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is a group of lions called?",
      answers: [
        {
          text: "Pride",
          correct: true,
        },
        {
          text: "Avarice",
          correct: false,
        },
        {
          text: "Sloth",
          correct: false,
        },
        {
          text: "Envy",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which state is called  rice bowl of India?",
      answers: [
        {
          text: "Maharashtra",
          correct: false,
        },
        {
          text: "Uttar Pradesh",
          correct: false,
        },
        {
          text: "Asam",
          correct: false,
        },
        {
          text: "Chhattisgarh",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "What do you call a system of serving when a meal, consisting of several dishes is set out and guests serve themselves?",
      answers: [
        {
          text: "Buffet",
          correct: true,
        },
        {
          text: "A la carte",
          correct: false,
        },
        {
          text: "Menu",
          correct: false,
        },
        {
          text: "All",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What was defined as ‘three grains of barley, dry and round, placed end to end lengthwise’?",
      answers: [
        {
          text: "Centimeter",
          correct: false,
        },
        {
          text: "Meter",
          correct: false,
        },
        {
          text: "Inch",
          correct: true,
        },
        {
          text: "Millimeter",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which is the largest internal organ in the human body?",
      answers: [
        {
          text: "Liver",
          correct: true,
        },
        {
          text: "Heart",
          correct: false,
        },
        {
          text: "Lung",
          correct: false,
        },
        {
          text: "Kidney",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
