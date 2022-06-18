import styles from './styles.module.css';
import Header from '../../components/header';
import t from '../../i18n/translate';
import imgContato from '../../assets/images/contact/mulherContato.svg';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles['top-section']}>
        <div className={styles['home-container']}>
          <Header />

          <div className={styles['contact-container']}>

            <div>
              <h1 className={styles['tituloContato']}>{t('CONTACT_TITLE')}</h1>
              <p className={styles['fraseContato']}>{t('CONTACT_SUBTITLE')}</p>
            </div>

            <div>
              <img className={styles['mocaContato']} src={imgContato} />
            </div>
          </div>

          <div>
            <h5 className={styles['dadosContatoTitulo']}> {t('CONTACT_PHONE_TITLE')}</h5>
            <p className={styles['dadosContatoSubtitulo']}>{t('CONTACT_PHONE_NUMBER')}</p> 
          </div>

          <div>
            <h5 className={styles['dadosContatoTitulo']}>{t('CONTACT_SOCIALMEDIA_TITLE')}</h5>
            <p className={styles['dadosContatoSubtitulo']}>{t('CONTACT_SOCIALMEDIA_SUBTITLE')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
