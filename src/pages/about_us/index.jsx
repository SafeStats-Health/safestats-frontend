import styles from './styles.module.css';
import Header from '../../components/header';
import t from '../../i18n/translate';
import imgSobreNos from '../../assets/images/about_us/remedio.svg';

function AboutUs() {
  return (
    <div className={styles.home}>
      <div className={styles['top-section']}>
        <div className={styles['home-container']}>
          <Header />

          <div className={styles['contact-container']}>

            <div>
              <h1 className={styles['tituloSobreNos']}>{t('ABOUT_US_TITLE')}</h1>
              <p className={styles['fraseSobreNos']}>{t('ABOUT_US_SUBTITLE')}</p>
            </div>

            <div>
              <img className={styles['remedio']} src={imgSobreNos} />
            </div>
          </div>

          <div>
            <h5 className={styles['mvvTitulo']}>{t('ABOUT_US_MISSION_TITLE')}</h5>
            <p className={styles['mvvSubtitulo']}>{t('ABOUT_US_MISSION')}
            </p>
          </div>

          <div>
            <h5 className={styles['mvvTitulo']}>{t('ABOUT_US_VISION_TITLE')}</h5>
            <p className={styles['mvvSubtitulo']}>{t('ABOUT_US_VISION')}
            </p>
          </div>

          <div>
            <h5 className={styles['mvvTitulo']}>{t('ABOUT_US_VALUES_TITLE')}</h5>
            <p className={styles['mvvSubtitulo']}>{t('ABOUT_US_VALUES')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
