import React from 'react';
import logoOk from '../images/ok.png';
import logoFail from '../images/fail.png';
function InfoTooltip({ isOpened, onClose, isSuccessInfoTooltipStatus }) {
  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <div>
          <img
            className='popup__img-info-tooltip'
            src={isSuccessInfoTooltipStatus ? logoOk : logoFail}
            alt={
              isSuccessInfoTooltipStatus
                ? 'Вы успешно зарегистрировались!'
                : 'Что-то пошло не так! Попробуйте ещё раз.'
            }
          />
          <p className='popup__text-info-tooltip'>
            {isSuccessInfoTooltipStatus
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </p>
        </div>

        <button type='button' onClick={onClose} className='popup__close-button opacity-button' />
      </div>
    </div>
  );
}

export default InfoTooltip;
