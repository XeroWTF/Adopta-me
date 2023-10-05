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
      // fetchAnimals();
      setAnimals(fakePetData.petFakeData); 
    }
  }, [isAuthenticated]);

  const fetchAnimals = async () => {
    const res = await fetch('/animals');
    const data = await res.json();
    setAnimals(data);
  };

  return (
    <div className="home">
      <header>
        {!isAuthenticated && (
          <LoginButton />
        )}

        {isAuthenticated && (
          <>
            <LogoutButton />
            <h1>Adopta un amigo peludo</h1>
          </>
        )}
      </header>

      <main>
        {isAuthenticated ? (
          <div className="pet-cards">
            {animals.map((pet) => (
              <PetCard
                key={pet.id}
                name={pet.name}
                picture={pet.picture}
              />
            ))}
          </div>
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
