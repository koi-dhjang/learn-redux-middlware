import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))); // 미들웨어 여러개 사용할 경우 logger가 항상 마지막에 와야함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
