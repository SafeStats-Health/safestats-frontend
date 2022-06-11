import styles from './styles.module.css';
import leaveIcon from '../../../../assets/icons/leave.svg';
import userIcon from '../../../../assets/icons/user.svg';
import mapIcon from '../../../../assets/icons/map.svg';

function CMapPopup() {
  return (
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
  );
}

export default CMapPopup;