import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, post: 'Hi, how are you', likesCount: 5 },
  { id: 2, post: 'Dimych', likesCount: 10 },
  { id: 3, post: "It's my first post", likesCount: 15 }
]

let dialogs = [
  { id: 1, name: 'Andrey' },
  { id: 2, name: 'Dimych' },
  { id: 3, name: 'Aleksey' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'Yo' }
]


ReactDOM.render(

    <React.StrictMode>
    
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
