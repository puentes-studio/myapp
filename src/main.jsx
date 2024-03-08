
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { NameProvider } from '../Context/Name.Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </NameProvider>
  </React.StrictMode>
);

