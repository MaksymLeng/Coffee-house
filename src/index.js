import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';


import App from './App';

import './styles/index.scss'
import './styles/components/Fonts.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

