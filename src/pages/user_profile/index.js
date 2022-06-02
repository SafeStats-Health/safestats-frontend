import * as React from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import Drawer from '../../components/drawer'
import safeStats from '../../assets/images/safe_stats.svg';
import dummyImg from '../../assets/images/dummy_img.png';

export default function UserProfile() {
  return (
    <div className={styles.pagePos}>
      <div>
        <Drawer></Drawer>
      </div>
      <div className={styles.userProfilePos}>
        <div className={styles.userProfile}>
          <img className={styles.dummyImg} src={dummyImg} alt="Dummy Img"/>
          <span className={styles.userName}>Lorem Ipsum</span>
          <span className={styles.summaryTitle}>{t('SUMMARY_TITLE')}</span>
          <span className={styles.summary}>Lorem Ipsum is simply dummy text</span>
        </div>
        <div className={styles.safeStats}>
          <img className={styles.safeStatsImg} src={safeStats} alt="Safe Stats"/>
        </div>
      </div>

    </div>
  );
}
