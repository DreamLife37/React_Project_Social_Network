import React from 'react';
import s from './Header.module.css';



const Header = () => {
    return (
    <header className={s.header}>
        {/* <p className={s.logo}>Social Network</p> */}
     
    <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg' />
    </header>
  )
}

export default Header;