import React, { useState } from "react";
import Card from "./card"; // Assuming you're using the Card component
import './App.css'; // Import the CSS file
function App() {
  const CoffeeArray = [
    { 
      q: "How is a Latte made?", 
      a: "A Latte is made with espresso and steamed milk, topped with a small amount of foam.",
      image: "https://media.istockphoto.com/id/1152767411/photo/cup-of-coffee-latte-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=24HBAvkahjo8LKV-6DRUklQzPJUqxjmVlBFtV5BG4tU=" // Replace with an actual image URL
    },
    { 
      q: "How is a Cappuccino made?", 
      a: "A Cappuccino is made with equal parts espresso, steamed milk, and milk foam.",
      image: "https://media.istockphoto.com/id/947762906/photo/hot-coffee-cappuccino-latte-art-isolated-on-white-background-clipping-path-included.jpg?s=612x612&w=0&k=20&c=JaGusOUZ-7wjQaSAufdMpH0IND3WmYW45sAQRwMwoeY="
    },
    { 
      q: "How is an Americano made?", 
      a: "An Americano is made by adding hot water to a shot of espresso.",
      image: "https://www.peets.com/cdn/shop/products/caffe-americano.png?v=1597269387"
    },
    { q: "How is a Macchiato made?", a: "A Macchiato is made by topping a shot of espresso with a small amount of steamed milk or milk foam.",
      image: "https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk1MzA0NTgyOTIwODA3NzM4/what-is-a-macchiato.jpg"
     },
    { q: "How is a Mocha made?", a: "A Mocha is made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
      image: "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg"
     },
    { q: "How is a Flat White made?", a: "A Flat White is made with a shot of espresso and microfoam (steamed milk with small, fine bubbles).",
      image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20230406_FlatWhite.jpg?impolicy=1by1_wide_topcrop_630"
     },
    { q: "How is a Cortado made?", a: "A Cortado is made with equal parts espresso and steamed milk.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmeaCTwnTZLmZJxy2fzgfDWHE-07kagUprP7yyIf6d7ApLtRVH9px6d6N8jKee83UdOw&usqp=CAU"
     },
    { q: "How is an Affogato made?", a: "An Affogato is made by pouring a shot of hot espresso over a scoop of vanilla ice cream.",
      image: "https://pastaevangelists.com/cdn/shop/articles/Affogato_1200x1200.png?v=1621613046"
     },
    { q: "How is a Cold Brew made?", a: "Cold Brew is made by steeping coarsely ground coffee in cold water for 12-24 hours, then straining it.",
      image: "https://smallfarmbiglife.com/wp-content/uploads/2022/07/Dunkin-Copycat-Brown-Sugar-Cream-Cold-Brew-2135-scaled.jpg"
     },
    { q: "How is an Espresso made?", a: "Espresso is made by forcing hot water under pressure through finely-ground coffee beans.",
      image: "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg"
     },
    // Add more coffee items with image URLs
  ];

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  // Function to get a random card from CoffeeArray
  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * CoffeeArray.length);
    return CoffeeArray[randomIndex];
  };

  // State to store the current card and the history of previous cards
  const [currentCard, setCurrentCard] = useState(getRandomCard());
  const [cardHistory, setCardHistory] = useState([]);  // History stack of previous cards

  // Function to get a new random card and store the current one in the history stack
  const handleNewCard = () => {
    setCardHistory([...cardHistory, currentCard]);  // Push current card to history
    setCurrentCard(getRandomCard());  // Set new random card as the current card
  };

  // Function to go back to the previous card
  const handlePrevCard = () => {
    if (cardHistory.length > 0) {
      const lastCard = cardHistory[cardHistory.length - 1];  // Get the last card in history
      const newHistory = cardHistory.slice(0, cardHistory.length - 1);  // Remove the last card from history
      setCurrentCard(lastCard);  // Set the last card as the current card
      setCardHistory(newHistory);  // Update history without the last card
    }
  };

  return (
    <div className="mainContainer">
      <h1>Test Your Coffee Knowledge</h1>
      <p>Click the cards to test how many common coffee recipes you truly know!</p>
      <p>Number of cards: 10</p>
      <Card cardData={currentCard} />
      <div style={{ marginTop: "20px" }}>
        <button 
          onClick={handlePrevCard} 
          disabled={cardHistory.length === 0}  // Disable button if there's no history
        >
          Back
        </button>
        <button onClick={handleNewCard} style={{ marginLeft: "10px" }}>
          Next
        </button>
        <button className="shuffle" onClick={shuffleCards}>Shuffle</button>

      </div>
    </div>
  );
}

export default App;
