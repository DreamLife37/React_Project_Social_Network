import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return <StoreContext.Consumer> 
        {(store) => {
            let state = store.getState().dialogsPage;

            let onAddMessageClick = () => {
                store.dispatch(addMessageActionCreator());
            }
        
            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageActionCreator(text))
            }

            return <Dialogs updateNewMessageText={onMessageChange} 
                            addMessage={onAddMessageClick} 
                            dialogsPage={state} /> 
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;