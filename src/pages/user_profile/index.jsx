import { useState } from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import Drawer from '../../components/drawer'
import safeStats from '../../assets/images/safe_stats.svg';
import dummyImg from '../../assets/images/dummy_img.png';
import { useMediaQuery } from 'react-responsive';
import General from '../general'
import PersonalData from '../personal_data'
import TrustworthyContract from '../trustworthy_contract'
import HealthPlan from '../health_plan'
import BloodDonation from '../blood_donation'
import ChangePassword from '../change_password'
import DeleteAccount from '../delete_account'

export default function UserProfile(props) {

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [selectedProfilePage, selectProfilePage] = useState('GENERAL');

  function selectedProfilePageComponent() {
    switch (selectedProfilePage) {
      case 'GENERAL':
        console.log('SELECTING General')
        return <General />;
      case 'PERSONAL_DATA':
        console.log('SELECTING PersonalData')
        return <PersonalData />;
      case 'TRUSTWORTHY_CONTACT':
        console.log('SELECTING TrustworthyContract')
        return <TrustworthyContract />;
      case 'HEALTH_PLAN':
        console.log('SELECTING HealthPlan')
        return <HealthPlan />;
      case 'BLOOD_DONATION':
        console.log('SELECTING BloodDonation')
        return <BloodDonation />;
      case 'CHANGE_PASSWORD':
        console.log('SELECTING ChangePassword')
        return <ChangePassword />;
      case 'DELETE_ACCOUNT':
        console.log('SELECTING DeleteAccount')
        return <DeleteAccount />;
    }
  }

  return (
    <div className={styles['user-profile']}>
      <Drawer defaultOpen={!isMobile} selectProfilePage={selectProfilePage} />
      <div className={`${styles['content']} ${isMobile ? styles['absolute-content'] : ''}`}>
        {selectedProfilePageComponent}
        <div className={styles['user-data']}>
          <img src={dummyImg} alt="Dummy Img" className={styles['user-data-pic']} />
          <span className={styles['user-data-name']} >maria eduarda lemos</span>
          <span className={styles['user-data-title']} >{t('SUMMARY_TITLE')}</span>
          <span className={styles['user-data-info']} >plano de saude unimed básico enfermaria - 22 anos, natural de curitiba - gênero feminino - doa sangue, tipo A+ - responsável legal marcos lemos</span>
        </div>
        <img src={safeStats} alt="Safe Stats" className={styles.logo}/>
      </div>

    </div>
  );
}
