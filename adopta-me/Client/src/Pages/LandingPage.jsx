import React from 'react';
import { useHistory } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {
  const history = useHistory();

  const handleEnter = () => {
    history.push('/home');
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1>Bienvenido a la Web de Adopcion</h1>
        <div className="button-container">
          <button className="enter-button" onClick={handleEnter}>Adopta-Me</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
