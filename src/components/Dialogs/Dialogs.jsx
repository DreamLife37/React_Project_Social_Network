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
let dialogsData = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Aleksey'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Yo'}
]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

            </div>

            <div className={s.messages}>
                <Messages message={messagesData[0].message} />
                <Messages message={messagesData[1].message} />
                <Messages message={messagesData[2].message} />
            </div>

        </div>
    )
}

export default Dialogs;