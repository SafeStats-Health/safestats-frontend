import { Link } from 'react-router-dom';
import Case from '../../assets/images/landing_page/case.png';
import DoctorStethoscope from '../../assets/images/landing_page/doctor_stethoscope.png';
import Hologram from '../../assets/images/landing_page/hologram.png';
import Microscope from '../../assets/images/landing_page/microscope.png';
import MicroscopeCloseup from '../../assets/images/landing_page/microscope_closeup.png';
import Ome from '../../assets/images/landing_page/ome.png';
import Stethoscope from '../../assets/images/landing_page/stethoscope.png';
import CButton from '../../components/core/c_button';
import Header from '../../components/header';
import t from '../../i18n/translate';
import styles from './styles.module.css';

function LandingPage() {

  function goToRegister() {
    document.getElementById('registerLink').click();
  }

  return (
    <div className={styles['landing-page']}>
      <Link to='/register' id='registerLink' />
      <div className={styles['top-section']} >
        <div className={styles.ellipse} />
        <div className={styles['landing-page-container']}>
          <Header alt />
          <div className={styles['main-info']}>
            <div className={styles['main-text']}>
              <span className={styles['main-title']}>{t('TECH_FOR_THE_HEALTH')}</span>
              <div>
                <span className={styles['main-paragraph']}>{t('DO_YOU_WANT_SAFESTATS')}</span> <br/>
                <span className={styles['main-paragraph']}>{t('REGISTER_ITS_FREE')}</span>
              </div>
              <div className={styles['button']} style={{minWidth: '50%'}}>
                <CButton label={t('REGISTER_YOURSELF')} backgroundColor="#003A95" onClick={goToRegister} />
              </div>
            </div>
            <div className={styles['main-image']}>
              <img className={styles['img-ome']} src={Ome} />
              <img className={styles['img-hologram']} src={Hologram} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['bottom-section']} >
        <div className={styles['landing-page-container']}>
          <div className={styles.section}>
            <img
              className={styles['section-image']}
              src={MicroscopeCloseup}
            />
            <div className={styles['section-text']}>
              <span className={styles['section-title']}>{t('SAFESTATS_CLUB')} • {t('ONLINE_DISCOUNTS')}</span>
              <span className={styles['section-paragraph']}>{t('SAFESTATS_CLUB_DESC')}</span>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles['section-text']}>
              <span className={styles['section-title']}>{t('MATH')} • {t('MORE_ATTENTION_TO_HEALTH')}</span>
              <span className={styles['section-paragraph']}>{t('MATH_DESC')}</span>
            </div>
            <img
              className={styles['section-image']}
              src={DoctorStethoscope}
            />
          </div>
          <div className={styles['button']}><CButton label={t('REGISTER_YOURSELF')} backgroundColor="#003A95" onClick={goToRegister} /></div>
          <div className={styles['card-group']}>
            <div className={`${styles['card']} ${styles['card-blue']}`}>
              <img className={styles['card-image']} src={Microscope} />
              <span className={styles['card-text']}>{t('TEXT_MICROSCOPE')}</span>
            </div>
            <div className={`${styles['card']} ${styles['card-white']}`}>
              <img className={styles['card-image']} src={Case} />
              <span className={styles['card-text']}>{t('TEXT_CASE')}</span>
            </div>
            <div className={`${styles['card']} ${styles['card-blue']}`}>
              <img className={styles['card-image']} src={Stethoscope} />
              <span className={styles['card-text']}>{t('TEXT_STETHOSCOPE')}</span>
            </div>
          </div>
          <div className={styles['button']}><CButton label={t('REGISTER_YOURSELF')} backgroundColor="#003A95" onClick={goToRegister} /></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
