import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/mycss.css';
import "./css/scrollbar.css";
import Home from './home';
import LoginScreen from './loginscreen';
import StoryCutscenes from './tab/story_cutscenes';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen/>}></Route>
        <Route path='/GenshinImpactHandbook' element={<LoginScreen/>}></Route>
        <Route path='/GenshinImpactHandbook/Home' element={<Home/>}></Route>
        <Route path='/GenshinImpactHandbook/StoryCutscenes' element={<StoryCutscenes/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

