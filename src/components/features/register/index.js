import './style.css';
import pose6 from '../../../assets/images/pose_6.svg';
import safeStats from '../../../assets/images/safe_stats.svg';
import validator from 'validator';
import { useState } from 'react';

function Register() {
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstPassword, setFirstPassword] = useState('');
  const [matchPasswords, setMatchPasswords] = useState('');
  function matchPassowrdsValidate(firstPassword, passwordConfirm) {
    if (password.length > 0 && firstPassword !== passwordConfirm) {
      setMatchPasswords('Senhas não conferem');
    } else {
      setMatchPasswords('');
    }
  }
  function validateName(name) {
    if (name.length === 0 || name.length >= 5) {
      setNameError('');
    } else {
      setNameError('Mínimo de 5 caracteres');
    }
  }
  function validateEmail(email) {
    if (email.length === 0 || validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('E-mail inválido');
    }
  }
  function validatePassword(password) {
    setFirstPassword(password);
    if (password.length === 0 || password.length >= 8) {
      setPasswordError('');
      matchPassowrdsValidate(firstPassword, password);
    } else {
      setPasswordError('Mínimo de 8 caracteres');
    }
  }

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
              <label className='register-input--label' htmlFor='name'>
                nome
              </label>

              <input
                onInput={({ target: { value } }) => validateName(value)}
                className='register-input'
                id='name'
                placeholder='ex.: joão silva'
              />
              <p className='simple-text input-error'>{nameError}</p>
            </div>
            <div className='register-input--div'>
              <label className='register-input--label' htmlFor='email'>
                email
              </label>
              <input
                onInput={({ target: { value } }) => validateEmail(value)}
                className='register-input'
                id='email'
                placeholder='ex.: joão@gmail.com'
              />
              <p className='simple-text input-error'>{emailError}</p>
            </div>
            <div className='register-input--div'>
              <label className='register-input--label' htmlFor='email'>
                senha
              </label>
              <input
                onInput={({ target: { value } }) => validatePassword(value)}
                className='register-input'
                id='senha'
                type='password'
                placeholder='••••••••••••'
              />
              <p className='simple-text input-error'>{passwordError}</p>
            </div>
            <div className='register-input--div'>
              <label className='register-input--label' htmlFor='email'>
                confirmar senha
              </label>
              <input
                onInput={({ target: { value } }) =>
                  matchPassowrdsValidate(value, password)
                }
                className='register-input'
                id='senha'
                type='password'
                placeholder='••••••••••••'
              />
              <p className='simple-text input-error'>{matchPasswords}</p>
            </div>
            <button className='register-button'>cadastrar</button>
            <p className='simple-text'>
              já possui uma conta? <a>clique aqui</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
