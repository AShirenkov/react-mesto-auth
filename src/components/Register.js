import React from 'react';
import FormForAuth from './FormForAuth';
import { Link } from 'react-router-dom';
function Register({ onRegister }) {
  return (
    <div className='auth-form'>
      <FormForAuth
        //title, name, chilbuttonNamedren
        name='login'
        title='Регистрация'
        buttonName='Зарегистироваться'
        //isOpened={isOpen}
        //onClose={onClose}
        onSubmit={onRegister}
      ></FormForAuth>
      <Link className='auth-form__link  opacity-button' to='/sing-in'>
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
