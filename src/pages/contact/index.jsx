import styles from './styles.module.css';
import Header from '../../components/header';
import t from '../../i18n/translate';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles['top-section']}>
        <div className={styles['home-container']}>
          <Header />
          {t('CONTACT')}
        </div>
      </div>
    </div>
  );
}

export default Home;
