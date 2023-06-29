import React from 'react';
function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_img popup_background-color_black-09 ${
        card.name ? 'popup_opened' : ''
      }`}
    >
      <div className='popup__img-container'>
        <img src={card.link} alt={card.name} className='popup__card-img' />
        <p className='popup__text-img '>{card.name}</p>

        <button type='button' onClick={onClose} className='popup__close-button opacity-button' />
      </div>
    </div>
  );
}

export default ImagePopup;
