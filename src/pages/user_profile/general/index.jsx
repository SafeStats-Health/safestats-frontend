import styles from './styles.module.css';
import t from '../../../i18n/translate';
import dummyImg from '../../../assets/images/dummy_img.png';
import {useEffect} from "react";

function General() {
  let user = '';

  useEffect(() => {
    return () => {
      if (!user) {
        return
      }
      user = JSON.parse(localStorage.getItem('session'));
      let name = user.user.name
    }
  }, []);

  return (
    <div className={styles.general}>
      <div className={styles['user-data']}>
        <img src={dummyImg} alt="Dummy Img" className={styles['user-data-pic']}/>
        <span className={styles['user-data-name']}>{name}</span>
        <span className={styles['user-data-title']}>{t('SUMMARY_TITLE')}</span>
        <span className={styles['user-data-info']}>plano de saude unimed básico enfermaria - 22 anos, natural de curitiba - gênero feminino - doa sangue, tipo A+ - responsável legal marcos lemos</span>
      </div>
    </div>
  );
}

export default General;
