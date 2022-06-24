import React from 'react';
import styles from './styles.module.css';
import CloseIcon from '../../assets/icons/close.svg'

export default function HospitalModal(props) {

  function close() {
    props.close();
  }

  return (
    <div className={styles['hospital-modal-container']}>
      <div className={styles['ballon-tip']} />
      <div className={`${styles['hospital-modal']} ${props.show ? styles.show : styles.hide}`}>
        <div className={styles.header}>
          <div className={styles['header-title']}>
            {`${props.hospital.name}`}
          </div>
          <div className={`${styles['close-icon-container']} ${styles.clickable}`} onClick={close} >
            <img src={CloseIcon} className={styles['close-icon']} />
          </div>
        </div>
        <div className={styles.body}>
          <ul>
            <li><strong>Leitos disponíveis:</strong> {props.hospital.beds.totalBeds}</li>
            <li><strong>Leitos totais:</strong> {props.hospital.beds.availableBeds}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
