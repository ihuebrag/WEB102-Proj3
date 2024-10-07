import React, { useState } from "react";
import './card.css'; // Assuming you're using a CSS file for styles
import { useEffect } from "react";
function Card({ cardData }) {
  const [isFlipped, setIsFlipped] = useState(false);

    // Effect to reset the flip state whenever a new card is received
    useEffect(() => {
        setIsFlipped(false);  // Reset to show the question side
    }, [cardData]); // This effect runs whenever cardData changes
    
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
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
  );
}

export default Card;
