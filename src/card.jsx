import React, { useState } from "react";
import './card.css'; // Assuming you're using a CSS file for styles
import { useEffect } from "react";
function Card({ cardData }) {
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
      const correctAnswer = cardData.a; // Assuming each card has an 'answer' property
      if (isAnswerCorrect(userGuess, correctAnswer)) {
          setFeedback('Correct!');
          incrementStreak();
      } else {
          setFeedback('Incorrect, try again.');
          resetStreak();
      }
  };

  const isAnswerCorrect = (guess, answer) => {
      // Logic to account for slight variations in the answer, e.g. ignore case, trim spaces, etc.
      return guess.trim().toLowerCase() === answer.trim().toLowerCase();
  };



  const [isFlipped, setIsFlipped] = useState(false);

    // Effect to reset the flip state whenever a new card is received
    useEffect(() => {
        setIsFlipped(false);  // Reset to show the question side
    }, [cardData]); // This effect runs whenever cardData changes
    
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };


  const [currentStreak, setCurrentStreak] = useState(0);
const [longestStreak, setLongestStreak] = useState(0);

const incrementStreak = () => {
    setCurrentStreak(currentStreak + 1);
    if (currentStreak + 1 > longestStreak) {
        setLongestStreak(currentStreak + 1);
    }
};

const resetStreak = () => {
    setCurrentStreak(0);
};


  return (
    <div className="entire-container">
      <div 
        className="card-container" 
        onClick={handleCardClick}
      >
        <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
          {/* Front of the card (question) */}
          <div className="card-front">
            {cardData.q}
          </div>

          {/* Back of the card (answer and image) */}
          <div className="card-back">
            <div>
              {cardData.a}
            </div>
            {cardData.image && (
              <img 
                src={cardData.image} 
                alt="Coffee" 
                style={{ width: "100px", height: "100px", marginTop: "10px" }} 
              />
            )}
          </div>
        </div>
      </div>
      <div className="streaks">
        <p>Current Streak: {currentStreak} | Longest Streak: {longestStreak}</p>
      </div>
      <div className="input">
        <input 
              type="text" 
              value={userGuess} 
              onChange={(e) => setUserGuess(e.target.value)} 
          />
          <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="output">
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default Card;
