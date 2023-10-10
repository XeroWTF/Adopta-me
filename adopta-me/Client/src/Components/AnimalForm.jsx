// AnimalForm.jsx

import "./AnimalForm.css";
import { useState } from 'react';  
import { useAuth0 } from '@auth0/auth0-react';
import getUserId from "../Helpers/getUserId";

function AnimalForm() {

  const [form, setForm] = useState({  
    name: '',
    picture: '',
    province: '',
    description: ''
  });

  const { getAccessTokenSilently, user } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Formulario enviado. Datos:', form);

    const userId = await getUserId(user.email);

    const body = { 
      ...form,  
      userId
    };

    console.log('Contenido del body:', body);

    try {
      const token = await getAccessTokenSilently();

      console.log('Enviando solicitud al servidor:', body);

      const res = await fetch('http://localhost:3001/animal', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        
      });

      console.log('Respuesta del servidor:', res); 
      
      if (res.ok) {
        alert('Animal creado!');
        setForm({  
          name: '',
          picture: '',
          province: '',
          description: '' 
        });
      }

    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setForm({  
      ...form,
      [e.target.name]: e.target.value 
    });
  } 

  return (


    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange} 
        placeholder="Nombre"
        />

      <input
        type="text"
        name="picture"
        value={form.picture}
        onChange={handleChange}
        placeholder="Foto URL"  
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
        placeholder="Descripción"
        />

      <button type="submit">Crear Animal</button>
    </form>
      
  );

}

export default AnimalForm;