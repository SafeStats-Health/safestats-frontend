import React, { Component } from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import CMap from '../../components/core/c_map';
import CInput from '../../components/core/c_input';
import CButton from '../../components/core/c_button';
import logo from '../../assets/images/safe_stats_alt.svg';
import leaveIcon from '../../assets/icons/leave.svg';
import userIcon from '../../assets/icons/user.svg';
import mapIcon from '../../assets/icons/map.svg';

class Map extends Component {

  render() {
    return (
      <div className={styles['map-container']}>
        <CMap />
        <div className={styles['options-box']}>
          <div className={`${styles['icon-container']} ${styles.clickable}`}>
            <img className={styles['map-icon']} src={mapIcon} />
          </div>
          <div className={`${styles['icon-container']} ${styles.clickable}`}>
            <img className={styles['user-icon']} src={userIcon} />
          </div>
          <div className={`${styles['icon-container']} ${styles.clickable}`}>
            <img className={styles['leave-icon']} src={leaveIcon} />
          </div>
        </div>
        <div className={styles['search-box']}>
          <div className={styles['logo-box']}>
            <img className={styles.logo} src={logo} />
          </div>
          <div className={styles['search-box-form']}>
            <CInput
              inverse
              id='hospital'
              label={t('HOSPITAL')}
              placeholder='ex.: hospital pequeno príncipe'
            />
            <CInput
              inverse
              id='district'
              label={t('DISTRICT')}
              placeholder='ex.: água verde'
            />
            <div className={styles['search-button']}>
              <CButton inverse label={t('GO')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
