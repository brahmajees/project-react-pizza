import React from 'react';
// import Navbar from './Components/Navbar/';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './Components/Hero/'
import Products from './Components/Products';
import { productData, productDataTwo } from './Components/Products/data';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Main from './Components/Main/Main';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main />
    </Router>
  );
}

export default App;

