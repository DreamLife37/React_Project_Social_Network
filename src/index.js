
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom'
import store from './redux/redux-store';

let rerenderEntireTree = (state) => {
  debugger
  ReactDOM.render(
    <React.StrictMode>
    <App state={state} 
    dispatch={store.dispatch.bind(store)}
    store={store} //тк мы не вызываем функцию здесь и сейчас, то необходимо забиндить чтобы внутри this всегда был store
    />
  </React.StrictMode>,
  document.getElementById('root'));
}

rerenderEntireTree(store.getState()); //здесь не биндим, тк метод мы вызываем сразу же от имени store
debugger
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

