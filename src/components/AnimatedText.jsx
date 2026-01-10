import React, { useEffect, useRef, useState } from 'react';

const AnimatedText = ({ text, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const textRef = useRef(null);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const typeEffect = () => {
        if (indexRef.current < text.length) {
          setDisplayText(text.substring(0, indexRef.current + 1));
          indexRef.current++;
          timerRef.current = setTimeout(typeEffect, 100);
        }
      };

      timerRef.current = setTimeout(typeEffect, delay);
    }
  }, [isVisible, text, delay]);

  return (
    <span ref={textRef} className={className}>
      {displayText}
    </span>
  );
};

export default AnimatedText;
