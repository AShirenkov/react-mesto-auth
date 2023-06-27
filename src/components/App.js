//import { useState } from 'react';
//import React from 'react';
import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useNavigate, Navigate } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

import Login from './Login';
import Register from './Register';

import ProtectedRoute from './ProtectedRoute';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';

import EditAvatarPopup from './EditAvatarPopup';

import AddPlacePopup from './AddPlacePopup';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [isLoggedIn, setLoggedIn] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .getMyUser()
      .then(values => {
        setCurrentUser(values);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    api
      .getInitialCards()
      .then(values => {
        setCards(values);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api
        .removeLike(card._id)
        .then(newCard => {
          setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .setLike(card._id)
        .then(newCard => {
          setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(setCards(cards => cards.filter(i => i._id !== card._id)))
      .catch(err => {
        console.log(err);
      });
  }

  function handleUpdateUser(objUser) {
    api
      .setUserInfo(objUser)
      .then(values => {
        setCurrentUser(values);
        //popupUserInfo.close();
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(objAvatar) {
    api
      .setUserAvatar(objAvatar)
      .then(values => {
        setCurrentUser(values);
        //popupUserAvatar.close();
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(objCard) {
    api
      .sendNewCard(objCard)
      .then(values => {
        setCards([values, ...cards]);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
    // .finally(() => {
    //   popupAddCard.toggleSubmitButtonDescription();
    // });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  function handleCardClick(card) {
    //console.log(card._id);
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute
                element={Main}
                isLoggedIn={isLoggedIn}
                onEditProfile={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditProfileClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                cards={cards}
              />
            }
          />

          <Route path='/sing-up' element={<Register />} />
          <Route path='/sing-in' element={<Login />} />

          <Route path='*' element={<Navigate to='/sing-in' replace />} />
        </Routes>

        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm name='remove-card' title='Вы уверены?' buttonName='Да' />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
