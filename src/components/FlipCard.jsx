import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(prevState => !prevState);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className='p-8 border-2 border-black '>
        This is the front of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>

      <div className='p-8 border-2 border-black'>
         This is the back of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};

export default App;
