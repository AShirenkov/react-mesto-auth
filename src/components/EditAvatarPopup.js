import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      //title, name, children
      name='avatar'
      title='Обновить аватар'
      buttonName='Сохранить'
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        required
        name='linkAvatar'
        type='url'
        placeholder='Ссылка на аватар'
        className='popup__input-text popup__input-text_type_link-Avatar'
        ref={avatarRef}
      />
      <span className='popup__input-text-error popup__input-text-error_type_linkAvatar'>
        Введите адрес картинки
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
