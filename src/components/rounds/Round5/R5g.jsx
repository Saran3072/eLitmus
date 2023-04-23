import React, { useState } from "react";
import "./R5g.css"

function R5g() {
  const [code, setCode] = useState(generateCode());
  const [digits, setDigits] = useState(["_", "_", "_"]);
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function generateCode() {
    // Generate a random 3-digit code
    let code = "";
    for (let i = 0; i < 3; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }

  function handlePuzzleSolved() {
    // Update the digits with the next digit of the code
    const newDigits = [...digits];
    newDigits[puzzleIndex] = code[puzzleIndex];
    setDigits(newDigits);

    // Move to the next puzzle
    setPuzzleIndex(puzzleIndex + 1);

    // If all puzzles are solved, unlock the box
    if (puzzleIndex === 2) {
      setIsOpen(true);
    }
  }

  function renderPuzzle() {
    switch (puzzleIndex) {
      case 0:
        return <LogicPuzzle onSolved={handlePuzzleSolved} />;
      case 1:
        return <Riddle onSolved={handlePuzzleSolved} />;
      case 2:
        return <BrainTeaser onSolved={handlePuzzleSolved} />;
      default:
        return null;
    }
  }

  return (
    <div className="locked-box-challenge">
      {isOpen ? (
        <div className="unlocked-box">
          <h2>Congratulations!</h2>
          <p>
            You have unlocked the box and found a clue that will help you solve
            the murder case.
          </p>
        </div>
      ) : (
        <div className="locked-box">
          <h2>Locked Box Challenge</h2>
          <p>
            You have discovered a locked box that requires a combination to
            open.
          </p>
          <div className="combination-lock">
            {digits.map((digit, index) => (
              <div key={index} className="digit">
                {digit}
              </div>
            ))}
          </div>
          <p>Solve the following puzzles to discover the combination:</p>
          {renderPuzzle()}
        </div>
      )}
    </div>
  );
}

function LogicPuzzle({ onSolved }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.toLowerCase() === "true") {
      onSolved();
    } else {
      setInput("");
      alert("Incorrect answer. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Logic Puzzle:</h3>
      <p>
        If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops
        Lazzies?
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
function Riddle({ onSolved }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.toLowerCase() === "a secret") {
      onSolved();
    } else {
      setInput("");
      alert("Incorrect answer. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Riddle:</h3>
      <p>
        I am always hungry, I must always be fed, The finger I touch, Will soon
        turn red. What am I?
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function BrainTeaser({ onSolved }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.toLowerCase() === "the letter e") {
      onSolved();
    } else {
      setInput("");
      alert("Incorrect answer. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Brain Teaser:</h3>
      <p>
        I am not alive, but I grow; I don't have lungs, but I need air; I don't
        have a mouth, but I need water to live. What am I?
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default R5g;
