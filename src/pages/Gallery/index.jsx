import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import AnimatedText from '../../components/AnimatedText';

import vector2Img from '../../assets/images/mjovp33u-e4ked1h.svg';
import vectorImg from '../../assets/images/birdd.svg';
import footerBirdImg from '../../assets/images/footer_bird.png';
import blueBirdImg from '../../assets/images/mk8p71xu-bacwfbs.png';
import contactBg from '../../assets/images/mk8p75iw-nqdtxtt.svg';
import blueBirdText from '../../assets/images/Blue_bird.png';
import sDesignText from '../../assets/images/s_Design.png';

import gg1Img from '../../assets/images/mjrvri75-p02yo9x.png';
import gg2Img from '../../assets/images/mjrvrp33-ntdcju5.png';
import gg3Img from '../../assets/images/mjrvrr0r-resf1ts.png';
import gg4Img from '../../assets/images/mjrvxzoa-7qrep7w.png';
import gg5Img from '../../assets/images/mjrvxzoo-aq2f7cp.png';
import gg6Img from '../../assets/images/mjrvxzqb-7dgth4f.png';
import gg7Img from '../../assets/images/mjrvxzx3-niavtqe.png';
import gg8Img from '../../assets/images/mjrvy3o5-sk3vlgc.png';
import gg9Img from '../../assets/images/mjrvxzx0-22jue24.png';
import gg10Img from '../../assets/images/mjrvy03l-a4a9vpy.png';
import gg11Img from '../../assets/images/mjrvy05j-u9k7tx5.png';
import gg12Img from '../../assets/images/mjrvy03j-c7co0ii.png';
import gg13Img from '../../assets/images/mjrvy07l-g8xsiyj.png';
import gg14Img from '../../assets/images/mjrvy0au-b1wzesp.png';
import gg15Img from '../../assets/images/mjrw1oa9-unqquvn.png';
import gg16Img from '../../assets/images/mjrw1m74-fjdpd3m.png';
import gg17Img from '../../assets/images/mjrw1m6w-v682kfs.png';
import gg18Img from '../../assets/images/mjrw1m70-5tcr09q.png';
import gg19Img from '../../assets/images/mjrw1mh3-lf9ldj7.png';
import gg20Img from '../../assets/images/mjrw1may-u4ds3bf.png';
import gg21Img from '../../assets/images/mjrw1m71-zewir1p.png';
import gg22Img from '../../assets/images/mjrw1mb1-jjv67i3.png';
import gg23Img from '../../assets/images/mjrw1mdf-kah69f9.png';
import gg24Img from '../../assets/images/mjrw1mkd-yytkswd.png';

