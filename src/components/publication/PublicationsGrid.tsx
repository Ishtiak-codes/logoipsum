import React from "react";
import { motion } from "framer-motion";

type Card = { id: number; content: string; alt: string };

type Props = {
  cards: Card[];
  clickCount: number;
};

const PublicationsGrid: React.FC<Props> = ({ cards }) => {
  return (
    <motion.div className="grid grid-cols-6 gap-6" layout>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            layout: {
              type: "spring",
              stiffness: 40,
              damping: 18,
              delay: index * 0.08,
            },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          className="aspect-square flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={card.content}
            alt={card.alt}
            className="w-full h-full object-contain rounded-sm"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PublicationsGrid;
