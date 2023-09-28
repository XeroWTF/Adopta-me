import './App.css';
import React from 'react';
import Home from './Pages/Home';
import AnimalForm from './Components/AnimalForm';
import { Auth0Provider } from '@auth0/auth0-react';

const providerConfig = {
  domain: 'dev-hxvv3i1b6zllfeu5.us.auth0.com',
  clientId: 'kSdTgIgViUvh9c3gD0LS0AkN1FCtmWAf' ,
  
  authorizationParams: {
    redirect_uri: window.location.origin
  }
}

function App() {
  return (
    <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <Home /> 
      <AnimalForm />
    </Auth0Provider>
    </React.StrictMode>
  );
}

export default App;
