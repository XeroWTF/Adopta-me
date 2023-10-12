import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function AnimalForm() {

  const { getAccessTokenSilently, user } = useAuth0();

  const [form, setForm] = useState({
    name: '',
    image: null,
    province: '',
    description: '',
  });

  const [userId, setUserId] = useState(null);



  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(`http://localhost:3001/user/email/${user.email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUserId(data.id);
        } else {
          console.error('Failed to fetch user ID');
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    if (user) {
      fetchUserId();
    }
  }, [getAccessTokenSilently, user]);

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      console.log('Submitting form...');
  
      const uploadData = new FormData();
      uploadData.append('image', form.image);
  
      const uploadRes = await fetch('http://localhost:3001/animal/upload', {
        method: 'POST',
        body: uploadData
      });
  
      const { imageUrl } = await uploadRes.json();
  
      // Create animal
      const animalData = {
        name: form.name,
        image: imageUrl,
        province: form.province,
        description: form.description,
        userId: userId
      }
  
      const createRes = await fetch('http://localhost:3001/animal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(animalData) 
      });
  
      if (createRes.ok) {
        try {
          const newAnimal = await createRes.json();
          console.log('Response JSON:', newAnimal);
        } catch (err) {
          console.log('Error parsing JSON:', err);
        }
      } else {
        console.log('Response Error:', createRes.statusText);
      }
    } catch (err) {
      console.log('Error submitting data:', err);
    }
  }
  

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit} action="/upload" method="post" enctype="multipart/form-data">

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="file"
        name="image"
        onChange={(e) => {
          const file = e.target.files[0];
          setForm({
            ...form,
            image: file,
          });
          console.log("contenido de file:", file)
        }}
      />


      <select
        name="province"
        value={form.province}
        onChange={handleChange}
      >
        <option value="">Seleccionar provincia</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Catamarca">Catamarca</option>
        <option value="Chaco">Chaco</option>
        <option value="Chubut">Chubut</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Corrientes">Corrientes</option>
        <option value="Entre Ríos">Entre Ríos</option>
        <option value="Formosa">Formosa</option>
        <option value="Jujuy">Jujuy</option>
        <option value="La Pampa">La Pampa</option>
        <option value="La Rioja">La Rioja</option>
        <option value="Mendoza">Mendoza</option>
        <option value="Misiones">Misiones</option>
        <option value="Neuquén">Neuquén</option>
        <option value="Río Negro">Río Negro</option>
        <option value="Salta">Salta</option>
        <option value="San Juan">San Juan</option>
        <option value="San Luis">San Luis</option>
        <option value="Santa Cruz">Santa Cruz</option>
        <option value="Santa Fe">Santa Fe</option>
        <option value="Santiago del Estero">Santiago del Estero</option>
        <option value="Tierra del Fuego">Tierra del Fuego</option>
        <option value="Tucumán">Tucumán</option>
      </select>

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <button type="submit">Crear Animal</button>

    </form>
  );

}

export default AnimalForm;