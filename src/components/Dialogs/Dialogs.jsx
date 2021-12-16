import React from 'react';
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id}/>);

    let onAddMessageClick = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        debugger
        let text = e.target.value;
        props.updateNewMessageText(text);
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

            <div className={s.dialogsItems}>
                <div><textarea placeholder='Enter your message'
                               onChange={onMessageChange} 
                               value={state.newMessageText} /></div>
                <div>
                    <button onClick={onAddMessageClick}>Send message</button></div>
            </div>
        </div>
    )
}

export default Dialogs;