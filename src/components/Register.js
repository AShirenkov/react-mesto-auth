import React from 'react';
import FormForAuth from './FormForAuth';
import { Link } from 'react-router-dom';
function Register({ onRegister }) {
  return (
    <div className='auth-form'>
      <FormForAuth
        name='login'
        title='Регистрация'
        buttonName='Зарегистироваться'
        onSubmit={onRegister}
      />
      <Link className='auth-form__link  opacity-button' to='/sing-in'>
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
