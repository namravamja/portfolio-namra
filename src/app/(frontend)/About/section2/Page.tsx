"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Expanded card data with content for the back side
const cardData: Card[] = [
  {
    title: "Skills and Expertise",
    icon: "mdi:code-tags",
    content:
      "Proficient in modern web technologies including React, Next.js, and TypeScript. Experienced in building responsive, accessible, and performant web applications with clean, maintainable code.",
  },
  {
    title: "Results and Impact",
    icon: "mdi:chart-bar",
    content:
      "Delivered projects that increased user engagement by 40% and reduced load times by 60%. Created solutions that directly impacted business goals and improved customer satisfaction metrics.",
  },
  {
    title: "Passion and Approach",
    icon: "mdi:flame",
    content:
      "Driven by a user-centered design philosophy and a commitment to excellence. I approach each project with creativity, attention to detail, and a focus on solving real problems for real people.",
  },
];

const AboutSection = () => {
  return (
    <div className="mt-20 px-4 md:px-8 lg:px-12">
      <div className="flex h-[36rem] w-full  ">
        {/* Title section */}
        <div className="flex flex-col">
          <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-black/10 leading-none">
            Why
          </p>
          <p className="text-7xl md:text-8xl lg:text-9xl font-bold text-violet-900/70 leading-none">
            Me??
          </p>
          <p className="mt-6 text-gray-600 max-w-md">
            I bring a unique combination of technical expertise, creative
            thinking, and business understanding to every project.
          </p>
        </div>

        {/* Cards section */}
        <div className="flex-1 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cardData.map((card, index) => (
              <FlipCard key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Card {
  title: string;
  icon: string;
  content: string;
}

const FlipCard = ({ card, index }: { card: Card; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="h-80 md:h-96 w-full perspective-1000 cursor-pointer"
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
      onTouchStart={handleFlip}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl bg-white border border-violet-200 p-6 flex flex-col items-center justify-center shadow-lg transition-all duration-300 ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-violet-900 mb-4">
            <Icon icon={card.icon} width="40" height="40" />
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800">
            {card.title}
          </h3>
          <div className="mt-4 w-16 h-1 bg-violet-900 rounded-full"></div>
          <div className="mt-4 text-sm text-gray-500 text-center">
            Hover to learn more
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-violet-900/70 to-violet-900/70 p-6 flex flex-col items-center justify-center shadow-lg text-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">{card.title}</h3>
          <p className="text-center text-white/90">{card.content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
