import React from 'react';
import ReactDOM from "react-dom/client";
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { RouterProvider } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import { router } from './router';


const persistedState = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users')) : {}

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

store.subscribe(() => {
  localStorage.setItem('users', JSON.stringify(store.getState()))
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} basename={window.location.pathname || ''} />
  </Provider>
);
console.log(window.location)