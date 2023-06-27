import React from 'react';
import { Link } from 'react-router-dom';
import FormForAuth from './FormForAuth';
function Register() {
  return (
    <div className='auth-form'>
      <FormForAuth
        //title, name, chilbuttonNamedren
        name='login'
        title='Регистрация'
        buttonName='Зарегистироваться'
        //isOpened={isOpen}
        //onClose={onClose}
        //onSubmit={handleSubmit}
      ></FormForAuth>
      <Link className='auth-form__link  opacity-button' to='/sing-in'>
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
