import React from 'react';
function PopupWithForm({ title, name, children, buttonName, isOpened, onClose, onSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${isOpened && 'popup_opened'}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{title}</h2>
        <form name={`form-${name}`} className='popup__edit-form' onSubmit={onSubmit}>
          {children}
          <button type='submit' className='popup__save-button opacity-button'>
            {buttonName}
          </button>
        </form>
        <button type='button' onClick={onClose} className='popup__close-button opacity-button' />
      </div>
    </div>
  );
}

export default PopupWithForm;
