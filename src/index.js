import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard/Dashboard';
import Navigation from './Navigation/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Dashboard />
  </React.StrictMode>
);
