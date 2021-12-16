import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Error from './components/Error';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element = { <App/> }/>
      <Route path="/about" element = { <About/> }/>
      <Route path="*" element={ <Error/> }/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
