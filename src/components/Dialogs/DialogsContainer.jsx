import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onAddMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    return <Dialogs updateNewMessageText={onMessageChange} addMessage={onAddMessageClick} 
    dialogsPage={state} />
}

export default DialogsContainer;