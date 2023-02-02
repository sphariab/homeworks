import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import rootReducer from './reducers';
import rootSaga from './sagas'
import App from './App';

const persistedState = localStorage.getItem('contacts')
  ? JSON.parse(localStorage.getItem('contacts')) : {}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, sagaMiddleware, logger));

sagaMiddleware.run(rootSaga)


store.subscribe(() => {
  localStorage.setItem('contacts', JSON.stringify(store.getState()))
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);