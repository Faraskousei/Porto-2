'use client';

import { useState, useEffect } from 'react';

interface TypeTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorChar?: string;
  deleteSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

export default function TypeText({
  text,
  speed = 100,
  className = '',
  onComplete,
  showCursor = true,
  cursorChar = '|',
  deleteSpeed = 50,
  pauseTime = 2000,
  loop = false,
}: TypeTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, start deleting after pause
          if (loop) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          } else if (onComplete) {
            onComplete();
          }
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          setDisplayText(text.slice(0, currentIndex - 1));
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, deleteSpeed, pauseTime, loop, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className={`${showCursorState ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>
          {cursorChar}
        </span>
      )}
    </span>
  );
}
