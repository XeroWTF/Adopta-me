// Requerir archivo de configuración de la DB
require('./src/db');

// Requerir express  
const express = require('express');

// Inicializar express
const app = express();

// Configurar middlewares
app.use(express.json());

// Requerir modelos para registrarlos
require('./src/models/Animal');
require('./src/models/User');

// Requerir rutas
const animalRoutes = require('./src/routes/animalRoutes');
const userRoutes = require('./src/routes/userRoutes'); 

// Usar rutas 
app.use('/api/animals', animalRoutes);
app.use('/api/users', userRoutes);

// Escuchar peticiones en el puerto deseado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`); 
});