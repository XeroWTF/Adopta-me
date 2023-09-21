// PetCard.jsx

import './PetCard.css';

function PetCard({name, picture}) {
  return (
    <div className="pet-card">
      <img src={picture} alt={name} />
      <h3>{name}</h3>
      <br />
      <button>Conocer más</button>
    </div>
  );
}

export default PetCard;