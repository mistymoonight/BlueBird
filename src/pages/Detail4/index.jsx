import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
// Removed backArrow import
import linkIcon from '../../assets/images/detail1_link_icon.svg';
import qrCode from '../../assets/images/detail1_qr_code.png'; // 使用现有二维码图片
import leftArrow from '../../assets/images/detail1_left_arrow.png';
import leftArrowActive from '../../assets/images/detail1_right_arrow.svg'; // Reuse right arrow SVG for active state
// 导入四时有茶相关图片
import posterH1 from '../../assets/images/screenshot_1885_6551.png'; // h1
import posterH2 from '../../assets/images/screenshot_2080_6547.png'; // h2
import posterH3 from '../../assets/images/screenshot_2080_6550.png'; // h3
import posterH4 from '../../assets/images/screenshot_2080_6548.png'; // h4
import posterH5 from '../../assets/images/screenshot_2080_6551.png'; // h5
import posterH6 from '../../assets/images/screenshot_2080_6549.png'; // h6
import rightArrow from '../../assets/images/detail1_right_arrow.svg';
import littleBirdIcon from '../../assets/images/littlebird.svg';
// 直接导入视频文件，让Vite自动处理路径
import demoVideo from '../../assets/videos/demo4.mp4';
import layoutImage from '../../assets/images/screenshot_2080_6552.png';

// 导入周边设计图片
import z1Img from '../../assets/images/screenshot_1886_6565.png'; // 杯垫设计
import z2Img from '../../assets/images/screenshot_1887_6570.png'; // 杯套设计
import z3Img from '../../assets/images/screenshot_1887_6571.png'; // 小票设计
import z4Img from '../../assets/images/screenshot_1888_6576.png'; // 包装袋设计
import z5Img from '../../assets/images/screenshot_1889_6617.png'; // 小卡设计

// 导入现场展览图片
import x1Img from '../../assets/images/screenshot_1889_6619.png'; // 现场展览1
import x2Img from '../../assets/images/screenshot_1889_6620.png'; // 现场展览2
import x3Img from '../../assets/images/screenshot_1891_6633.png'; // 现场展览3
import x4Img from '../../assets/images/screenshot_1889_6618.png'; // 现场展览4
import x5Img from '../../assets/images/screenshot_1889_6623.png'; // 现场展览5

