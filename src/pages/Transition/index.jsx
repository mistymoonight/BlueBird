import React from 'react';
import styles from './index.module.scss';

const Transition = () => {
  return (
    <div className={styles.transition}>
      <div className={styles.gradientBody}>
          <div className={styles.gridsContainer}>
            {[...Array(3)].map((_, gridIndex) => (
               <div className={styles.gridWrapper} key={gridIndex}>
                 <div className={styles.grid}>
                    {/* Rows */}
                    {[...Array(6)].map((_, row) => (
                       <div className={styles.row} key={row}>
                          {/* Columns */}
                          {[...Array(8)].map((_, col) => (
                              <div className={styles.dot} key={col} />
                          ))}
                       </div>
                    ))}
                 </div>
               </div>
            ))}
          </div>
      </div>
      
      <div className={styles.stepsContainer}>
         <div className={styles.step1}></div>
         <div className={styles.step2}></div>
         <div className={styles.step3}></div>
      </div>
    </div>
  );
}

export default Transition;
