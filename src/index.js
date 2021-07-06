import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StudentProvider } from './components/StudentContext';

ReactDOM.render(
  <React.StrictMode>
    <StudentProvider>
      <App />
    </StudentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
