"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
  words: string[]; // Can be one or more words
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  initialDelay: number; // Make this required without default
  className?: string;
  cursorClassName?: string;
  cycleOnce?: boolean; // Controls whether to cycle once or continuously
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 80,
  pauseTime = 1000,
  initialDelay, // No default value here
  className = "",
  cursorClassName = "",
  cycleOnce = false,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<
    "initial" | "typing" | "pausing" | "deleting" | "complete"
  >("initial");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Handle special case where there's only one word
  const isSingleWord = words.length === 1;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const speeds = {
      typing: typingSpeed,
      deleting: deletingSpeed,
      pause: pauseTime,
      initialDelay: initialDelay,
    };

    switch (phase) {
      case "initial":
        timeout = setTimeout(() => {
          setPhase("typing");
        }, speeds.initialDelay);
        break;

      case "typing":
        const currentWord = words[wordIndex];
        if (displayText.length < currentWord.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentWord.substring(0, displayText.length + 1));
          }, speeds.typing);
        } else {
          // Word is complete
          if (isSingleWord) {
            // If only one word, stay complete
            setPhase("complete");
          } else if (cycleOnce && wordIndex === words.length - 1) {
            // If we're on the last word and cycle once is enabled, stay complete
            setPhase("complete");
          } else {
            // Pause before starting to delete
            timeout = setTimeout(() => {
              setPhase("pausing");
            }, speeds.pause);
          }
        }
        break;

      case "pausing":
        // Pause at completed word before deleting
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, speeds.pause);
        break;

      case "deleting":
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          }, speeds.deleting);
        } else {
          // Word is fully deleted
          const nextIndex = (wordIndex + 1) % words.length;

          // Move to the next word
          setWordIndex(nextIndex);
          setPhase("typing");
        }
        break;

      case "complete":
        // Stay in complete phase
        break;

      default:
        break;
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    phase,
    wordIndex,
    words,
    isSingleWord,
    cycleOnce,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    initialDelay,
  ]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`flex items-center ${className}`}>
      <motion.span>{displayText}</motion.span>
      <span
        className={`${
          cursorVisible ? "opacity-100" : "opacity-0"
        } transition-opacity ${cursorClassName}`}
      >
        <div className="mt-3">/</div>
      </span>
    </div>
  );
};

export default TypewriterEffect;
