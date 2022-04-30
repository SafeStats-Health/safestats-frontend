import doctor from '../../assets/images/not_found_doctor.svg';
import ellipse from '../../assets/images/ellipse.svg';
import t from '../../i18n/translate';
import './style.css';

export default function NotFound() {
  return (
    <div>
      <span className='error'>{t('ERROR')}</span>
      <div>
        <span className='text'>{t('ERROR_MESSAGE')}</span>
      </div>
      <div className='img-pos-row'>
        <div className='img-pos-col'>
          <img className='doctor' src={doctor} alt='' />
          <img className='ellipse' src={ellipse} alt='' />
        </div>
      </div>
    </div>
  );
}
