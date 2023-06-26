//import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name,
      link
    });
  }

  return (
    <PopupWithForm
      //title, name, children
      name='card'
      title='Новое место'
      buttonName='Создать'
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        required
        name='name'
        type='text'
        placeholder='Название'
        minLength='2'
        maxLength='30'
        className='popup__input-text popup__input-text_type_name-place'
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className='popup__input-text-error popup__input-text-error_type_name'>
        Вы пропустили это поле
      </span>
      <input
        required
        name='link'
        type='url'
        placeholder='Ссылка на картинку'
        className='popup__input-text popup__input-text_type_url-place'
        value={link || ''}
        onChange={handleChangeLink}
      />
      <span className='popup__input-text-error popup__input-text-error_type_link'>
        Введите адрес сайта
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
