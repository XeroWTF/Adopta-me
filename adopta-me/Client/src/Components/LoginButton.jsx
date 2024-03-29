import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  }

  return (
    <button onClick={handleLogin}>Iniciar Sesión</button>
  )

}

export default LoginButton;