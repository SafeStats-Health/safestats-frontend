import React from 'react';
import styles from './styles.module.css';
import CloseIcon from '../../assets/icons/close.svg'

export default function HospitalModal(props) {

  function close() {
    props.close();
  }

  return (
    <div className={`${styles['hospital-modal']} ${props.show ? styles.show : styles.hide} ${props.fullscreen ? 'fullscreen': ''}`}>
      <div className={styles['hospital-modal-header']}>
        <div>
          <span>{`hospital ${props.title}`}</span>
        </div>
        <div className={`${styles['close-icon-container']} ${styles.clickable}`} onClick={close} >
          <img src={CloseIcon} className={styles['close-icon']} />
        </div>
      </div>
    </div>
  );
}
