import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import App from './App';
import globalStyle from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
