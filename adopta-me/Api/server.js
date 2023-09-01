const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Puedes cambiar el puerto si lo deseas

app.use(express.json());

// Importar tus modelos
const sequelize = require('./src/db');
require('./src/models/Animal')(sequelize);
require('./src/models/User')(sequelize);

// Definir tus rutas aquí



const animalRoutes = require('./src/routes/animalRoutes');
const userRoutes = require('./src/routes/userRoutes');

app.use('/api/animals', animalRoutes);
app.use('/api/users', userRoutes);



app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
