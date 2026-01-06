import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import vector2Img from '../../assets/images/mjovp33u-e4ked1h.svg';
import vectorImg from '../../assets/images/mjovp33u-vhj7kc2.png';
import footerImg from '../../assets/images/mjovp34t-7wt2pz5.png';

const Card = ({ title, details, index, isVisible }) => {
  return (
    <div 
        className={`${styles.card} ${isVisible ? styles.visible : ''}`} 
        style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className={styles.placeholder} />
      <div className={styles.content}>
        <p className={styles.cardTitle}>{title}</p>
        <div className={styles.detailsGroup}>
          <p className={styles.detailsText}>Details</p>
          <img src={vector2Img} className={styles.arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    { title: "钟子期-移动古琴APP" },
    { title: "悦在运动-智慧网球小程序" },
    { title: "Healink-康复训练动作ai指导网站" },
    { title: "四时有茶-逆水寒主题奶茶店" },
    { title: "折叠家具城-家具电商小程序" },
    { title: "潮潮-浙江省大运会吉祥物设计" },
    { title: "十二花神·箸-文创设计" },
    { title: "护发枕-女性友好的发型舒适旅行头枕" },
    { title: "社交坟场：网络社交暴力的虚拟纪念空间设计" },
    { title: "心象四季：一个元宇宙情绪疗愈花园" },
    { title: "浙江大学迎新生信封" },
    { title: "浙江大学毕业季明信片" },
    { title: "浙江大学宿舍新年台历" },
    { title: "官微禁烟日漫画" },
    { title: "立体纸模结构设计" },
    { title: "产品建模与渲染" },
    { title: "游戏人物建模" },
    { title: "live2d建模" },
    { title: "平面与色彩构成" },
    { title: "飞鸟-立体构成" },
    { title: "字体设计" },
    { title: "吉吉吉吉咪微信表情包-ai数字人制作" }
  ];

  return (
    <div className={styles.gallery} id="gallery-section" ref={sectionRef}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <p className={styles.outlineText}>Blue bird</p>
          <div className={styles.centerTitleGroup}>
            <p className={styles.centerTitle}>设计画廊</p>
            <img src={vectorImg} className={styles.birdIcon} alt="bird" />
          </div>
        </div>
        <p className={styles.outlineTextRight}>’s Design</p>
      </div>

      <div className={styles.gridContainer}>
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} index={index} isVisible={isVisible} />
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>不断探索中……</p>
        <img src={footerImg} className={styles.footerImage} alt="footer" />
      </div>
    </div>
  );
};

export default Gallery;
