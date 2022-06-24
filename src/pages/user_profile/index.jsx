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
      selectProfilePage(7);
    } else {
      selectProfilePage(0);
    }
  }, []);
  
  const profilePages = [
    {
      key: 'GENERAL',
      name: t('GENERAL'),
      component: <General />,
    },
    {
      key: 'PERSONAL_DATA',
      name: t('PERSONAL_DATA'),
      component: <PersonalData />,
    },
    {
      key: 'TRUSTWORTHY_CONTACT',
      name: t('TRUSTWORTHY_CONTACT'),
      component: <TrustworthyContract />,
    },
    {
      key: 'HEALTH_PLAN',
      name: t('HEALTH_PLAN'),
      component: <HealthPlan />,
    },
    {
      key: 'BLOOD_DONATION',
      name: t('BLOOD_DONATION'),
      component: <BloodDonation />,
    },
    {
      key: 'STATISTICS',
      name: t('STATISTICS'),
      component: <Statistics />,
    },
    {
      key: 'CHANGE_PASSWORD',
      name: t('CHANGE_PASSWORD'),
      component: <ChangePassword />,
    },
    {
      key: 'DELETE_ACCOUNT',
      name: t('DELETE_ACCOUNT'),
      component: <DeleteAccount />,
    },
    {
      key: 'CONFIGURATIONS',
      name: t('CONFIGURATIONS'),
      component: <Configurations />,
    },
  ];

  function selectedProfilePageComponent(param) {
    return profilePages.find((page, index) => index === param).component;
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
