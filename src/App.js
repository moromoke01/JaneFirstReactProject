import About from './Components/About';
 import NavBar from './Components/NavBar';
import React from 'react';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Products from './Components/Products';
import './App.css';

function App() {
  return (
    <div className="App">
             <>
    <NavBar />
    <Header />
   <Products />
   <About />
    <Contact />
    </>
    </div>
  );
}

export default App;
