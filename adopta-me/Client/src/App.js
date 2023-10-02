import './App.css';
import React from 'react';
import Home from './Pages/Home';
import AnimalForm from './Components/AnimalForm';




function App() {
  return (
    <React.StrictMode>
      <Home /> 
      <AnimalForm />
    </React.StrictMode>
  );
}

export default App;
