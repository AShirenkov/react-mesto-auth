import React from 'react';
import FormForAuth from './FormForAuth';
function Login({ onLogin }) {
  return (
    <div className='auth-form'>
      <FormForAuth
        //title, name, chilbuttonNamedren
        name='login'
        title='Вход'
        buttonName='Войти'
        //isOpened={isOpen}
        //onClose={onClose}
        //onSubmit={handleSubmit}
        onSubmit={onLogin}
      ></FormForAuth>
    </div>
  );
}

export default Login;
