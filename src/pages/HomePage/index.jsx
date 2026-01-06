import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import littleBirdIcon from '../../assets/images/littlebird.svg';
import blueBirdText from '../../assets/images/bluebird-text.png';
import chineseQuote from '../../assets/images/chinese-quote.png';
import shuIcon from '../../assets/images/shu.svg';
import Transition from '../Transition';
import Competition from '../Competition';
import Experience from '../Experience';

const TypewriterLine = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    const currentText = texts[index];
    let splitIndex = currentText.indexOf('：');
    if (splitIndex === -1) splitIndex = currentText.indexOf(':');
    
    const contentStartIndex = splitIndex !== -1 ? splitIndex + 1 : 0;
    const contentLength = currentText.length - contentStartIndex;
    
    if (subIndex === contentLength + 1 && !isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); 
      return () => clearTimeout(timeout);
    }
    
    if (subIndex === contentLength + 1 && isDeleting) {
      setIsDeleting(false);
      setSubIndex(0);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, 100); 

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, texts]);

  const currentText = texts[index];
  let splitIndex = currentText.indexOf('：');
  if (splitIndex === -1) splitIndex = currentText.indexOf(':');
  
  const label = splitIndex !== -1 ? currentText.substring(0, splitIndex + 1) : "";
  const content = splitIndex !== -1 ? currentText.substring(splitIndex + 1) : currentText;
  
  const textToDisplay = label + content.substring(0, subIndex);

  return (
    <p className={styles.scrollItem}>
      {textToDisplay}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </p>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'competition', 'experience'
  const homepageRef = useRef(null);

  const handleBack = () => {
    navigate('/');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Manually set tab for immediate feedback
      if (id === 'hero-section') setActiveTab('home');
      if (id === 'competition-section') setActiveTab('competition');
      if (id === 'experience-section') setActiveTab('experience');
    }
  };

  // Scroll listener to update active tab
  useEffect(() => {
    const handleScroll = () => {
      if (!homepageRef.current) return;
      
      const heroSection = document.getElementById('hero-section');
      const competitionSection = document.getElementById('competition-section');
      const experienceSection = document.getElementById('experience-section');
      const gallerySection = document.getElementById('gallery-section');
      
      if (!heroSection || !competitionSection) return;

      const windowHeight = window.innerHeight;
      
      // Use getBoundingClientRect for more accurate viewport visibility detection
      const compRect = competitionSection.getBoundingClientRect();
      const expRect = experienceSection ? experienceSection.getBoundingClientRect() : null;
      const galRect = gallerySection ? gallerySection.getBoundingClientRect() : null;
      
      // Determine active tab based on which section is dominant in the view
      // We check from bottom up (Gallery -> Experience -> Competition -> Home)
      
      // If Gallery section top is above the middle of the screen
      if (galRect && galRect.top < windowHeight * 0.5) {
          setActiveTab('gallery');
      }
      // Else if Experience section top is above the middle of the screen
      else if (expRect && expRect.top < windowHeight * 0.5) {
          setActiveTab('experience');
      } 
      // Else if Competition section top is above the middle of the screen
      else if (compRect.top < windowHeight * 0.5) {
          setActiveTab('competition');
      }
      // Otherwise we are in Home
      else {
          setActiveTab('home');
      }
    };

    const container = homepageRef.current;
    if (container) {
        container.addEventListener('scroll', handleScroll);
    }
    return () => {
        if (container) {
            container.removeEventListener('scroll', handleScroll);
        }
    };
  }, []);

  const getPillStyle = () => {
      switch(activeTab) {
          case 'competition': return { left: '167px', width: '141px' };
          case 'experience': return { left: '329px', width: '141px' };
          case 'gallery': return { left: '491px', width: '141px' };
          default: return { left: '5px', width: '141px' };
      }
  };

  const scrollToGallery = () => {
      const element = document.getElementById('gallery-section');
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveTab('gallery');
      }
  };

  return (
    <div className={styles.homepage} ref={homepageRef}>
      <div className={styles.fenwei} id="hero-section">
        <div className={styles.autoWrapper2}>
          <div className={styles.rectangle401} onClick={handleBack} style={{cursor: 'pointer'}}>
            <img src={littleBirdIcon} className={styles.miniBird} alt="Little Bird" />
            <p className={styles.bluebird}>Bluebird</p>
          </div>
          
          <div className={styles.autoWrapper}>
            {/* Dynamic class based on activeTab */}
            <div className={`${styles.find} ${activeTab !== 'home' ? styles.activeCompetition : ''}`}>
              <div className={styles.extraDarkBg} /> {/* New dark background layer */}
              <div className={styles.rectangle378} />
              {/* The moving black pill */}
              <div 
                className={styles.rectangle379} 
                style={getPillStyle()}
              />
              <div className={styles.frame2860}>
                <p 
                    className={`${styles.navItem} ${activeTab === 'home' ? styles.active : ''}`} 
                    onClick={() => scrollToSection('hero-section')}
                >
                    我的首页
                </p>
                <p 
                    className={`${styles.navItem} ${activeTab === 'competition' ? styles.active : ''}`} 
                    onClick={() => scrollToSection('competition-section')}
                >
                    竞赛获奖
                </p>
                <p 
                    className={`${styles.navItem} ${activeTab === 'experience' ? styles.active : ''}`} 
                    onClick={() => scrollToSection('experience-section')}
                >
                    个人经历
                </p>
                <p 
                    className={`${styles.navItem} ${activeTab === 'gallery' ? styles.active : ''}`}
                    onClick={scrollToGallery}
                >
                    设计画廊
                </p>
              </div>
            </div>
            <div className={styles.ellipse87} />
          </div>
        </div>
        
        <p className={styles.hiIAm}>
          <span>Hi</span>
          <span className={styles.exclamation}>!</span>
          <span>  I am</span>
        </p>
        <p className={styles.a2}>Wang Yuxin</p>
        <p className={styles.a3}>
          I am from Zhejiang University, enrolled in the Industrial Design <br />
          program under the School of Computer Science and Technology.
        </p>
        
        <div className={styles.autoWrapper7}>
          <div className={styles.ellipse88} />
          <div className={styles.autoWrapper6}>
            <div className={styles.autoWrapper5}>
              <div className={styles.autoWrapper3}>
                <p className={styles.text3}>王昱心</p>
                <p className={styles.text3}>|</p>
                <p className={styles.text3}>浙江大学 工业设计</p>
              </div>
              <div className={styles.autoWrapper4}>
                <div className={styles.scrollContainer}>
                  <TypewriterLine texts={[
                      "语言：英语 （四级594分）",
                      "软件技能：Rhino / keyshot/ procreate / PS / Figma / live2d",
                      "UI/UX设计：App界面设计、交互流程搭建",
                      "绘画与视觉：手绘、IP形象、插画、漫画创作",
                      "AI绘图： Stable Diffusion 创意生成",
                      "Live2D：建模与基础动效",
                      "科研能力：数据整理、论文写作、可视化展示"
                  ]} />
                </div>
                <div className={styles.ellipse87} />
              </div>
            </div>
            <img src={blueBirdText} className={styles.blueBirdLabel} alt="Blue bird" />
            <img src={chineseQuote} className={styles.text5} alt="早起的鸟儿有虫吃" />
          </div>
        </div>
        
        <img src={shuIcon} className={styles.shu} alt="Decorative birds" />
      </div>

      <Transition />

      <div id="competition-section">
        <Competition />
      </div>
      
      <div id="experience-section">
        <Experience />
      </div>
    </div>
  );
}

export default HomePage;
