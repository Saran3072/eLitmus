import React, { useState, useEffect } from "react";
import "./R3g.css";
import { Link } from "react-router-dom";

const R3g = () => {
  const [timeLeft, setTimeLeft] = useState(15); // initial time left is 10 seconds
  const [isGameOver, setIsGameOver] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (e) => {
    e.preventDefault();
    const answer = e.target.answer.value.toLowerCase().trim();
    if (answer === "fire") {
      setIsAnswerCorrect(true);
      setIsGameOver(true);
      setScore(score + 1);
    } else {
      setIsAnswerCorrect(false);
      setScore(score + 0);
    }
    e.target.reset();
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setIsGameOver(true);
    }
    if (isAnswerCorrect) {
      setIsGameOver(true);
    }
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (isGameOver && isAnswerCorrect) {
    return (
      <div className="R3g">
        {/* <div className="inner"> */}
          <h2 style={{paddingTop: "180px"}}>Congragulations!</h2>
          <p>You Unclocked the 3rd clue</p>
          <Link style={{color: "#fff"}} to="/round4intro">Round 4</Link>
        {/* </div> */}
      </div>
    );
  }
  if (isGameOver) {
    return (
      <div className="R3g">
        <div className="inner">
          <h2>Time's up!</h2>
          <p>Better luck next time!</p>
          <Link style={{color: "#fff"}} to="/">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="R3g">
      <h2 style={{ color: "#fff", fontSize: "100px" }} className="title">
        Find the Key
      </h2>
      <h2>
        I'm not alive, but I grow; I don't have lungs, but I need air; I don't
        have a mouth, but water kills me. What am I?
      </h2>
      <p>You have {timeLeft} seconds to find the key to the locked room.</p>
      <form onSubmit={handleAnswer}>
        <input type="text" name="answer" placeholder="Your answer" />
        <button type="submit">Submit</button>
      </form>
      {isAnswerCorrect && (
        <p className="correct">Correct! You found the key.</p>
      )}
    </div>
  );
};

export default R3g;
