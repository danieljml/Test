import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'/test/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
