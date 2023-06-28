import logo from '../images/logo.svg';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function Header({ onLogout, isLoggedIn, currentEmail }) {
  const location = useLocation();
  //console.log(onLogout);
  return (
    <header className='header'>
      <img src={logo} alt='Лого Место Россия' className='header__logo' />
      <ul className='header__navi'>
        {isLoggedIn && (
          <li>
            <p className='header__list-item header__email'></p>
            {currentEmail}
          </li>
        )}

        {isLoggedIn && (
          <li>
            <button className='header__list-item opacity-button' type='button' onClick={onLogout}>
              Выход
            </button>
          </li>
        )}
        {!isLoggedIn && location.pathname === '/sing-up' && (
          <li>
            <Link className='header__list-item opacity-button' to='/sing-in'>
              Войти
            </Link>
          </li>
        )}
        {!isLoggedIn && location.pathname === '/sing-in' && (
          <li>
            <Link className='header__list-item opacity-button' to='/sing-up'>
              Регистрация
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
