import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        //messages: state.dialogPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        /*  updateNewMessageText: (text) => {
             dispatch(updateNewMessageActionCreator(text));
         }, */
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
}

/* let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); */

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);