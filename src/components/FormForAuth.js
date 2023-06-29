import { useState } from 'react';
function FormForAuth({ title, name, buttonName, onSubmit }) {
  const [values, setValues] = useState({
    pass: '',
    email: ''
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(values);
  };
  return (
    <form name={`form-${name}`} onSubmit={handleSubmit}>
      <h2 className='auth-form__title'>{title}</h2>
      <div className='auth-form__inputs'>
        <input
          required
          name='email'
          type='email'
          placeholder='Email'
          minLength='5'
          maxLength='40'
          className='auth-form__input-text'
          value={values.email || ''}
          onChange={handleChange}
        />
        <input
          required
          name='pass'
          type='password'
          placeholder='Пароль'
          minLength='3'
          maxLength='10'
          className='auth-form__input-text'
          value={values.pass || ''}
          onChange={handleChange}
          autoComplete='off'
        />
      </div>

      <button type='submit' className='auth-form__save-button opacity-button'>
        {buttonName}
      </button>
    </form>
  );
}

export default FormForAuth;
