import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ContextLogProvider } from './context/Contextlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextLogProvider>
    <App />
  </ContextLogProvider>
);


