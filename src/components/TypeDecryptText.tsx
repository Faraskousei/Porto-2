'use client';

import { useState, useEffect } from 'react';
import TypeText from './TypeText';
import DecryptedText from './DecryptedText';

interface TypeDecryptTextProps {
  text: string;
  typeSpeed?: number;
  decryptSpeed?: number;
  maxIterations?: number;
  revealDirection?: 'start' | 'end' | 'center';
  className?: string;
  encryptedClassName?: string;
  showCursor?: boolean;
  cursorChar?: string;
  pauseTime?: number;
  animateOn?: 'view' | 'hover' | 'both';
}

export default function TypeDecryptText({
  text,
  typeSpeed = 50,
  decryptSpeed = 30,
  maxIterations = 1000,
  revealDirection = 'start',
  className = '',
  encryptedClassName = '',
  showCursor = true,
  cursorChar = '|',
  pauseTime = 1000,
  animateOn = 'view',
}: TypeDecryptTextProps) {
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  useEffect(() => {
    if (animateOn === 'view' || animateOn === 'both') {
      // Use Intersection Observer to detect when element is in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsTyping(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      const element = document.querySelector('[data-type-decrypt]');
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    } else {
      setIsTyping(true);
    }
  }, [animateOn]);

  return (
    <div data-type-decrypt>
      {isTyping && !isTypingComplete && (
        <TypeText
          text={text}
          speed={typeSpeed}
          className={className}
          onComplete={handleTypingComplete}
          showCursor={showCursor}
          cursorChar={cursorChar}
          loop={false}
        />
      )}
      
      {isTypingComplete && (
        <DecryptedText
          text={text}
          animateOn="hover"
          revealDirection={revealDirection}
          speed={decryptSpeed}
          maxIterations={maxIterations}
          className={className}
          encryptedClassName={encryptedClassName}
        />
      )}
    </div>
  );
}
