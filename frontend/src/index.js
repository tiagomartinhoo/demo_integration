import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const authors = () =>{
  console.warn('----------------- Authors -----------------');
  console.warn('                Miguel Nunes               ');
  console.warn('               Tiago Martinho              ');
  console.warn('----------------- Authors -----------------');
}

authors();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

