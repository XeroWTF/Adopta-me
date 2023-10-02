import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='xerowtf.eu.auth0.com'
      clientId='BYnmG9xw9TEbhEsjJ0Xe91UBVL7i6jJC'
      redirect_uri= {window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
); 


