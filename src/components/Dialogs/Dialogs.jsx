import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Messages message={m.message} />);

    let onAddMessageClick = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

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