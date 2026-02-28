import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //component racine de l'application
import NavBar from './components/Navbar/NavBar'; //component racine de l'application
import Footer from './components/Footer/Footer'; //component racine de l'application
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
