import ellipse from '../../assets/images/ellipse.svg';
import doctor from '../../assets/images/not_found_doctor.png';
import t from '../../i18n/translate';
import styles from './styles.module.css';

export default function NotFound() {
  return (
    <div>
      <span className={styles.error}>{t('ERROR')}</span>
      <div>
        <span className={styles.text}>{t('ERROR_MESSAGE')}</span>
      </div>
      <div className={styles.imgPosRow}>
        <div className={styles.imgPosCol}>
          <img className={styles.doctor} src={doctor} alt='' />
          <img className={styles.ellipse} src={ellipse} alt='' />
        </div>
      </div>
    </div>
  );
}
