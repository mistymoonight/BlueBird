import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
// Images
import certificateImg from '../../assets/images/mjoa0s5w-1o9ncd7.png'; 
import decImg from '../../assets/images/mjohor6z-1mcg288.png';
import arrowIcon from '../../assets/images/left-arrow.svg';
import cert2Img from '../../assets/images/mjonrydr-afkl4vy.png'; // Correct horizontal cert for g2
import dec2Img from '../../assets/images/mjonrydn-63r50ij.png'; // Correct dec for g2
// New Images
import cert3Img from '../../assets/images/mjons3de-grpyy9q.png'; // Correct cert for g3
import dec3Img from '../../assets/images/mjons3d7-vjgsgwd.png'; // Correct dec for g3
import cert4Img from '../../assets/images/mjoikapa-68dhbnz.png';
import dec4Img from '../../assets/images/mjoikap4-eohjwb6.png';
import cert5Img from '../../assets/images/mjoij3pp-o0012nv.png';
import cert6Img from '../../assets/images/mjoij3pp-n1nzj0y.png';
import commonDecImg from '../../assets/images/mjoij3p9-hm6ak31.png'; // Used for g5, g6

const DotsGrid = () => (
    <div className={styles.dotsGrid}>
        {[...Array(6)].map((_, i) => (
            <div className={styles.dotsRow} key={i}>
                {[...Array(14)].map((_, j) => (
                    <div className={styles.dot} key={j} />
                ))}
            </div>
        ))}
    </div>
);

const Card = ({ 
    className, 
    role, 
    title, 
    award, 
    desc, 
    certImg, 
    decImg, 
    decClass,
    onClick
}) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.cardBg}>
                <div className={styles.contentWrapper}>
                    <p className={styles.roleText}>{role}</p>
                    <div className={styles.mainTitleGroup}>
                        <h2 className={styles.title}>{title}</h2>
                        <h3 className={styles.award}>{award}</h3>
                    </div>
                    <div className={styles.dotsContainer}>
                        <DotsGrid />
                    </div>
                </div>
            </div>
            
            <img src={decImg} className={`${styles.decoration} ${decClass || ''}`} alt="decoration" />
            
            <div className={styles.detailsBtn} onClick={onClick} style={{ cursor: 'pointer', zIndex: 999 }}>
                <p>Details</p>
            </div>
            
            <p className={styles.description}>
                {desc}
            </p>
            
            <div className={styles.verticalLine} />
            
            <div 
                className={styles.certificate} 
                style={{backgroundImage: `url(${certImg})`}}
            />
        </div>
    );
};

const Competition = () => {
  const shipRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - shipRef.current.offsetLeft);
    setScrollLeft(shipRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - shipRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    shipRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDetailClick = (id) => {
    if (['g1', 'g3', 'g4'].includes(id)) {
      navigate('/detail1');
    } else if (['g2', 'g5'].includes(id)) {
      navigate('/detail2');
    }
  };

  const cardsData = [
      {
          id: 'g1',
          role: "第二负责人   前端界面与交互ui设计",
          title: "移动应用创新赛",
          award: "一等奖（华东赛区）",
          desc: "由全国高等学校计算机教育研究会主办、浙江大学与苹果公司联合承办的移动应用类赛事，是中国高校计算机大赛的竞赛模块之一",
          certImg: certificateImg,
          decImg: decImg,
          decClass: styles.decG1,
          onClick: () => handleDetailClick('g1')
      },
      {
          id: 'g2',
          role: "第三负责人   前端界面与交互ui设计",
          title: "中国国际大学生创新大赛",
          award: "浙江省铜奖",
          desc: "中国国际大学生创新大赛，由教育部等12个部门会同天津市人民政府主办，旨在推动创新创业教育改革，激发大学生创新创业热情。",
          certImg: cert2Img,
          decImg: dec2Img,
          decClass: styles.decG2,
          onClick: () => handleDetailClick('g2')
      },
      {
          id: 'g3',
          role: "队长   视觉传达设计",
          title: "NCDA未来设计师大赛",
          award: "全国三等奖",
          desc: "未来设计师·全国高校数字艺术设计大赛（NCDA）是入选《全国普通高校学科竞赛排行榜》，多家教育厅认定，“学习强国”学习平台支持的国家级大学生竞赛。",
          certImg: cert3Img,
          decImg: dec3Img,
          decClass: styles.decG3,
          onClick: () => handleDetailClick('g3')
      },
      {
          id: 'g4',
          role: "队长   视觉传达设计",
          title: "NCDA未来设计师大赛",
          award: "浙江赛区一等奖",
          desc: "未来设计师·全国高校数字艺术设计大赛（NCDA）是入选《全国普通高校学科竞赛排行榜》，多家教育厅认定，“学习强国”学习平台支持的国家级大学生竞赛。",
          certImg: cert4Img,
          decImg: dec4Img,
          decClass: styles.decG4,
          onClick: () => handleDetailClick('g4')
      },
      {
          id: 'g5',
          role: "队长   视觉传达设计",
          title: "NCDA未来设计师大赛",
          award: "浙江赛区三等奖",
          desc: "未来设计师·全国高校数字艺术设计大赛（NCDA）是入选《全国普通高校学科竞赛排行榜》，多家教育厅认定，“学习强国”学习平台支持的国家级大学生竞赛。",
          certImg: cert5Img,
          decImg: commonDecImg,
          decClass: styles.decCommon,
          onClick: () => handleDetailClick('g5')
      },
      {
          id: 'g6',
          role: "队长   视觉传达设计",
          title: "元宇宙设计周",
          award: "全国三等奖",
          desc: "元宇宙设计周——中国高校数字创意设计大赛是由国际人工智能发展联盟、国际大学生商学联合会、当代设计师协会联合主办的设计赛事，旨在推动数字经济发展与元宇宙赛道布局。",
          certImg: cert6Img,
          decImg: commonDecImg,
          decClass: styles.decCommon,
          onClick: () => {} // No specific action for g6 yet
      }
  ];

  const extendedCards = [...cardsData, ...cardsData];
  const oneCycleWidth = cardsData.length * 865; // 6 * (825 + 40)

  const handleScroll = () => {
    if (shipRef.current && !isDragging) {
      if (shipRef.current.scrollLeft >= oneCycleWidth) {
        shipRef.current.scrollLeft -= oneCycleWidth;
      }
    }
  };

  const handleSlideClick = () => {
    if (shipRef.current) {
      shipRef.current.scrollBy({
        left: 865, // Card width (825) + gap (40)
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.competition}>
      <p className={styles.text3}>竞赛获奖</p>
      <div className={styles.autoWrapper6}>
        <div className={styles.group2957} onClick={handleSlideClick}>
          <img src={arrowIcon} className={styles.vector} alt="arrow" />
          <p className={styles.a5}>click to view more</p>
        </div>
        
        <div 
            className={styles.ship} 
            ref={shipRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
        >
            {extendedCards.map((card, index) => (
                <Card 
                    key={`${card.id}-${index}`}
                    className={styles[card.id]}
                    {...card}
                />
            ))}
        </div>
      </div>
      <div className={styles.footer} />
    </div>
  );
}

export default Competition;
