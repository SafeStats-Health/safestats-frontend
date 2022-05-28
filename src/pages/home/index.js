import { Link } from 'react-router-dom';
import Case from '../../assets/images/home/case.png';
import DoctorStethoscope from '../../assets/images/home/doctor_stethoscope.png';
import Hologram from '../../assets/images/home/hologram.png';
import Microscope from '../../assets/images/home/microscope.png';
import MicroscopeCloseup from '../../assets/images/home/microscope_closeup.png';
import Ome from '../../assets/images/home/ome.png';
import SafeStats from '../../assets/images/home/safe_stats.png';
import Stethoscope from '../../assets/images/home/stethoscope.png';
import User from '../../assets/images/home/user.png';
import t from '../../i18n/translate';
import styles from './styles.module.css';

function Home() {
  return (
    <div>
      <div class={styles.main}>
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
      </div>
      <img className={styles['img-ome']} src={Ome} />
      <img className={styles['img-hologram']} src={Hologram} />
      <img
        className={styles['img-microscope-closeup']}
        src={MicroscopeCloseup}
      />
      <img
        className={styles['img-doctor-stethoscope']}
        src={DoctorStethoscope}
      />
      <img className={styles['img-microscope']} src={Microscope} />
      <img className={styles['img-case']} src={Case} />
      <img className={styles['img-stethoscope']} src={Stethoscope} />
    </div>
  );
}

export default Home;
