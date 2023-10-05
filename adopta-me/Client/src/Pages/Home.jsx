import './Home.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import PetCard from '../Components/PetCard';
import LoginButton from '../Components/LoginButton';
import LogoutButton from '../Components/LogoutButton';
import fakePetData from "../Assets/fakePetData.json";

const Home = () => {
  const [animals, setAnimals] = useState([]);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setAnimals(fakePetData.petFakeData);
    }
  }, [isAuthenticated]);

  return (
    <div className="home">
      <header>
        <div className="header-content">
          <h1>Adopta un amigo peludo</h1>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </header>

      <main className="main-content">
        {isAuthenticated ? (
          animals.map((pet) => (
            <PetCard
              key={pet.id}
              picture={pet.picture}
              name={pet.name}
            />
          ))
        ) : (
          <p>Necesitas iniciar sesión para ver esta sección</p>
        )}
      </main>

      <footer>
        <p>Copyright Adopta-me</p>
      </footer>
    </div>
  );
}

export default Home;
