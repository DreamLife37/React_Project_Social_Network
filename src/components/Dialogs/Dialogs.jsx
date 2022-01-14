import React from 'react';
import { Redirect } from 'react-router-dom';
import AddNewMessageForm from './AddNewMessageForm';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id} />);

    let onAddMessageClick = (values) => {
        props.addMessage(values);
    }

    /* if (!props.isAuth) return <Redirect to={"/login"} />; */

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <AddNewMessageForm  onAddMessageClick={onAddMessageClick} />

            <div className={s.dialogsItems}>

            </div>
        </div>
    )
}




export default Dialogs;