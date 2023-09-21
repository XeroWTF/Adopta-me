// Home.jsx

import './Home.css';
import PetCard from '../Components/PetCard';
import { useState, useEffect } from 'react';

function Home() {

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/animal')
      .then(res => res.json())
      .then(data => setAnimals(data))
  }, []);

  return (
    <div className="home">
      <header>
        <h1>Adopta un amigo peludo</h1>
      </header>

      <main>
    <div className="pet-cards">
      {animals.map(animal => (
        <PetCard 
          key={animal.id}
          name={animal.name}
          description={animal.description}
          picture={animal.picture}  
        />
      ))}
    </div>
  </main>

      <footer>
        <p>Copyright Adopta-me</p>  
      </footer>
    </div>
  );
}

export default Home;