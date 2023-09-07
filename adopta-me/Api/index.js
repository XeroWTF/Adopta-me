const { conn } = require('./src/db.js')

// Requerir app.js
const app = require('./src/app');

// Obtener referencia al servidor
const server = app.server;

const PORT = process.env.DB_PORT || 3001

conn.sync({ force: false }).then(() => {

  // Llamar listen en la referencia al servidor 
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on https://localhost:${PORT}`)
  })

})