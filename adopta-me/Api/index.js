
const { conn, User } = require('./src/db');


conn.sync() // ahora conn está definido!
  .then(() => {
    console.log('Base de datos conectada')
  })