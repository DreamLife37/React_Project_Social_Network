
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom'
import store from './redux/redux-store';
import { Provider } from 'react-redux';

let rerenderEntireTree = (state) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root'));
}

//rerenderEntireTree(store.getState()); //здесь не биндим, тк метод мы вызываем сразу же от имени store

/* store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
}); */

rerenderEntireTree();
