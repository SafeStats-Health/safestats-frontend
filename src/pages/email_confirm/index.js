import styles from './styles.module.css';
import t from '../../i18n/translate';

export default function EmailConfirm() {
  return (
    <div>
      <div className={styles.text}>
        <span>{t('HELLO')}</span>
        <span>{t('EMAIL_MESSAGE')}</span>
      </div>
    </div>
  );
}
