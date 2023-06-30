import logo from '../images/logo.svg';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Header({ onLogout, currentEmail }) {
  return (
    <header className='header'>
      <img src={logo} alt='Лого Место Россия' className='header__logo' />

      <Routes>
        <Route
          path='/'
          element={
            <ul className='header__navi'>
              <li>
                <p className='header__list-item header__email'></p>
                {currentEmail}
              </li>
              <li>
                <button
                  className='header__list-item opacity-button'
                  type='button'
                  onClick={onLogout}
                >
                  Выход
                </button>
              </li>
            </ul>
          }
        />
        <Route
          path='/sign-up'
          element={
            <Link className='header__list-item opacity-button' to='/sign-in'>
              Войти
            </Link>
          }
        />
        <Route
          path='/sign-in'
          element={
            <Link className='header__list-item opacity-button' to='/sign-up'>
              Регистрация
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

/*Код ниже оставляю для себя чтобы не забыть альтернативнеый вариант реализации*/
//import { useLocation } from 'react-router-dom';
//const location = useLocation();
// return (
//   <header className='header'>
//     <img src={logo} alt='Лого Место Россия' className='header__logo' />
//     <ul className='header__navi'>
//       {isLoggedIn && (
//         <li>
//           <p className='header__list-item header__email'></p>
//           {currentEmail}
//         </li>
//       )}

//       {isLoggedIn && (
//         <li>
//           <button className='header__list-item opacity-button' type='button' onClick={onLogout}>
//             Выход
//           </button>
//         </li>
//       )}
//       {!isLoggedIn && location.pathname === '/sign-up' && (
//         <li>
//           <Link className='header__list-item opacity-button' to='/sign-in'>
//             Войти
//           </Link>
//         </li>
//       )}
//       {!isLoggedIn && location.pathname === '/sign-in' && (
//         <li>
//           <Link className='header__list-item opacity-button' to='/sign-up'>
//             Регистрация
//           </Link>
//         </li>
//       )}
//     </ul>
//   </header>
// );

export default Header;
