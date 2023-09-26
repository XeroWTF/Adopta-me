import './App.css';
import Home from './Pages/Home';
import AnimalForm from './Components/AnimalForm';
import { Auth0Provider } from '@auth0/auth0-react';

const providerConfig = {
  domain: 'dev-hxvv3i1b6zllfeu5',
  clientId: 'kSdTgIgViUvh9c3gD0LS0AkN1FCtmWAf' 
};

function App() {
  return (
    <Auth0Provider {...providerConfig}>
      <Home /> 
      <AnimalForm />
    </Auth0Provider>
  );
}

export default App;
