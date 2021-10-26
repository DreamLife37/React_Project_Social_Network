import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

const Friends = (props) => {

   return (
    <div>
        <div className={s.friends}>
            <div className={s.about}>{<img src={props.avatar}/>} {props.name}</div> {/* <div>{props.name}</div> */}
        </div>
    </div>
)
}

export default Friends;