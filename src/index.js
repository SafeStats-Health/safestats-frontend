import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Wrapper} from './components/wrapper'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Wrapper>
);
