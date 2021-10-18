import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />);

    let messagesElements = props.messages.map(m => <Messages message={m.message} />);

    //let newMessageElement = React.createRef();

    let onAddMessageClick = () => {
        //props.addMessage();
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
       
        let text = e.target.value;
        //props.updateNewMessageText(text);
        props.dispatch(updateNewMessageActionCreator(text))
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
                               value={props.newMessageText} /></div>
                <div>
                    <button onClick={onAddMessageClick}>Send message</button></div>
            </div>

        </div>
    )
}

export default Dialogs;