import "./app.css";
import { useEffect, useMemo, useRef, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import usersname from './components/Start' 


function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
        id: 4,
        question: "What sort of animal is Walt Disney's Dumbo?",
        answers: [
          {
            text: "Deer",
            correct: false,
          },
          {
            text: "Rabbit",
            correct: false,
          },
          {
            text: "Elephant",
            correct: true,
          },
          {
            text: "Donkey",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "What is the Celsius equivalent of 77 degrees Fahrenheit?",
        answers: [
          {
            text: "15",
            correct: false,
          },
          {
            text: "25",
            correct: true,
          },
          {
            text: "20",
            correct: false,
          },
          {
            text: "30",
            correct: false,
          },
        ],
      },
      {
        id: 6,
        question: "Which is the largest city in the USA's largest state?",
        answers: [
          {
            text: "Anchorage",
            correct: true,
          },
          {
            text: "Los Angeles",
            correct: false,
          },
          {
            text: "Dallas",
            correct: false,
          },
          {
            text: "New York",
            correct: false,
          },
        ],
      },
      {
        id: 7,
        question: "The word (aristocracy) literally means power in the hands of",
        answers: [
          {
            text: "The few",
            correct: false,
          },
          {
            text: "The barons",
            correct: false,
          },
          {
            text: "The best",
            correct: true,
          },
          {
            text: "The rich",
            correct: false,
          },
        ],
      },
      {
        id: 8,
        question: "THE SMALLEST COUNTRY IN THE WORLD IS?",
        answers: [
          {
            text: "Mauritius",
            correct: false,
          },
          {
            text: "Spain",
            correct: false,
          },
          {
            text: "Seychelles",
            correct: false,
          },
          {
            text: "Vatican City",
            correct: true,
          },
        ],
      },
      {
        id: 9,
        question: "THE FIRST IPHONE WAS RELEASED IN?",
        answers: [
          {
            text: "2007",
            correct: true,
          },
          {
            text: "2000",
            correct: false,
          },
          {
            text: "2004",
            correct: false,
          },
          {
            text: "2002",
            correct: false,
          },
        ],
      },
      {
        id: 10,
        question: "WHAT COLOUR WERE THE PYRAMIDS OF GIZA [EGYPT] ORIGINALLY?",
        answers: [
          {
            text: "Brown",
            correct: false,
          },
          {
            text: "White",
            correct: true,
          },
          {
            text: "Yellow",
            correct: false,
          },
          {
            text: "Orange",
            correct: false,
          },
        ],
      },
      {
        id: 11,
        question: "WHICH CITY WILL HOST THE 2028 OLYMPIC GAMES?",
        answers: [
          {
            text: "New York",
            correct: false,
          },
          {
            text: "Oslo",
            correct: false,
          },
          {
            text: "Los Angeles",
            correct: true,
          },
          {
            text: "Paris",
            correct: false,
          },
        ],
      },
      {
        id: 12,
        question: "WHO WON THE FIRST EVER FOOTBALL WORLD CUP?",
        answers: [
          {
            text: "Spain",
            correct: false,
          },
          {
            text: "England",
            correct: false,
          },
          {
            text: "Brazil",
            correct: false,
          },
          {
            text: "Urugvay",
            correct: true,
          },
        ],
      },
      {
        id: 13,
        question: " Which Victorian city hosted some Olympic events during the 1956 Summer Olympics?",
        answers: [
          {
            text: "Astana",
            correct: false,
          },
          {
            text: "Moscow",
            correct: false,
          },
          {
            text: "Tokio",
            correct: false,
          },
          {
            text: "Melburn",
            correct: true,
          },
        ],
      },
      {
        id: 14,
        question: "2 + 2?",
        answers: [
          {
            text: "22",
            correct: false,
          },
          {
            text: "4",
            correct: true,
          },
          {
            text: "0",
            correct: false,
          },
          {
            text: "3",
            correct: false,
          },
        ],
      },
      {
        id: 15,
        question: "Spider mans name is?",
        answers: [
          {
            text: "Peter Parker",
            correct: true,
          },
          {
            text: "Piter pan",
            correct: false,
          },
          {
            text: "Miles Morales",
            correct: false,
          },
          {
            text: "Kilometres Morales",
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
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  console.log(usersname);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">{username}, you earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
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
      )}
    </div>
  );
}

export default App;