import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes } from './router/rou';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
