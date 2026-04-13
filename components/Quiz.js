"use client";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("/api/quiz")
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  const selectAnswer = (option) => {
    const newAnswers = { ...answers, [current]: option };
    setAnswers(newAnswers);

    // move to next question
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      calculateScore(newAnswers);
    }
  };

  const calculateScore = (answersData) => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answersData[i] === q.answer) s++;
    });
    setScore(s);
  };

  // loading
  if (questions.length === 0) return <p>Loading...</p>;

  // result screen
  if (score !== null) {
    return (
      <div className="card">
        <h2>Your Result</h2>
        <h3>{score} / {questions.length}</h3>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="card">
      <h2>Question {current + 1} / {questions.length}</h2>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <p className="question">{q.question}</p>

      <div className="options">
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => selectAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}