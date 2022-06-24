import {useEffect, useState} from 'react';
import styles from './styles.module.css';
import Drawer from '../../components/drawer';
import safeStats from '../../assets/images/safe_stats.svg';
import {useMediaQuery} from 'react-responsive';
import General from './general'
import PersonalData from './personal_data'
import TrustworthyContract from './trustworthy_contract'
import HealthPlan from './health_plan'
import BloodDonation from './blood_donation'
import ChangePassword from './change_password'
import DeleteAccount from './delete_account'
import Statistics from "./statistics";
import Configurations from './configurations'
import t from '../../i18n/translate';

export default function UserProfile() {

  const isMobile = useMediaQuery({query: `(max-width: 768px)`});
  const [selectedProfilePage, selectProfilePage] = useState();

  useEffect(() => {
    if (sessionStorage.getItem('password')) {
      selectProfilePage('DELETE_ACCOUNT');
    } else {
      selectProfilePage('GENERAL');
    }
  }, []);
  
  const profilePages = [
    {
      key: 'GENERAL',
      label: t('GENERAL'),
      component: <General />,
    },
    {
      key: 'PERSONAL_DATA',
      label: t('PERSONAL_DATA'),
      component: <PersonalData />,
    },
    {
      key: 'TRUSTWORTHY_CONTACT',
      label: t('TRUSTWORTHY_CONTACT'),
      component: <TrustworthyContract />,
    },
    {
      key: 'HEALTH_PLAN',
      label: t('HEALTH_PLAN'),
      component: <HealthPlan />,
    },
    {
      key: 'BLOOD_DONATION',
      label: t('BLOOD_DONATION'),
      component: <BloodDonation />,
    },
    {
      key: 'STATISTICS',
      label: t('STATISTICS'),
      component: <Statistics />,
    },
    {
      key: 'CHANGE_PASSWORD',
      label: t('CHANGE_PASSWORD'),
      component: <ChangePassword />,
    },
    {
      key: 'DELETE_ACCOUNT',
      label: t('DELETE_ACCOUNT'),
      component: <DeleteAccount />,
    },
    {
      key: 'CONFIGURATIONS',
      label: t('CONFIGURATIONS'),
      component: <Configurations />,
    },
  ];

  function selectedProfilePageComponent(param) {
    return profilePages.find(page => page.key === param).component;
  }

  return (
    <div className={styles['user-profile']}>
      <Drawer
        defaultOpen={!isMobile}
        selectOption={selectProfilePage}
        options={profilePages}
        defaultOption="GENERAL"
      />
      <div className={`${styles['content']} ${isMobile ? styles['absolute-content'] : ''}`}>
        {selectedProfilePageComponent(selectedProfilePage)}
        <img src={safeStats} alt="Safe Stats" className={styles.logo}/>
      </div>
    </div>
  );
}
