import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Error from './components/Error';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element = { <App/> }/>
      <Route path="/about" element = { <About/> }/>
      <Route path="*" element={ <Error/> }/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
