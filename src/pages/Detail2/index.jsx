import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import linkIcon from '../../assets/images/detail1_link_icon.svg';
import qrCode from '../../assets/images/detail2_qr_code.png';
import leftArrow from '../../assets/images/detail1_left_arrow.png';
import poster from '../../assets/images/detail2_poster.png';
import posterH2 from '../../assets/images/detail2_poster_h2.png';
import posterH3 from '../../assets/images/detail2_poster_h3.png';
import posterH4 from '../../assets/images/detail2_poster_h4.png';
import rightArrow from '../../assets/images/detail1_right_arrow.svg';
import smallCard from '../../assets/images/detail2_small_card.png';

const Detail2 = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image sequence: poster -> h2 -> h4 -> h3
  const images = [poster, posterH2, posterH4, posterH3];

  const handleBack = () => {
    navigate('/home', { state: { targetSection: 'gallery-section' } });
  };

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <motion.div 
      className={styles.detail1}
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className={styles.autoWrapper2}>
        <div className={styles.d2} onClick={handleBack} style={{cursor: 'pointer'}}>
          <svg className={styles.vector} width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17L2 9L10 1M2 9L20 9" stroke="#57C5E2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className={styles.back}>返回</p>
        </div>
        <p className={styles.text3}>Tennox-智慧网球小程序</p>
        <div className={styles.link} onClick={() => window.open('https://www.figma.com/proto/hoKasGVKBYpdhn87vyw4IS/%E6%99%BA%E6%85%A7%E7%BD%91%E7%90%83%E7%B3%BB%E7%BB%9F--Copy-?page-id=0%3A1&node-id=2126-7205&p=f&viewport=658%2C298%2C0.08&t=7lTkfX0FeWZWnENs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2126%3A7205', '_blank')} style={{cursor: 'pointer'}}>
          <img src={linkIcon} className={styles.vector2} alt="link" />
          <p className={styles.text4}>点击此处体验</p>
        </div>
      </div>
      <div className={styles.frame28531}>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>ui设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>NCDA省三等奖</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>视觉传达设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>中国国际大学生创新大赛省铜奖</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>蒲公英大赛高校赛道</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>杭州复鼎科技合作商业项目</p>
        </div>
      </div>
      <div className={styles.autoWrapper3}>
        <p className={styles.text6}>设计说明：</p>
        <p className={styles.text6}>手机端交互：</p>
      </div>
      <div className={styles.autoWrapper4}>
        <p className={styles.text7}>
          随着人工智能与计算机视觉技术在体育领域的广泛应用，传统网球训练与观赛方式正迎来智能化变革。Tennox智慧网球正是在这一背景下诞生的创新型小程序产品，依托技术团队长期积累的算法与系统开发能力，面向球员、教练与观众提供一体化的智能训练与观赛辅助体验。项目已在高校网球队与专业俱乐部开展测试，获得了广泛认可，具备真实应用场景与落地基础。
          作为移动端小程序平台，Tennox具备免安装、扫码即用、轻量高效的使用优势。UI设计围绕“即开即练、数据驱动、交互友好”展开，构建了从入场训练、实时追踪到数据评估与分享的完整流程。用户扫码进入球场后，系统自动连接设备并开始记录，全程无需繁琐设置，极大降低使用门槛。
          界面风格清晰专业，采用模块化布局与简洁图形语言，呈现训练轨迹、发球速度、动作识别与得分事件等关键信息。六维雷达图、视频回放与数据对比功能提升了训练反馈的可视性与可操作性。同时，系统引入成就机制、排行榜与好友互动，增强用户参与感，形成良性的训练社交生态。
          Tennox不仅是一个智能训练工具，更是智能体育走向大众化的探索实践。其UI设计兼顾技术可用性与用户体验，为智慧运动平台提供参考范式。
        </p>
        <img src={qrCode} className={styles.image68} alt="qr code" />
      </div>
      <div className={styles.autoWrapper8}>
        <div className={styles.autoWrapper6}>
          <p className={styles.text8}>海报展示：</p>
        </div>
        {currentImageIndex === 0 ? (
          <img 
            src={leftArrow} 
            className={styles.vector3} 
            alt="prev" 
            style={{ opacity: 0.5, cursor: 'default' }}
          />
        ) : (
          <svg 
            className={styles.vector3} 
            width="44" 
            height="76" 
            viewBox="0 0 44 76" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlePrev} 
            style={{ opacity: 1, cursor: 'pointer' }}
          >
            <path d="M42.0158 33.071L10.6994 1.75295C9.50399 0.610621 7.90895 -0.0184308 6.25561 0.000411394C4.60227 0.0192536 3.02198 0.684492 1.85293 1.85376C0.683876 3.02304 0.0189317 4.60345 0.000398031 6.25679C-0.0181356 7.91014 0.611213 9.50506 1.75376 10.7002L28.599 37.5438L1.75209 64.384C0.617082 65.5806 -0.00587848 67.1731 0.0159013 68.8223C0.0376811 70.4714 0.70248 72.0468 1.8687 73.2131C3.03491 74.3793 4.61037 75.0441 6.25951 75.0659C7.90864 75.0876 9.50111 74.4647 10.6977 73.3297L42.0158 42.0183C42.6037 41.4311 43.0702 40.7337 43.3884 39.9661C43.7067 39.1985 43.8705 38.3756 43.8705 37.5446C43.8705 36.7137 43.7067 35.8908 43.3884 35.1232C43.0702 34.3556 42.6037 33.6582 42.0158 33.071Z" fill="#57C5E2"/>
          </svg>
        )}
        <div className={styles.autoWrapper7}>
          <img src={images[currentImageIndex]} className={styles.h1} alt="poster" />
          <p className={styles.a15}>{currentImageIndex + 1}/{images.length}</p>
        </div>
        <img 
          src={rightArrow} 
          className={styles.vector4} 
          alt="next" 
          onClick={handleNext} 
          style={{ opacity: currentImageIndex === images.length - 1 ? 0.5 : 1, cursor: currentImageIndex === images.length - 1 ? 'default' : 'pointer' }}
        />
      </div>
      
      <div className={styles.autoWrapperSmallCard}>
        <div className={styles.titleWrapper}>
          <p className={styles.text8}>小卡展示：</p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={smallCard} className={styles.smallCard} alt="小卡展示" />
        </div>
      </div>

      <div className={styles.autoWrapper9}>
        <p className={styles.text6}>作者：</p>
        <p className={styles.text9}>
          王昱心 浙江大学；陈严心哲 浙江大学；胡依琳 浙江大学
        </p>
      </div>
    </motion.div>
  );
};

export default Detail2;