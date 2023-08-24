import './Home.css';

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Adopta un amigo peludo</h1>
      </header>

      <main>
        <h2>Nuestros peludos en adopción</h2>
        
        {/* Aquí irían las tarjetas de los perros */}
        
        <button>Conoce a más amigos</button>
      </main>

      <footer>
        <p>Copyright Adopta-me</p>  
      </footer>
    </div>
  );
}

export default Home;