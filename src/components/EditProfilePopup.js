import PopupWithForm from './PopupWithForm';
import { useState, useEffect, useContext } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm
      name='profile'
      title='Редактировать профиль'
      buttonName='Сохранить'
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        required
        name='nameProfile'
        type='text'
        placeholder='Имя'
        minLength='2'
        maxLength='40'
        className='popup__input-text popup__input-text_type_name'
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className='popup__input-text-error popup__input-text-error_type_nameProfile'>111</span>
      <input
        required
        name='descriptionProfile'
        type='text'
        placeholder='Род деятельности'
        minLength='2'
        maxLength='200'
        className='popup__input-text popup__input-text_type_description'
        value={description || ''}
        onChange={handleChangeDescription}
      />
      <span className='popup__input-text-error popup__input-text-error_type_descriptionProfile'>
        111
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
