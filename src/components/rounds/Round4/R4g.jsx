import React, { useState, useEffect } from "react";
import "./R4g.css";
import { Link } from "react-router-dom";

const R4g = () => {
  const [timeLeft, setTimeLeft] = useState(30); // initial time left is 60 seconds
  const [isGameOver, setIsGameOver] = useState(false);
  const [GameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([
    { id: 1, symbol: "🔍", isFlipped: false, isMatched: false },
    { id: 2, symbol: "🔪", isFlipped: false, isMatched: false },
    { id: 3, symbol: "💼", isFlipped: false, isMatched: false },
    { id: 4, symbol: "💰", isFlipped: false, isMatched: false },
    { id: 5, symbol: "🚬", isFlipped: false, isMatched: false },
    { id: 6, symbol: "📝", isFlipped: false, isMatched: false },
    { id: 7, symbol: "📱", isFlipped: false, isMatched: false },
    { id: 8, symbol: "💼", isFlipped: false, isMatched: false },
    { id: 9, symbol: "💰", isFlipped: false, isMatched: false },
    { id: 10, symbol: "🚬", isFlipped: false, isMatched: false },
    { id: 11, symbol: "📝", isFlipped: false, isMatched: false },
    { id: 12, symbol: "📱", isFlipped: false, isMatched: false },
  ]);
  const [selectedCards, setSelectedCards] = useState([]);

  // shuffle the cards when the component is mounted
  useEffect(() => {
    setCards(shuffleCards(cards));
  }, []);

  // shuffle the cards whenever the score changes
  useEffect(() => {
    setCards(shuffleCards(cards));
  }, [score]);

  // check if the game is over when the score changes
  useEffect(() => {
    if (score === 5) {
      setGameOver(true);
      setIsGameOver(false);
    }
  }, [score]);

  // countdown the time
  useEffect(() => {
    if (timeLeft === 0) {
      setIsGameOver(true);
      return;
    }
    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  // flip a card when it is clicked
  const handleCardClick = (card) => {
    // do nothing if the card is already flipped or matched
    if (card.isFlipped || card.isMatched) {
      return;
    }
    // flip the card
    const newCards = [...cards];
    const index = newCards.findIndex((c) => c.id === card.id);
    newCards[index].isFlipped = true;
    // add the flipped card to the selected cards array
    setSelectedCards([...selectedCards, card]);

    // if two cards are flipped, check if they match
    if (selectedCards.length === 1) {
      const firstCard = selectedCards[0];
      const secondCard = card;
      // if the symbols match, update the score and mark both cards as matched
      if (firstCard.symbol === secondCard.symbol) {
        setScore(score + 1);
        const newCards = [...cards];
        const index1 = newCards.findIndex((c) => c.id === firstCard.id);
        const index2 = newCards.findIndex((c) => c.id === secondCard.id);
        newCards[index1].isMatched = true;
        newCards[index2].isMatched = true;
        setCards(newCards);
      } else {
        // if the symbols do not match, flip both cards back over after a short delay
        setTimeout(() => {
          const newCards = [...cards];
          const index1 = newCards.findIndex((c) => c.id === firstCard.id);
          const index2 = newCards.findIndex((c) => c.id === secondCard.id);
          newCards[index1].isFlipped = false;
          newCards[index2].isFlipped = false;
          setCards(newCards);
        }, 1000);
      }
      // clear the selected cards array
      setSelectedCards([]);
    } else {
      // there is only one flipped card, so wait for the next card to be clicked
    }
  };

  // shuffle the cards using the Fisher-Yates algorithm
  const shuffleCards = (cards) => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    return shuffledCards;
  };

  return (
    <div className="R4g">
      <h1>Swap Challenge</h1>
      <p>Score: {score}</p>
      <p>Time left: {timeLeft}</p>
      {isGameOver && (
        <div>
          <p>Game over!</p>
          <p>Your final score was: {score}</p>
          <button onClick={() => window.location.reload()}>Play again</button>
        </div>
      )}
      {GameOver && (
        <div>
          <p>Game over!</p>
          <p>Your final score was: {score}</p>
          {/* <button onClick={() => window.location.reload()}>Play again</button> */}
          <Link style={{color: "#fff"}} to="/round5intro">Round 5</Link>
        </div>
      )}
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? "flipped" : ""} ${
              card.isMatched ? "matched" : ""
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-front"></div>
            <div className="card-back">{card.symbol}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default R4g;
