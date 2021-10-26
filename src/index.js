
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom'
import store from './redux/redux-store';
import StoreContext from './StoreContext';

let rerenderEntireTree = (state) => {
  debugger
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
  document.getElementById('root'));
}

rerenderEntireTree(store.getState()); //здесь не биндим, тк метод мы вызываем сразу же от имени store

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

