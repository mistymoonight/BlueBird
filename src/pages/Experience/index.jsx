import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.scss';
import birdVector from '../../assets/images/mjos80jw-v54uf3y.svg';
import decorateVector from '../../assets/images/mjomy9ov-0wyd26s.svg';
import Gallery from '../Gallery';

const DotsGrid = ({ rows = 6, cols = 8 }) => (
    <div className={styles.dotsGrid}>
        {[...Array(rows)].map((_, i) => (
            <div className={styles.dotsRow} key={i}>
                {[...Array(cols)].map((_, j) => (
                    <div className={styles.dot} key={j} />
                ))}
            </div>
        ))}
    </div>
);

const Bubbles = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const type = Math.random() > 0.5 ? 'cyan' : 'white';
            const sizeBase = type === 'cyan' ? 24 : 14;
            const size = sizeBase * (0.8 + Math.random() * 0.4); 
            const left = Math.random() * 80 + 10; 
            const duration = 3 + Math.random() * 4; 
            
            setBubbles(prev => [...prev, { id, type, size, left, duration }]);

            setTimeout(() => {
                setBubbles(prev => prev.filter(b => b.id !== id));
            }, (duration + 0.5) * 1000);

        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.bubbleContainer}>
            {bubbles.map(b => (
                <div
                    key={b.id}
                    className={`${styles.bubble} ${b.type === 'cyan' ? styles.cyanBubble : styles.whiteBubble}`}
                    style={{
                        width: `${b.size}px`,
                        height: `${b.size}px`,
                        left: `${b.left}%`,
                        animationDuration: `${b.duration}s`,
                    }}
                />
            ))}
        </div>
    );
};

const Experience = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const galleryTop = galleryRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // If Gallery is roughly in view (e.g. top 1/3 of screen or higher)
        if (galleryTop < windowHeight * 0.5) {
          setActiveSection('gallery');
        } else {
          setActiveSection('experience');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.experience}>
      <div className={styles.autoWrapper4}>

        <p className={styles.mainTitle}>个人经历</p>
        
        <div className={styles.contentContainer}>
            {/* Left Decorative Circles */}
            <div className={styles.leftDecor}>
                <img src={birdVector} className={styles.vector} alt="bird" />
                <div className={styles.circles}>
                    <div className={styles.ring} />
                    <div className={styles.ring} />
                    <div className={styles.ring} />
                    <div className={styles.ring} />
                    <div className={styles.ring} />
                </div>
            </div>

            <div className={styles.columnsWrapper}>
                {/* Left Column Group: Study & Research */}
                <div className={styles.leftColumn}>
                    {/* STUDY Section */}
                    <div className={styles.sectionBlock}>
                        <div className={styles.headerGroup}>
                            <h2 className={styles.sectionTitle}>Study</h2>
                            <DotsGrid />
                        </div>
                        
                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>浙江大学工业设计</span>
                                <span className={styles.pipe}>|</span>
                                <span>本科</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>荣誉：优秀学生、优秀团员、学业优秀标兵、文体活动标兵、<br/>创新创业标兵、对外交流标兵、积加实践奖学金</li>
                            </ul>
                        </div>

                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>韩国延世大学（QS前50）</span>
                                <span className={styles.pipe}>|</span>
                                <span>国际交流</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>参加亚洲工作坊获得优秀结业证书，完成跨文化学习与国际协作课题研究</li>
                            </ul>
                        </div>
                    </div>

                    {/* RESEARCH Section */}
                    <div className={styles.sectionBlock}>
                        <div className={styles.headerGroup}>
                            <h2 className={styles.sectionTitle}>Research</h2>
                            <DotsGrid />
                        </div>

                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>科研实践项目</span>
                                <span className={styles.pipe}>|</span>
                                <span>SRTP</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>国创级SRTP科研项目：基于图像识别的细菌耐药进化检测方法</li>
                                <li>院级SRTP项目：大模型支持的技术驱动创新方法与工具</li>
                            </ul>
                        </div>

                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>启真问学第三期人才培养计划</span>
                                <span className={styles.pipe}>|</span>
                                <span>联络员</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>环境与资源学院跨学科联合培养</li>
                                <li>发明专利（已受理）第四作者</li>
                            </ul>
                        </div>

                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>iciLab实验室</span>
                                <span className={styles.pipe}>|</span>
                                <span>实习</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>研究课题：Understanding Design Fixation in Generative Artificial Intelligence《理解生成式人工智能中的设计定势》</li>
                                <li>实验室科研实践：协助开展实验、论文写作、数据管理</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column Group: Work */}
                <div className={styles.rightColumn}>
                    <div className={styles.sectionBlock}>
                        <div className={styles.headerGroup}>
                            <h2 className={styles.sectionTitle}>Work</h2>
                            <DotsGrid rows={10} cols={8} />
                        </div>

                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>浙江大学融媒体中心学生记者团</span>
                                <span className={styles.pipe}>|</span>
                                <span>视创中心智设部</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>设计浙江大学新生迎新信封（全体大一新生发放）</li>
                                <li>设计浙大毕业季明信片</li>
                                <li>海报设计及小红书运营</li>
                            </ul>
                        </div>

                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>浙江大学学生宿舍中心微信公众号</span>
                                <span className={styles.pipe}>|</span>
                                <span>运营助理</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>绘制浙江大学学生宿舍官微漫画插画</li>
                                <li>浙江大学、浙江中医药大学、浙江警官学院2026宿舍新年台历设计</li>
                            </ul>
                        </div>

                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>浙江大学党委宣传部</span>
                                <span className={styles.pipe}>|</span>
                                <span>网络信息辅助岗</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>参与校内活动宣传信息处理</li>
                            </ul>
                        </div>

                        <div className={styles.itemGroup}>
                            <div className={styles.itemTitle}>
                                <span>浙江大学学生排球社</span>
                                <span className={styles.pipe}>|</span>
                                <span>技术部副部长</span>
                            </div>
                            <ul className={styles.itemDesc}>
                                <li>负责训练组织、活动技术支持、赛事协调、社团运营</li>
                                <li>校运会女子跳高 第二名</li>
                                <li>三好杯跆拳道混双 第五名</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <img src={decorateVector} className={styles.decorate} alt="decoration" />
        </div>
        <Bubbles />
      </div>
      <div ref={galleryRef}>
        <Gallery activeSection={activeSection} />
      </div>
    </div>
  );
}

export default Experience;