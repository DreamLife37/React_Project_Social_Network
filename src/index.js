
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom'
import store from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
    <App state={state} 
    dispatch={store.dispatch.bind(store)}//тк мы не вызываем функцию здесь и сейчас, то необходимо забиндить чтобы внутри this всегда был store
    />
  </React.StrictMode>,
  document.getElementById('root'));
}

rerenderEntireTree(store.getState()); //здесь не биндим, тк метод мы вызываем сразу же от имени store

store.subscribe(rerenderEntireTree);

