import React, { useState, useEffect } from "react";
import "./R2g.css";
import { Link } from "react-router-dom";

const WORDS = [
  "detective",
  "crime",
  "autopsy",
  "evidence",
  "suspect",
  "weapon",
  "alibi",
  "forensic",
  "interrogate",
  "mystery",
];

const shuffleWord = (word) => {
  let shuffled = "";
  let a = word.split("");
  while (a.length > 0) {
    shuffled += a.splice(Math.floor(Math.random() * a.length), 1);
  }
  return shuffled;
};

const R2g = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [word, setWord] = useState(shuffleWord(WORDS[0]));
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === WORDS[wordIndex].toLowerCase()) {
      setIsCorrect(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIsCorrect(false);
    }
    handleNextWord();
  };

  const handleNextWord = () => {
    setGuess("");
    setIsCorrect(false);
    if (wordIndex === 9) {
      setIsGameOver(true);
    } else {
      setWordIndex(wordIndex + 1);
      setWord(shuffleWord(WORDS[wordIndex + 1]));
    }
  };

  useEffect(() => {
    if (isCorrect) {
      setTimeout(() => {
        handleNextWord();
      }, 3000);
    }
  }, [isCorrect]);

  if (isGameOver) {
    return (
      <div className="R2g">
        <div className="inner">
          <h2>Wonderful</h2>
          {correctAnswers >= 8 ? (
            <>
              <p>You won! You have unlocked 2 clues as of now</p>
              <Link to="/round3intro">Round 3</Link>
            </>
          ) : (
            <p>You lost! You answered less than 8 words correctly!</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="R2g">
      <div className="inner">
        <h2>Guess Game</h2>
        <div className="question1">{`Question ${wordIndex + 1}`}</div>
        <div className="word">{word}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your guess"
            value={guess}
            onChange={handleGuessChange}
            disabled={isCorrect}
          />
          <button type="submit" disabled={isCorrect}>
            Next
          </button>
        </form>
        {isCorrect && <p className="correct">Correct!</p>}
        {/* <button onClick={handleNextWord} disabled={!isCorrect}>
        Next
      </button> */}
      </div>
    </div>
  );
};

export default R2g;
