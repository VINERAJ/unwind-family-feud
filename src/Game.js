import './Game.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

var answers = [];
var question = '';

function Game() {
    const [showGuessing, setShowGuessing] = useState(false);
    const navigate = useNavigate();
    function setAnswers() {
        const inputs = document.querySelectorAll('.input-container input');
        answers = Array.from(inputs).map(input => input.value.trim()).filter(value => value !== '');
        question = document.querySelector('.question-input').value.trim();
        console.log(question);
        setShowGuessing(true);
    }
    if (showGuessing) {
    return <Guessing />;
  }
  return (
    <div className="game">
      <div class="logo">
      UNWIND FAMILY <span>FEUD</span>
    </div>
    <input type="text" className="question-input" placeholder="enter the question here..." />
      <div className="input-container">
        <input type="text" placeholder="Type the answer here..." />
        <input type="text" placeholder="Type the answer here..." />
        <input type="text" placeholder="Type the answer here..." />
        <input type="text" placeholder="Type the answer here..." />
        <input type="text" placeholder="Type the answer here..." />
        <input type="text" placeholder="Type the answer here..." />
        <input type="text" placeholder="Type the answer here..." />
        <input type="text" placeholder="Type the answer here..." />
      </div>
        <button className="submit-button" onClick={setAnswers}>Submit</button>
        <button className="submit-button" onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

function Guessing() {
    const [clickedIndexes, setClickedIndexes] = useState(Array(8).fill(false));
    const handleClick = (index) => {
        const updated = [...clickedIndexes];
        updated[index] = true;
        setClickedIndexes(updated);
    };
    const navigate = useNavigate();
    function back() {
        question = '';
        answers = [];
        window.location.reload();
    }
    return (
        <div className="guessing">
            <div className="logo">
                UNWIND FAMILY <span>FEUD</span>
            </div>
            <div className="question-display">
                <h2>{question}</h2>
            </div>
            <div className="answer-container">
                {clickedIndexes.map((clicked, index) => 
                    clicked ? (
                    <p className="answer-item" key={index}>
                        {answers[index] || 'No answer provided'}
                    </p>  
                ) : (
                    <button className="answer-button" onClick={() => handleClick(index)}></button>
                )
                )}
            </div>
            <button className="submit-button" onClick={back}>New Question</button>
            <button className="submit-button" onClick={() => navigate('/')}>Home</button>
        </div>
    );
}

export default Game;