"use client";

import { motion } from "framer-motion";

export interface CircleConfig {
  size: string;
  color: string;
  initialX: string;
  initialY: string;
}

interface BackgroundCirclesProps {
  circles?: CircleConfig[];
}

export const defaultBackgroundCircles: CircleConfig[] = [
  {
    size: "w-32 h-32",
    color: "bg-green-300/30",
    initialX: "20%",
    initialY: "25%",
  },
  {
    size: "w-48 h-48",
    color: "bg-blue-200/30",
    initialX: "80%",
    initialY: "60%",
  },
  {
    size: "w-24 h-24",
    color: "bg-yellow-200/30",
    initialX: "60%",
    initialY: "15%",
  },
  {
    size: "w-40 h-40",
    color: "bg-purple-200/30",
    initialX: "10%",
    initialY: "70%",
  },
];

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ 
  circles = defaultBackgroundCircles 
}) => {
  return (
    <>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${circle.size} ${circle.color} backdrop-blur-lg`}
          initial={{ x: circle.initialX, y: circle.initialY }}
          animate={{
            x: [
              circle.initialX,
              `calc(${circle.initialX} + 3%)`,
              circle.initialX,
            ],
            y: [
              circle.initialY,
              `calc(${circle.initialY} - 4%)`,
              circle.initialY,
            ],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default BackgroundCircles;