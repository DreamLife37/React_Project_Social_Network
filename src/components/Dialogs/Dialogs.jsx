import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />);

    let messagesElements = props.state.messages.map(m => <Messages message={m.message} />);

    let newPostElement = React.createRef();
    
    let sendMessage = () => {
      let text = newPostElement.current.value;
      alert(text)
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
        <div><textarea ref={newPostElement}></textarea></div>
        <div>
          <button onClick={sendMessage}>Send message</button></div>
      </div>

        </div>
    )
}

export default Dialogs;