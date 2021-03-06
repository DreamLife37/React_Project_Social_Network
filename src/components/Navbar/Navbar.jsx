import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';


//state={props.state.sidebar}

const Navbar = (props) => {
 // let friendsElements = props.state.friends.map(f => <Friends avatar={f.avatar} name={f.name} id={f.id} />);
  return (

    <nav className={s.nav}>
     
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
      </div>

      {/* <div className={s.friend}>
                {friendsElements}
            </div> */}

    </nav>
  )
}

export default Navbar;