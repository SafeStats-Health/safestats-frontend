import { Link } from 'react-router-dom';
import Case from '../../assets/images/home/case.png';
import DoctorStethoscope from '../../assets/images/home/doctor_stethoscope.png';
import Hologram from '../../assets/images/home/hologram.png';
import Microscope from '../../assets/images/home/microscope.png';
import MicroscopeCloseup from '../../assets/images/home/microscope_closeup.png';
import Ome from '../../assets/images/home/ome.png';
import SafeStats from '../../assets/images/home/safe_stats_alt.png';
import Stethoscope from '../../assets/images/home/stethoscope.png';
import User from '../../assets/images/home/user.png';
import t from '../../i18n/translate';
import styles from './styles.module.css';
import CButton from '../../components/core/c_button'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles['top-section']}>
        <div className={styles.ellipse} />
        <div className={styles['home-container']}>
          <div className={styles.header}>
            <img className={styles['img-safe-stats']} src={SafeStats} />
            <div className={styles.links}>
              <Link to='/login' className=''>
                {t('ABOUT_US')}
              </Link>
              <Link to='/login' className=''>
                {t('CONTACT')}
              </Link>
              <Link to='/login' className=''>
                {t('REGISTER')}
              </Link>
              <img className={styles['img-user']} src={User} />
            </div>
          </div>
          <div className={styles['main-info']}>
            <div className={styles['main-text']}>
              <span className={styles['main-title']}>{t('TECH_FOR_THE_HEALTH')}</span>
              <div>
                <span className={styles['main-paragraph']}>{t('DO_YOU_WANT_SAFESTATS')}</span>
                <span className={styles['main-paragraph']}>{t('REGISTER_ITS_FREE')}</span>
              </div>
              <div className={styles['button']} style={{minWidth: '50%'}}>
                <CButton label={t('REGISTER_YOURSELF')} backgroundColor="#003A95" />
              </div>
            </div>
            <div className={styles['main-image']}>
              <img className={styles['img-ome']} src={Ome} />
              <img className={styles['img-hologram']} src={Hologram} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['bottom-section']}>
        <div className={styles['home-container']}>
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
          <div className={styles['button']}><CButton label={t('REGISTER_YOURSELF')} backgroundColor="#003A95" /></div>
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
          <div className={styles['button']}><CButton label={t('REGISTER_YOURSELF')} backgroundColor="#003A95" /></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
