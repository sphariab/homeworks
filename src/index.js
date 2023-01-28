import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './App';

const persistedState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos')) : {}

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()))
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
