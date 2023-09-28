import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {

  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: '/' });
  }

  return (
    <button onClick={handleLogout}>Cerrar Sesión</button>
  )

}

export default LogoutButton;