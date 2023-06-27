//import React from 'react';
import { useState } from 'react';
function FormForAuth({ title, name, buttonName }) {
  const [values, setValues] = useState({
    email: '',
    pass: ''
  });
  const [errorText, setSetErrorText] = useState('');
  const handleChange = evt => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = evt => {
    evt.preventDefault();
  };
  return (
    <form name={`form-${name}`}>
      <h2 className='auth-form__title'>{title}</h2>
      <div className='auth-form__inputs'>
        <input
          required
          name='email'
          type='email'
          placeholder='Email'
          minLength='2'
          maxLength='10'
          className='auth-form__input-text'
          value={values.email || ''}
          onChange={handleChange}
        />
        <input
          required
          name='pass'
          type='password'
          placeholder='Пароль'
          minLength='2'
          maxLength='10'
          className='auth-form__input-text'
          value={values.pass || ''}
          onChange={handleChange}
          autoComplete='off'
        />
      </div>
      <h2 className='auth-form__title'>{errorText}</h2>
      <button type='submit' className='auth-form__save-button opacity-button'>
        {buttonName}
      </button>
    </form>
  );
}

export default FormForAuth;
