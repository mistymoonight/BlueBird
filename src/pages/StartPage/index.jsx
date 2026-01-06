import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

import imgA5 from '../../assets/images/mj8avgpp-jl8qwjd.svg';
import imgHead from '../../assets/images/mj8avgpp-rtqo1n2.svg';
import imgA2 from '../../assets/images/mj8avgpp-smrrhi3.svg';
import imgA6 from '../../assets/images/mj8avgpp-uccdp99.svg';

const StartPage = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Standard parallax: mouse moves right, layers move left.
    // Closer layers move more.
    const x = (e.clientX - window.innerWidth / 2);
    const y = (e.clientY - window.innerHeight / 2);
    setOffset({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEnter = () => {
    navigate('/home');
  };

  // Helper to calculate transform based on factor
  // factor > 0: moves opposite to mouse (standard parallax)
  // factor < 0: moves with mouse
  const getTransform = (factorX, factorY = factorX) => {
    return {
      transform: `translate(${-offset.x * factorX}px, ${-offset.y * factorY}px)`,
      transition: 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)' // Smoother ease
    };
  };

  // Helper for direct mouse follow with clamping (no parallax delay)
  const getFlyTransform = () => {
      // Clamp values to keep bug within a specific range relative to its origin
      // Range: +/- 350px horizontally, +/- 200px vertically (slightly larger than bird)
      const limitX = 350;
      const limitY = 200;
      
      const x = Math.max(-limitX, Math.min(limitX, offset.x));
      const y = Math.max(-limitY, Math.min(limitY, offset.y));

      return {
          transform: `translate(${x}px, ${y}px)`,
          transition: 'transform 0.05s linear' // Very fast, almost instant response
      };
  };

  return (
    <div className={styles.start}>
      <div className={styles.x}>
        {/* Background Rings Animation */}
        <div className={styles.expandingRings}>
            <div className={styles.ring}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
            </div>
            <div className={styles.ring}>
                <div className={styles.dot} />
                <div className={styles.dot} />
            </div>
            <div className={styles.ring}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
            </div>
            <div className={styles.ring}>
                <div className={styles.dot} />
                <div className={styles.dot} />
            </div>
            <div className={styles.ring}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
            </div>
        </div>

        <p className={styles.welcomeTo}>Welcome to</p>

        {/* Remove wrapper rotation, apply individual transforms */}
        <div className={styles.birdWrapper}>
            {/* 5: Body/Wing - Back layer */}
            <img 
                src={imgA5} 
                className={styles.a5} 
                alt="" 
                style={getTransform(0.03)} 
            />
            
            {/* Head: Static/Anchor - Middle layer */}
            <img 
                src={imgHead} 
                className={styles.headStatic} 
                alt="" 
                // Removed transform to make it static as requested
            />
            
            {/* 4: Layer 5 (Face container) - Middle Front */}
            <div 
                className={styles.layer5} 
                style={getTransform(-0.04)}
            >
                {/* 1: Pupils - Eyes move more to look alive */}
                <div 
                    className={styles.pupils} 
                    style={getTransform(-0.02)} /* Relative to layer5 */
                >
                    <div className={styles.ellipse11} />
                    <div className={styles.ellipse11} />
                </div>

                {/* 2: Beak - Front */}
                <img 
                    src={imgA2} 
                    className={styles.a2} 
                    alt="" 
                    style={getTransform(-0.02)} /* Relative to layer5 */
                />

                {/* 3: Fly - Most Front (Single animated bug) */}
                <div 
                    className={styles.fly} 
                    style={getFlyTransform()} /* Direct mouse follow with clamp */
                >
                    <div className={styles.flyRandom}>
                        <div className={styles.flyMover}>
                            <div className={styles.flySprite}>
                                <div className={styles.ellipse28} />
                                <div className={styles.ellipse29} />
                                <div className={styles.ellipse27} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.eyeLightsStatic}>
                    <div className={styles.a1}>
                        <div className={styles.ellipse12} />
                        <div className={styles.ellipse13} />
                    </div>
                    <div className={styles.a2}>
                        <div className={styles.ellipse12} />
                        <div className={styles.ellipse13} />
                    </div>
                </div>
            </div>

            {/* 6: Feet/Tail - Back layer */}
            <img 
                src={imgA6} 
                className={styles.a6} 
                alt="" 
                style={getTransform(0.02)} 
            />
        </div>

        <p className={styles.blueBird}>Blue bird</p>

        <button className={styles.enterButton} onClick={handleEnter}>
            <span className={styles.btnText}>my designer homepage</span>
            <svg 
                className={styles.btnArrow} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </button>
      </div>
    </div>
  );
};

export default StartPage;
