import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {combineReducers , createStore} from 'redux';
import reducer from './reducer';
import  mysaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';

const sagamiddleware = createSagaMiddleware();
const rootreducer = combineReducers({reducer});
const store = createStore(rootreducer,applyMiddleware(sagamiddleware));
sagamiddleware.run(mysaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
