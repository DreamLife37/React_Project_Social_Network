
import App from './App';
//import state, { addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom'
import store from './redux/state';






let rerenderEntireTree = (state) => {
  ReactDOM.render(

    <React.StrictMode>
         
    <App state={state} 
    addPost={store.addPost.bind(store)} //тк мы не вызываем функцию здесь и сейчас, то необходимо забиндить чтобы внутри this всегда был store
    updateNewPostText={store.updateNewPostText.bind(store)}
    addMessage={store.addMessage.bind(store)}
    updateNewMessageText={store.updateNewMessageText.bind(store)}
    />

  </React.StrictMode>,
  document.getElementById('root'));
}

rerenderEntireTree(store.getState()); //здесь не биндим, тк метод мы вызываем сразу же от имени store

store.subscribe(rerenderEntireTree);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

