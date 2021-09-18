import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Andrey' id='1' />
                <DialogItem name='Dimych' id='2' />
                <DialogItem name='Aleksey' id='3' />

            </div>

            <div className={s.messages}>
                <Messages message='Hi' />
                <Messages message='Hello' />
                <Messages message='Yo' />
            </div>

        </div>
    )
}

export default Dialogs;