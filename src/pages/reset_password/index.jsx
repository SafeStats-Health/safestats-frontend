import pose2 from '../../assets/images/pose_2.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';

function ResetPassword() {
  return (
    <div className='Auth'>
      <div className='auth-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} />
        <img className='doctor-image' src={pose2} />
      </div>
      <div className='auth-container'>
        <div className='auth-form-div'>
          <div className='auth-header'>
            <h3>
           { t('IT_SEEMS_THAT_YOU_FORGOT_YOUR_PASSWORD') }
            </h3>
          </div>
          <form className='auth-form'>
            <div className='auth-input--div'>
              <CInput
                id='password'
                label={t('NEW_PASSWORD')}
                placeholder='••••••••••••'
                type='password'
              />
            </div>
            <div className='auth-input--div'>
              <CInput
                id='password'
                label={t('REPEAT_YOUR_PASSWORD')}
                placeholder='••••••••••••'
                type='password'
              />
            </div>
            <CButton label={t('CHANGE_PASSWORD')} type='button' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
