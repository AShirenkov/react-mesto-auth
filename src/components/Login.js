import React from 'react';
import FormForAuth from './FormForAuth';
function Login({ onLogin }) {
  return (
    <div className='auth-form'>
      <FormForAuth name='login' title='Вход' buttonName='Войти' onSubmit={onLogin} />
    </div>
  );
}

export default Login;
