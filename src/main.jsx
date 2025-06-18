import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import { LoginProvider } from './Context/LoginContext'; // ✅ import this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginProvider>
    <App />
  </LoginProvider>
);
