import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';

const Dialogs = (props) => {

    debugger;

    console.log(props.dialogs);
    console.log(props.messages);

    let dialogsElements = props.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />); 

    let messagesElements = props.messages.map(m => <Messages message={m.message} />);

    let newMessageElement = React.createRef();
    
     let addMessage = () => {
      //props.addMessage();
      props.dispatch(addMessageActionCreator());
    } 

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
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
        <div><textarea onChange={onMessageChange} ref={newMessageElement}
         value={props.newMessageText}/></div>
        <div>
          <button onClick={addMessage}>Send message</button></div>
      </div>

        </div>
    )
}

export default Dialogs;