import {useState} from 'react';
import styles from './styles.module.css';
import Drawer from '../../components/drawer'
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

export default function UserProfile(props) {

  const isMobile = useMediaQuery({query: `(max-width: 768px)`});
  const [selectedProfilePage, selectProfilePage] = useState('GENERAL');

  function selectedProfilePageComponent(param) {
    switch (param) {
      case 'GENERAL':
        return <General/>;
      case 'PERSONAL_DATA':
        return <PersonalData/>;
      case 'TRUSTWORTHY_CONTACT':
        return <TrustworthyContract/>;
      case 'HEALTH_PLAN':
        return <HealthPlan/>;
      case 'BLOOD_DONATION':
        return <BloodDonation/>;
      case 'STATISTICS':
        return <Statistics/>;
      case 'CHANGE_PASSWORD':
        return <ChangePassword/>;
      case 'DELETE_ACCOUNT':
        return <DeleteAccount/>;
    }
  }

  return (
    <div className={styles['user-profile']}>
      <Drawer defaultOpen={!isMobile} selectProfilePage={selectProfilePage}/>
      <div className={`${styles['content']} ${isMobile ? styles['absolute-content'] : ''}`}>
        {selectedProfilePageComponent(selectedProfilePage)}
        <img src={safeStats} alt="Safe Stats" className={styles.logo}/>
      </div>
    </div>
  );
}
