import React, { Component } from 'react';

import Main from './components/main';
import { Navigation } from './components/navigation';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container col-lg-12 col-md-12 col-sm-12 p-0">
        <Navigation/>

        <Main />

        <Footer/>
      </div>
    </div>
  );
}

export default App;
