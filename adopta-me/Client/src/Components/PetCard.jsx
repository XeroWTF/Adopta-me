import './PetCard.css';

function PetCard({ name, picture }) {
  return (
    <div className="pet-card">
      <img src={picture} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default PetCard;