const Card = ({ title, details, index, image, tags, onClickDetails }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Add delay before setting cardVisible to ensure card has started fading in
      const timer = setTimeout(() => {
        setCardVisible(true);
      }, 300); // Fixed delay after card becomes visible

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (cardVisible) {
      // Add delay for details and arrow to appear after title
      const timer = setTimeout(() => {
        setShowDetails(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [cardVisible]);

  return (
    <div 
        ref={cardRef}
        className={`${styles.card} ${isVisible ? styles.visible : ''}`} 
        style={{ '--delay': `${Math.floor(index / 2) * 0.4 + (index % 2) * 0.2}s` }} // 每行有0.4s基础延迟，同一行左卡先出现，右卡延迟0.2s
        onClick={onClickDetails}
    >
      <div className={styles.imageContainer} style={{cursor: 'pointer'}}>
        {image ? (
          <img src={image} className={styles.cardImage} alt={title} />
        ) : (
          <div className={styles.placeholder} />
        )}
        <div className={styles.blank}>
            {tags && tags.map((tag, i) => (
                <div key={i} className={styles.tag}>
                    <p className={styles.tagText}>{tag}</p>
                </div>
            ))}
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.cardTitle}>
          {cardVisible && <AnimatedText text={title} className="" delay={300} />}
        </p>

        <div className={styles.detailsGroup}>
          <p className={styles.detailsText}>
            {cardVisible && <AnimatedText text="Details" className="" delay={500} direction="left-to-right" speed={50} />}
          </p>
          <img 
            src={vector2Img} 
            className={`${styles.arrow} ${showDetails ? styles.arrowVisible : ''}`} 
            alt="arrow" 
          />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dots, setDots] = useState(0); // State for animated dots
  const [isBlueBird, setIsBlueBird] = useState(false); // State for bird transformation
  const [showContact, setShowContact] = useState(false); // State for contact dialog
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const birdTimerRef = useRef(null); // Ref for timer

  // Handle bird click
  const handleBirdClick = () => {
    setIsBlueBird(true);
    setShowContact(true);
    
    // Clear any existing timer
    if (birdTimerRef.current) {
      clearTimeout(birdTimerRef.current);
    }
    
    // Set timer to restore original bird after 3 seconds
    birdTimerRef.current = setTimeout(() => {
      setIsBlueBird(false);
      setShowContact(false);
    }, 3000);
  };

  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev + 1) % 7); // Cycle from 0 to 6
    }, 500); // Update every 500ms
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cardsData = [
    { title: "钟子期-移动古琴APP", image: gg1Img, tags: ["ui设计", "视觉传达设计"] },
    { title: "Tennox-智慧网球小程序", image: gg2Img, tags: ["ui设计", "视觉传达设计"] },
    { title: "Healink-康复训练动作ai指导网站", image: gg3Img, tags: ["ui设计", "软件开发", "微调大模型"] },
    { title: "四时有茶-逆水寒主题奶茶店", image: gg4Img, tags: ["ui设计", "周边设计", "视觉传达设计", "服务设计"] },
    { title: "折叠家具城-家具电商小程序", image: gg5Img, tags: ["ui设计", "视觉传达设计"] },
    { title: "潮潮-浙江省大运会吉祥物设计", image: gg6Img, tags: ["IP设计", "周边设计"] },
    { title: "十二花神·箸-文创设计", image: gg7Img, tags: ["产品设计", "视觉传达设计"] },
    { title: "护发枕-女性友好的发型舒适旅行头枕", image: gg8Img, tags: ["产品设计", "视觉传达设计"] },
    { title: "社交坟场：网络社交暴力的虚拟纪念空间设计", image: gg9Img, tags: ["元宇宙设计", "视觉传达设计"] },
    { title: "心象四季：一个元宇宙情绪疗愈花园", image: gg10Img, tags: ["元宇宙设计", "视觉传达设计"] },
    { title: "浙江大学迎新生信封", image: gg11Img, tags: ["周边设计"] },
    { title: "浙江大学毕业季明信片", image: gg12Img, tags: ["周边设计", "IP设计"] },
    { title: "浙江大学宿舍新年台历", image: gg13Img, tags: ["周边设计", "IP设计"] },
    { title: "官微禁烟日漫画", image: gg14Img, tags: ["视觉传达设计", "绘画"] },
    { title: "立体纸模结构设计", image: gg15Img, tags: ["建模", "视觉传达设计"] },
    { title: "产品建模与渲染", image: gg16Img, tags: ["建模"] },
    { title: "游戏人物建模", image: gg17Img, tags: ["建模"] },
    { title: "live2d建模", image: gg18Img, tags: ["建模"] },
    { title: "王者荣耀稷下学院文化构成-海报设计", image: gg19Img, tags: ["视觉传达设计"] },
    { title: "字体设计", image: gg20Img, tags: ["视觉传达设计"] },
    { title: "平面与色彩构成", image: gg21Img, tags: ["绘画"] },
    { title: "飞鸟-立体构成", image: gg22Img, tags: ["手工"] },
    { title: "吉吉吉吉咪微信表情包-ai数字人制作", image: gg23Img, tags: ["IP设计"] },
    { title: "武虎-otto机器人设计", image: gg24Img, tags: ["IP设计", "硬件开发"] }
  ];

  const handleCardClick = (index) => {
    console.log('Clicked card index:', index);
    if (index === 0) {
      navigate('/detail1');
    } else if (index === 1) {
      navigate('/detail2');
    } else if (index === 2) {
      navigate('/detail3');
    } else if (index === 3) {
      navigate('/detail4');
    }
  };

  return (
    <div className={styles.gallery} id="gallery-section" ref={sectionRef}>
      <div className={styles.topTransition}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <img src={blueBirdText} className={styles.outlineText} alt="Blue bird" />
            <div className={styles.centerTitleGroup}>
              <p className={styles.centerTitle}>
                <AnimatedText text="设计画廊" className="" />
              </p>
              <img src={vectorImg} className={styles.birdIcon} alt="bird" />
            </div>
          </div>
          <img src={sDesignText} className={styles.outlineTextRight} alt="’s Design" />
        </div>
      </div>

      <div className={styles.gridContainer}>
        {cardsData.map((item, index) => (
          <Card 
            key={index}
            title={item.title}
            index={index}
            image={item.image}
            tags={item.tags}
            onClickDetails={() => handleCardClick(index)}
          />
        ))}
      </div>

      <div className={styles.bottomGradient} />
      <div className={styles.footer}>
        <img 
          src={isBlueBird ? blueBirdImg : footerBirdImg} 
          className={styles.footerBird} 
          alt="footer bird" 
          onClick={handleBirdClick}
          style={{ 
            cursor: 'pointer',
            transform: isBlueBird ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        />
        <p className={styles.footerText}>不断探索中{'·'.repeat(dots)}</p>
      </div>
      
      {/* Contact Dialog */}
      {showContact && (
        <div className={styles.contactDialog}>
          <div className={styles.contactContent}>
            <div className={styles.contactText}>
              <p className={styles.contactTitle}>Contact me?</p>
              <p className={styles.contactInstruction}>Please send an email to</p>
              <p className={styles.contactEmail}>bluebirdd@qq.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
