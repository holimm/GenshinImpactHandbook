import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/mycss.css';
import "./css/scrollbar.css";
import Home from './home';
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>    
      <Home/>
  </Provider>
);