const Detail4 = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPeripheralIndex, setCurrentPeripheralIndex] = useState(0);
  const [currentExhibitionIndex, setCurrentExhibitionIndex] = useState(0);

  // Image sequence: h1 -> h2 -> h3 -> h4 -> h5 -> h6
  const images = [posterH1, posterH2, posterH3, posterH4, posterH5, posterH6];

  // Peripheral design data: text, image, z-index
  const peripherals = [
    { text: "杯垫设计", image: z1Img, z: "z1" },
    { text: "杯套设计", image: z2Img, z: "z2" },
    { text: "小票设计", image: z3Img, z: "z3" },
    { text: "包装袋设计", image: z4Img, z: "z4" },
    { text: "小卡设计", image: z5Img, z: "z5" }
  ];

  // Exhibition images data: text, image, x-index
  const exhibitions = [
    { text: "现场展览1", image: x1Img, x: "x1" },
    { text: "现场展览2", image: x4Img, x: "x4" },
    { text: "现场展览3", image: x2Img, x: "x2" },
    { text: "现场展览4", image: x5Img, x: "x5" },
    { text: "现场展览5", image: x3Img, x: "x3" }
  ];

  // Handle peripheral image navigation
  const handlePeripheralPrev = () => {
    setCurrentPeripheralIndex(prev => (prev === 0 ? peripherals.length - 1 : prev - 1));
  };

  const handlePeripheralNext = () => {
    setCurrentPeripheralIndex(prev => (prev === peripherals.length - 1 ? 0 : prev + 1));
  };

  // Handle exhibition image navigation
  const handleExhibitionPrev = () => {
    setCurrentExhibitionIndex(prev => (prev === 0 ? exhibitions.length - 1 : prev - 1));
  };

  const handleExhibitionNext = () => {
    setCurrentExhibitionIndex(prev => (prev === exhibitions.length - 1 ? 0 : prev + 1));
  };

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
        <div className={styles.link} onClick={() => window.open('https://www.figma.com/proto/8BTacUBIY9YzxPQTQiJBEK/%E9%80%86%E6%B0%B4%E5%AF%92%E5%B0%8F%E7%A8%8B%E5%BA%8F?page-id=0%3A1&node-id=115-2262&p=f&viewport=477%2C284%2C0.03&t=edsNxXTUDyT1MHVh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=114%3A1638', '_blank')} style={{cursor: 'pointer'}}>
          <img src={linkIcon} className={styles.vector2} alt="link" />
          <p className={styles.text4}>点击此处体验</p>
        </div>
      </div>
      <div className={styles.frame28531}>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>ui设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>视觉传达设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>周边设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>服务设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>服务与创新设计优秀结课作业</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>网易雷火联合课程优秀展览项目</p>
        </div>
      </div>
      <div className={styles.autoWrapper3}>
        <p className={styles.text6}>设计说明：</p>
        <p className={styles.text6}>手机端交互：</p>
      </div>
      <div className={styles.autoWrapper4}>
        <p className={styles.text7}>
          四时有茶是一个逆水寒奶茶联名小程序，它从《逆水寒》"会呼吸的江湖"中提取四季意境——三清山的春桃、虹桥的夏竹、磁州的秋枫、昆仑的冬雪，化作可交互的饮茶体验。
          它用游戏场景构建四季脉络：春界面复刻素问门派落英缤纷的治愈感，夏页面还原玄机机关城流水潺潺的清凉，秋屏幕呈现铁衣盟金戈铁马的炽热，冬场景重塑碎梦阁雪落无声的寂美。
          在视觉设计上，小程序将《逆水寒》标志性的江湖元素融入四季场景：
          春界面呈现三清山桃林盛景，夏页面青竹掩映间可见玄机机关城的光影，秋屏幕展现铁衣盟驻地风貌的枫红底色，冬场景还原若隐若现的昆仑雪境。
          每个季节界面都精心融入了标志性元素，让玩家在喝茶时也能穿越逆水寒的四季江湖，体会大宋时光流转的诗意。
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
      
      {/* 插入空间布局小标题和奶茶店布局图 */}
      <div className={styles.autoWrapper3}>
        <p className={styles.text6}>空间布局：</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '10px 0 30px' }}>
        <img src={layoutImage} className={styles.layoutImage} alt="奶茶店布局图" />
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
      {/* 周边展示部分 */}
      <div className={styles.autoWrapper3}>
        <p className={styles.text6}>周边展示：</p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '20px 0 40px', width: '100%' }}>
        {/* 周边设计文字描述 - 确保居中 */}
        <p style={{ 
          fontFamily: "Alimama FangYuanTi VF, PingFang SC, sans-serif", 
          fontSize: "20px", 
          fontWeight: "bold",
          color: "#000000",
          opacity: 0.5,
          marginBottom: "20px",
          textAlign: "center",
          width: "100%"
        }}>
          {peripherals[currentPeripheralIndex].text}
        </p>
        
        {/* 周边图片展示和切换 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {/* 左侧切换按钮 - 保持位置不变 */}
          <svg 
            onClick={handlePeripheralPrev}
            style={{ 
              width: "44px", 
              height: "76px", 
              cursor: "pointer",
              marginRight: "200px",
              marginBottom: "100px",
              transform: "rotate(180deg)",
              position: "relative"
            }}
            viewBox="0 0 44 76" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.0158 33.071L10.6994 1.75295C9.50399 0.610621 7.90895 -0.0184308 6.25561 0.000411394C4.60227 0.0192536 3.02198 0.684492 1.85293 1.85376C0.683876 3.02304 0.0189317 4.60345 0.000398031 6.25679C-0.0181356 7.91014 0.611213 9.50506 1.75376 10.7002L28.599 37.5438L1.75209 64.384C0.617082 65.5806 -0.00587848 67.1731 0.0159013 68.8223C0.0376811 70.4714 0.70248 72.0468 1.8687 73.2131C3.03491 74.3793 4.61037 75.0441 6.25951 75.0659C7.90864 75.0876 9.50111 74.4647 10.6977 73.3297L42.0158 42.0183C42.6037 41.4311 43.0702 40.7337 43.3884 39.9661C43.7067 39.1985 43.8705 38.3756 43.8705 37.5446C43.8705 36.7137 43.7067 35.8908 43.3884 35.1232C43.0702 34.3556 42.6037 33.6582 42.0158 33.071Z" fill="#57C5E2"/>
          </svg>
          
          {/* 周边图片 - 固定大小容器，确保所有图片中心点一致 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* 固定大小的图片容器，确保所有图片中心点位置一致 */}
            <div style={{ 
              width: '780px', 
              height: '413px',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '20px',
              backgroundColor: 'transparent',
              position: 'relative'
            }}>
              <img 
                src={peripherals[currentPeripheralIndex].image} 
                alt={peripherals[currentPeripheralIndex].text} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }} 
              />
            </div>
            
            {/* 页码显示 - 保持位置不变 */}
            <p style={{ 
              fontFamily: "Alimama FangYuanTi VF, PingFang SC, sans-serif", 
              fontSize: "18px", 
              fontWeight: "bold",
              color: "#000000",
              textAlign: "center",
              position: "relative"
            }}>
              {currentPeripheralIndex + 1}/{peripherals.length}
            </p>
          </div>
          
          {/* 右侧切换按钮 - 保持位置不变 */}
          <svg 
            onClick={handlePeripheralNext}
            style={{ 
              width: "44px", 
              height: "76px", 
              cursor: "pointer",
              marginLeft: "200px",
              marginBottom: "100px",
              position: "relative"
            }}
            viewBox="0 0 44 76" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.0158 33.071L10.6994 1.75295C9.50399 0.610621 7.90895 -0.0184308 6.25561 0.000411394C4.60227 0.0192536 3.02198 0.684492 1.85293 1.85376C0.683876 3.02304 0.0189317 4.60345 0.000398031 6.25679C-0.0181356 7.91014 0.611213 9.50506 1.75376 10.7002L28.599 37.5438L1.75209 64.384C0.617082 65.5806 -0.00587848 67.1731 0.0159013 68.8223C0.0376811 70.4714 0.70248 72.0468 1.8687 73.2131C3.03491 74.3793 4.61037 75.0441 6.25951 75.0659C7.90864 75.0876 9.50111 74.4647 10.6977 73.3297L42.0158 42.0183C42.6037 41.4311 43.0702 40.7337 43.3884 39.9661C43.7067 39.1985 43.8705 38.3756 43.8705 37.5446C43.8705 36.7137 43.7067 35.8908 43.3884 35.1232C43.0702 34.3556 42.6037 33.6582 42.0158 33.071Z" fill="#57C5E2"/>
          </svg>
        </div>
      </div>

      {/* 现场展览部分 */}
      <div className={styles.autoWrapper3}>
        <p className={styles.text6}>现场展览：</p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '20px 0 40px', width: '100%' }}>
        
        {/* 现场展览图片展示和切换 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {/* 左侧切换按钮 - 保持位置不变 */}
          <svg 
            onClick={handleExhibitionPrev}
            style={{ 
              width: "44px", 
              height: "76px", 
              cursor: "pointer",
              marginRight: "200px",
              marginBottom: "100px",
              transform: "rotate(180deg)",
              position: "relative"
            }}
            viewBox="0 0 44 76" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.0158 33.071L10.6994 1.75295C9.50399 0.610621 7.90895 -0.0184308 6.25561 0.000411394C4.60227 0.0192536 3.02198 0.684492 1.85293 1.85376C0.683876 3.02304 0.0189317 4.60345 0.000398031 6.25679C-0.0181356 7.91014 0.611213 9.50506 1.75376 10.7002L28.599 37.5438L1.75209 64.384C0.617082 65.5806 -0.00587848 67.1731 0.0159013 68.8223C0.0376811 70.4714 0.70248 72.0468 1.8687 73.2131C3.03491 74.3793 4.61037 75.0441 6.25951 75.0659C7.90864 75.0876 9.50111 74.4647 10.6977 73.3297L42.0158 42.0183C42.6037 41.4311 43.0702 40.7337 43.3884 39.9661C43.7067 39.1985 43.8705 38.3756 43.8705 37.5446C43.8705 36.7137 43.7067 35.8908 43.3884 35.1232C43.0702 34.3556 42.6037 33.6582 42.0158 33.071Z" fill="#57C5E2"/>
          </svg>
          
          {/* 现场展览图片 - 固定大小容器，确保所有图片中心点一致 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* 固定大小的图片容器，确保所有图片中心点位置一致 */}
            <div style={{ 
              width: '780px', 
              height: '413px',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '20px',
              backgroundColor: 'transparent',
              position: 'relative'
            }}>
              <img 
                src={exhibitions[currentExhibitionIndex].image} 
                alt={exhibitions[currentExhibitionIndex].text} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }} 
              />
            </div>
            
            {/* 页码显示 - 保持位置不变 */}
            <p style={{ 
              fontFamily: "Alimama FangYuanTi VF, PingFang SC, sans-serif", 
              fontSize: "18px", 
              fontWeight: "bold",
              color: "#000000",
              textAlign: "center",
              position: "relative"
            }}>
              {currentExhibitionIndex + 1}/{exhibitions.length}
            </p>
          </div>
          
          {/* 右侧切换按钮 - 保持位置不变 */}
          <svg 
            onClick={handleExhibitionNext}
            style={{ 
              width: "44px", 
              height: "76px", 
              cursor: "pointer",
              marginLeft: "200px",
              marginBottom: "100px",
              position: "relative"
            }}
            viewBox="0 0 44 76" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.0158 33.071L10.6994 1.75295C9.50399 0.610621 7.90895 -0.0184308 6.25561 0.000411394C4.60227 0.0192536 3.02198 0.684492 1.85293 1.85376C0.683876 3.02304 0.0189317 4.60345 0.000398031 6.25679C-0.0181356 7.91014 0.611213 9.50506 1.75376 10.7002L28.599 37.5438L1.75209 64.384C0.617082 65.5806 -0.00587848 67.1731 0.0159013 68.8223C0.0376811 70.4714 0.70248 72.0468 1.8687 73.2131C3.03491 74.3793 4.61037 75.0441 6.25951 75.0659C7.90864 75.0876 9.50111 74.4647 10.6977 73.3297L42.0158 42.0183C42.6037 41.4311 43.0702 40.7337 43.3884 39.9661C43.7067 39.1985 43.8705 38.3756 43.8705 37.5446C43.8705 36.7137 43.7067 35.8908 43.3884 35.1232C43.0702 34.3556 42.6037 33.6582 42.0158 33.071Z" fill="#57C5E2"/>
          </svg>
        </div>
      </div>

      <div className={styles.autoWrapper9}>
        <p className={styles.text6}>作者：</p>
        <p className={styles.text9}>
          王昱心 浙江大学；许俊祥 浙江大学；胡依琳 浙江大学；李昕然 浙江大学；李昊喆 浙江大学
        </p>
      </div>
    </motion.div>
  );
};

export default Detail4;
