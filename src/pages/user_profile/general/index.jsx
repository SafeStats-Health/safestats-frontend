import styles from './styles.module.css';
import t from '../../../i18n/translate';
import dummyImg from '../../../assets/images/dummy_img.png';

export default function General() {

  const usedData = JSON.parse(localStorage.getItem('login'));
  let userPlan, userBirthdate, userPhone, userDonatedBlood, userBloodType, userLegalRepresentative;

  usedData.user.healthPlan ? userPlan = usedData.user.healthPlan + ' - ' : userPlan = ''
  usedData.user.birthdate ? userBirthdate = usedData.user.birthdate + ' anos - ' : userBirthdate = ' '
  usedData.user.phone ? userPhone = usedData.user.phone + ' - ' : userPhone = ' '
  usedData.user.didDonateBlood ? userDonatedBlood = usedData.user.didDonateBlood + ', ' : userDonatedBlood = ' '
  usedData.user.bloodType ? userBloodType = usedData.user.bloodType + ' - ' : userBloodType = ' '
  usedData.user.legalRepresentative ? userLegalRepresentative = usedData.user.legalRepresentative : userLegalRepresentative = ''

  return (
    <div className={styles.general}>
      <div className={styles['user-data']}>
        <img src={dummyImg} alt="Dummy Img" className={styles['user-data-pic']}/>
        <span className={styles['user-data-name']}>{usedData.user.name}</span>
        <span className={styles['user-data-title']}>{t('SUMMARY_TITLE')}</span>
        <ul className={styles['user-data-info']}> 
          {
            user.healthPlanInstitution && <li><li>{t('HEALTH_PLAN')} {user.healthPlanInstitution} {user.healthPlanType} {user.healthPlanAccomodation}</li></li>
          }
          {
            user.age && <li>{user.age} {t('YEARS')}</li>
          }
          {
            user.didDonateBlood && <li>{t('DONATES_BLOOD')} {t('TYPE')} {user.bloodType}</li>
          }
          {
            user.legalRepresentative && <li>{t('LEGAL_REPRESENTATIVE')}: {user.legalRepresentative}</li>
          }
        </ul>
      </div>
    </div>
  );
}
