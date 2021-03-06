import React from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
