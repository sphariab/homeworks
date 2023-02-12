import React from 'react';
import ReactDOM from "react-dom/client";
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import App from './App';


const persistedState = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users')) : {}

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

store.subscribe(() => {
  localStorage.setItem('users', JSON.stringify(store.getState()))
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>,
  </Provider>
);
console.log(window.location)