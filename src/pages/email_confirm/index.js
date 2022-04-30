import t from '../../i18n/translate';
import './style.css';

export default function EmailConfirm() {
  return (
    <div>
      <div className='text'>
        <span>{t('HELLO')}</span>
        <span>{t('EMAIL_MESSAGE')}</span>
      </div>
    </div>
  );
}
