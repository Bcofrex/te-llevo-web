import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Estilos de PrimeReact y PrimeFlex
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
