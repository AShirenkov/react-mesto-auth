import logo from '../images/logo.svg';
import React from 'react';
function Header({ onLogout }) {
  return (
    <header className='header'>
      <img src={logo} alt='Лого Место Россия' className='header__logo' />
    </header>
  );
}

export default Header;
