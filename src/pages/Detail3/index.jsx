import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
// Removed backArrow import
import linkIcon from '../../assets/images/detail1_link_icon.svg';
import qrCode from '../../assets/images/detail1_qr_code.png';
import leftArrow from '../../assets/images/detail1_left_arrow.png';
import leftArrowActive from '../../assets/images/detail1_right_arrow.svg'; // Reuse right arrow SVG for active state
// 导入新的界面展示图片
import poster3h2 from '../../assets/images/mk8mnk5b-717xs8s.png';
import poster3h3 from '../../assets/images/mk8mnk8e-mlhjeez.png';
import poster3h4 from '../../assets/images/mk8mnoz1-blwgagl.png';
import poster3h1 from '../../assets/images/mk8mnkd1-c1uh8y7.png';
import poster3h5 from '../../assets/images/mk8mnpq0-slgerse.png';
import rightArrow from '../../assets/images/detail1_right_arrow.svg';
import littleBirdIcon from '../../assets/images/littlebird.svg';
// 导入流程框架图片
import processFrameImg from '../../assets/images/mk8mkk9n-4t3ib4s.png';
// 直接导入视频文件，让Vite自动处理路径
import demoVideo from '../../assets/videos/demo3.mp4';

const Detail3 = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image sequence: 3h1 -> 3h2 -> 3h3 -> 3h4 -> 3h5
  const images = [poster3h1, poster3h2, poster3h3, poster3h4, poster3h5];

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
        <p className={styles.text3}>Healink-康复训练动作ai指导网站</p>
      </div>
      <div className={styles.frame28531}>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>ui设计</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>软件开发</p>
        </div>
        <div className={styles.rectangle401}>
          <p className={styles.text5}>微调大模型</p>
        </div>
      </div>
      <div className={styles.autoWrapper3}>
        <p className={styles.text6}>设计说明：</p>
      </div>
      <div className={styles.autoWrapper4}>
        <div>
          <p className={styles.text7}>
            人口老龄化加剧与肌骨问题高发推动康复需求攀升，家庭康复成为重要补充，但传统指导存在理解难、个性化不足、缺乏即时校正等痛点。为此，基于多模态技术的智能康复指导系统应运而生，融合计算机视觉与专业康复知识，覆盖家庭康复、术后管理等场景，已完成核心流程设计，具备落地基础。
            系统以“专业可落地、体验轻量化”为核心，构建从视频采集到可视化输出的完整闭环，适配居家用户、术后患者及康复师三类人群，支持居家碎片化训练视频上传与快速分析，助力康复师高效掌握用户居家训练情况。系统核心优势在于多模态技术驱动的精准分析与全链路自动化能力。通过整合视频动作识别与专业康复文本知识库，实现“看懂动作偏差、讲清纠正逻辑、生成个性化方案”的核心目标：首先通过开源视频分析模型提取用户动作姿态、角度、稳定性等关键特征，精准识别腰椎代偿、骨盆前倾等错误动作；再通过模型微调或检索增强生成（RAG）技术，结合康复指南、临床论文等专业知识，生成易懂、可执行的纠正建议；最终通过内容结构化模块与数字专家讲解模块，输出PPT结构化内容与数字人讲解视频，同步呈现动作对比图示、关键步骤标注等可视化信息，让用户直观理解偏差点与改进方向。
          </p>
          <div className={styles.sourceCodeWrapper}>
            <p className={styles.text6}>网站源代码：</p>
            <a href="https://github.com/mistymoonight/Healink.git" target="_blank" rel="noopener noreferrer" className={styles.sourceCodeLink}>
              https://github.com/mistymoonight/Healink.git
            </a>
          </div>
        </div>
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
      
      {/* 新增开发逻辑部分 */}
      <div className={styles.autoWrapperSmallCard}>
        <div className={styles.titleWrapper}>
          <p className={styles.text8}>开发逻辑：</p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={processFrameImg} className={styles.smallCard} alt="流程框架 1" />
        </div>
      </div>
      
      <div className={styles.autoWrapper8}>
        <div className={styles.autoWrapper6}>
          <p className={styles.text8}>界面展示：</p>
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
          王昱心 浙江大学；胡依琳 浙江大学；邓焱 浙江大学；杨鑫宇 浙江大学
        </p>
      </div>
    </motion.div>
  );
};

export default Detail3;
