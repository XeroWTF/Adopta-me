import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PetCard from '../Components/PetCard';
import LoginButton from '../Components/LoginButton';
import LogoutButton from '../Components/LogoutButton';
import './Home.css'; // Cambié el nombre de la importación
import HomePageBackGround from '../Assets/HomePageBackGround.jpg';

const Home = () => {
  const [animals, setAnimals] = useState([]);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnimals();
    }
  }, [isAuthenticated]); // Corregido: Cerrado el arreglo de dependencias correctamente

  const fetchAnimals = async () => {
    const data = [
      { id: 1, name: 'Mascota 1', picture: 'https://picsum.photos/200/300/?random' },
      { id: 2, name: 'Mascota 2', picture: 'https://picsum.photos/200/300/?random' },
      { id: 3, name: 'Mascota 3', picture: 'https://picsum.photos/200/300/?random' },
      { id: 4, name: 'Mascota 4', picture: 'https://picsum.photos/200/300/?random' },
      { id: 5, name: 'Mascota 5', picture: 'https://picsum.photos/200/300/?random' },
      { id: 6, name: 'Mascota 6', picture: 'https://picsum.photos/200/300/?random' },
      { id: 7, name: 'Mascota 7', picture: 'https://picsum.photos/200/300/?random' },
      { id: 8, name: 'Mascota 8', picture: 'https://picsum.photos/200/300/?random' },
      { id: 9, name: 'Mascota 9', picture: 'https://picsum.photos/200/300/?random' },
      { id: 10, name: 'Mascota 10', picture: 'https://picsum.photos/200/300/?random' },
      { id: 11, name: 'Mascota 11', picture: 'https://picsum.photos/200/300/?random' },
      { id: 12, name: 'Mascota 12', picture: 'https://picsum.photos/200/300/?random' },
    ];
    setAnimals(data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${HomePageBackGround})` }}>
      <header className="header">
        {!isAuthenticated && (
          <LoginButton />
        )}

        {isAuthenticated && (
          <LogoutButton />
        )}
      </header>

      <main className="main">
        <h1 className="main-title">Adopta un amigo peludo</h1>
        <div className="carousel-container">
          <Slider {...settings}>
            {animals.map(animal => (
              <div key={animal.id} className="pet-card">
                <PetCard name={animal.name} picture={animal.picture} /> {/* Corregido: Pasar la propiedad 'picture' */}
              </div>
            ))}
          </Slider>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">Copyright Adopta-me</p>
      </footer>
    </div>
  );
}

export default Home;
