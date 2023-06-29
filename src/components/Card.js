import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `card__like opacity-button ${isLiked && 'card__like_active'}`;

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className='card'>
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className='card__img  opacity-button'
      />
      <h2 className='card__title'>{card.name}</h2>
      <div className='card__like-container'>
        <button type='button' className={cardLikeButtonClassName} onClick={handleLikeClick} />
        <p className='card__like-count'>{card.likes.length}</p>
      </div>

      {isOwn && (
        <button className='card__trash-button opacity-button' onClick={handleDeleteClick} />
      )}
    </div>
  );
}

export default Card;
