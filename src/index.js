import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './containers/NavBar';
import Footer from './components/Footer';

ReactDOM.render(
  <>
    <NavBar />
    <App />
    <Footer />
  </>,
  document.getElementById('root')
);
