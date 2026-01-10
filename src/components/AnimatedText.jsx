import React, { useEffect, useRef, useState } from 'react';

const AnimatedText = ({ text, className, delay = 0, direction = 'type', speed = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isGrowing, setIsGrowing] = useState(false);
  const textRef = useRef(null);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const fullTextRef = useRef(text);

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
      if (direction === 'type') {
        // Traditional typing effect
        const typeEffect = () => {
          if (indexRef.current < fullTextRef.current.length) {
            setDisplayText(fullTextRef.current.substring(0, indexRef.current + 1));
            indexRef.current++;
            timerRef.current = setTimeout(typeEffect, speed);
          }
        };
        timerRef.current = setTimeout(typeEffect, delay);
      } else if (direction === 'left-to-right') {
        // Left to right growth effect
        setDisplayText(fullTextRef.current);
        // Start with full text but hidden width
        setTimeout(() => {
          setIsGrowing(true);
        }, delay);
      }
    }
  }, [isVisible, delay, direction, speed]);

  // For left-to-right growth, we need to ensure the text is fully rendered but only shows incrementally
  // Using a wrapper with overflow hidden and a child that expands
  if (direction === 'left-to-right') {
    return (
      <span 
        ref={textRef}
        className={className}
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          height: '1em', // Ensure consistent height
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: isGrowing ? '100%' : '0',
            opacity: isGrowing ? '1' : '0',
            transformOrigin: 'left center',
            transition: 'width 0.8s ease-out, opacity 0.8s ease-out',
          }}
        >
          {displayText}
        </span>
      </span>
    );
  }

  // For typing effect, use the original implementation
  return (
    <span ref={textRef} className={className}>
      {displayText}
    </span>
  );
};

export default AnimatedText;
