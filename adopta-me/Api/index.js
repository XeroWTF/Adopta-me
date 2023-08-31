
const { conn } = require('./src/db'); // importar conn

conn.sync() // ahora conn está definido!
  .then(() => {
    console.log('Base de datos conectada')
  })