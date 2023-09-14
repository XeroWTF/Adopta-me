const { conn } = require('./src/db.js');

// Requerir app.js
const app = require('./src/app');

// Obtener referencia al servidor
const server = app.server;

const PORT = 3000; // Cambia 3000 al puerto que desees utilizar

conn.sync({ force: false }).then(() => {
  // Llamar listen en la referencia al servidor
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on https://localhost:${PORT}`);
  });
});
