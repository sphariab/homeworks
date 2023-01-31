import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import rootReducer from './reducers';
import App from './App';


const persistedState = localStorage.getItem('contacts')
  ? JSON.parse(localStorage.getItem('contacts')) : {}

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

store.subscribe(() => {
  localStorage.setItem('contacts', JSON.stringify(store.getState()))
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);