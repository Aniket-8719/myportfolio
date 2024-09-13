import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

// Array of card data with different content for each card
const CARDS = [
  { color: "#266678", title: "B.E/CSE",year: "2025", content: "CHANDIGARH UNIVERSITY, MOHALI" },
  { color: "#cb7c7a", title: "INTERMEDIATE", year: "2019", content: "M C R G INTER COLLEGE DEVIGANJ FATEHPUR" },
  { color: "#747474", title: "HIGH SCHOOL", year: "2017", content: "P V M H S SCH HARIHARGANJ FATEHPUR" },
];

const CARD_OFFSET = 10; 
const SCALE_FACTOR = 0.06;

const Education = () => {
  const [cards, setCards] = React.useState(CARDS);

  const moveToEnd = (fromIndex) => {
    setCards((prevCards) => move(prevCards, fromIndex, prevCards.length - 1));
  };

  return (
    <div className="flex items-center justify-center  relative">
      <ul className="relative w-[350px] h-[220px]">
        {cards.map((card, index) => {
          const isTopCard = index === 0;

          return (
            <motion.li
              key={card.color}
              className={`absolute w-[350px] h-[220px] rounded-lg p-4 flex flex-col justify-center items-center text-white`}
              style={{
                backgroundColor: card.color,
                cursor: isTopCard ? "grab" : "auto",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
              drag={isTopCard ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0,
              }}
              onDragEnd={() => moveToEnd(index)}
            >
              {/* Unique content for each card */}
              <h2 className="text-3xl sm:text-4xl font-bold">{card.title}</h2>
              <span className="text-md font-bold">({card.year})</span>
              <p className="text-sm mt-2">{card.content}</p>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
