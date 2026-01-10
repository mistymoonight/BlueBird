import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
// Removed backArrow import
import linkIcon from '../../assets/images/detail1_link_icon.svg';
import qrCode from '../../assets/images/detail1_qr_code.png';
import leftArrow from '../../assets/images/detail1_left_arrow.png';
import leftArrowActive from '../../assets/images/detail1_right_arrow.svg'; // Reuse right arrow SVG for active state
// 导入四时有茶相关图片
import poster from '../../assets/images/detail1_poster.png';
import posterH2 from '../../assets/images/detail1_poster_h2.png';
import posterH3 from '../../assets/images/detail1_poster_h3.png';
import posterH4 from '../../assets/images/detail1_poster_h4.png';
import posterH5 from '../../assets/images/detail1_poster_h5.png';
import rightArrow from '../../assets/images/detail1_right_arrow.svg';
import littleBirdIcon from '../../assets/images/littlebird.svg';
// 直接导入视频文件，让Vite自动处理路径
import demoVideo from '../../assets/videos/demo1.mp4';

const Detail4 = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image sequence: poster -> h2 -> h4 -> h5 -> h3
  const images = [poster, posterH2, posterH4, posterH5, posterH3];

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
        <p className={styles.text3}>四时有茶-逆水寒主题奶茶店</p>
        <div className={styles.link} onClick={() => window.open('https://www.figma.com/proto/OmmkJmkbYG3TWwws7ObYwE/%E9%92%9F%E5%AD%90%E6%9C%9Fapp?page-id=0%3A1&node-id=257-3364&p=f&viewport=-674%2C-2401%2C0.97&t=ET9kyjde2r36L6CA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=257%3A3364', '_blank')} style={{cursor: 'pointer'}}>
          <img src={linkIcon} className={styles.vector2} alt="link" />
          <p className={styles.text4}>点击此处体验</p>
        </div>
      </div>
      <div className={styles.frame28531}>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>ui设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>周边设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>视觉传达设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>服务设计</p>
        </div>
      </div>
      <div className={styles.autoWrapper3}>
        <p className={styles.text6}>设计说明：</p>
        <p className={styles.text6}>手机端交互：</p>
      </div>
      <div className={styles.autoWrapper4}>
        <p className={styles.text7}>
          四时有茶是一家以逆水寒游戏为主题的奶茶店，融合了游戏元素与传统茶文化，打造沉浸式消费体验。
          整体视觉设计采用逆水寒游戏的中国风美学，结合四季主题，创造出春、夏、秋、冬四个系列的产品和空间设计。
          UI设计包括移动端点单系统、会员积分体系和主题活动页面，通过游戏化的交互方式增强用户粘性。
          周边设计涵盖了杯套、包装、徽章等产品，每一款都融入了游戏角色和场景元素。
          服务设计注重用户体验，从线上预约到线下消费，打造完整的品牌体验闭环。
        </p>
        <img src={qrCode} className={styles.image68} alt="qr code" />
      </div>
      <div className={styles.autoWrapper5}>
        <div className={styles.titleWrapper}>
          <p className={styles.text6}>视频演示：</p>
        </div>
        <video 
          className={styles.rectangle404} 
          controls 
          src={demoVideo}
          type="video/mp4"
          preload="metadata"
          onError={(e) => console.error('Video error:', e)}
          onLoadedMetadata={(e) => console.log('Video loaded metadata:', e.target.duration)}
        >
          Your browser does not support the video tag.
        </video>
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
      <div className={styles.autoWrapper9}>
        <p className={styles.text6}>作者：</p>
        <p className={styles.text9}>
          王昱心 浙江大学；李沛璇 浙江大学；涂清清 浙江大学
        </p>
      </div>
    </motion.div>
  );
};

export default Detail4;
