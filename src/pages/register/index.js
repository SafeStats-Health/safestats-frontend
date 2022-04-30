import './style.css';
import pose6 from '../../assets/images/pose_6.svg';
import safeStats from '../../assets/images/safe_stats.svg';
import { CreateUser } from '../../utils/api-request/user';

async function createUser() {
  await new CreateUser({ requestBody: { name: 'bruno' } }).request();
}

function Register() {
  return (
    <div className='Register'>
      <div className='register-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} />
        <img className='doctor-image' src={pose6} />
      </div>
      <div className='register-container'>
        <div className='register-form-div'>
          <div className='register-header'>
            <h3>
              não tem uma conta ainda?
              <br />
              cadastre-se agora mesmo
            </h3>
          </div>
          <form className='register-form'>
            <div className='register-input--div'>
              <label className='register-input--label' for='name'>
                nome
              </label>
              <input
                className='register-input'
                id='name'
                placeholder='ex.: joão silva'
              />
            </div>
            <div className='register-input--div'>
              <label className='register-input--label' for='email'>
                email
              </label>
              <input
                className='register-input'
                id='email'
                placeholder='ex.: joão@gmail.com'
              />
            </div>
            <div className='register-input--div'>
              <label className='register-input--label' for='email'>
                senha
              </label>
              <input
                className='register-input'
                id='senha'
                placeholder='••••••••••••'
              />
            </div>
            <button className='register-button' onClick={createUser}>
              cadastrar
            </button>
            <p className='account-text'>
              já possui uma conta? <a>clique aqui</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
