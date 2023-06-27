import React from 'react';
function FormForAuth({ title, name, buttonName }) {
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
          maxLength='40'
          className='auth-form__input-text'
          //value={name || ''}
          value=''
          //onChange={handleChangeName}
        />

        <input
          required
          name='password'
          type='password'
          placeholder='Пароль'
          minLength='2'
          maxLength='10'
          className='auth-form__input-text'
          // value={description || ''}
          value=''
          //onChange={handleChangeDescription}
        />
      </div>

      <button type='submit' className='auth-form__save-button opacity-button'>
        {buttonName}
      </button>
    </form>
  );
}

export default FormForAuth;
