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
            {`${props.hospital.label}`}
          </div>
          <div className={`${styles['close-icon-container']} ${styles.clickable}`} onClick={close} >
            <img src={CloseIcon} className={styles['close-icon']} />
          </div>
        </div>
        <div className={styles.body}>
          <ul>
            <li><strong>fila:</strong> 10</li>
            <li><strong>médicos:</strong> 6</li>
            <li><strong>leitos enfermaria:</strong> 21 </li>
            <li><strong>leitos UTI:</strong> 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
