import React from 'react';
import Header from './components/Header';
import Storefinder from './components/Storefinder';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Storefinder/>
      <Footer/>
    </div>
  );
}

export default App;
