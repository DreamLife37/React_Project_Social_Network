import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';



const Header = (props) => {
  return (
    <header className={s.header}>
      {/* <p className={s.logo}>Social Network</p> */}

      <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg' />

      <div className={s.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink to={'/login'}>Login</NavLink>}

      </div>
    </header>
  )
}

export default Header;