const express = require('express');
const userRouter = express.Router();
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require("../controllers/userController");


userRouter.get('/', async (req, res) => {
    try {
      console.log('Obteniendo todos los usuarios');  
      const users = await getAllUsers(req, res);
      console.log('Usuarios obtenidos');
      res.status(200).json(users);
    } catch (error) {
      console.log('Error al obtener usuarios', error);
      res.status(500).json({ mensaje: 'Error al obtener los usuarios' }); 
    }
  });


  userRouter.post('/', async (req, res) => {
    try {
      console.log('Creando nuevo usuario');
      console.log("Esta es la ruta:", req.headers, req.body);
      const newUser = await createUser(req, res); 
      console.log('Usuario creado'); 
      res.status(201).json(newUser);
    } catch (error) {
      console.log('Error al crear usuario', error);
      res.status(500).json({ mensaje: 'Error al crear el usuario'});
    }
  });



userRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await getUserById(id)

        res.status(200).json(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

userRouter.put('/:id', updateUser);


userRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const message = await deleteUser(id)
        res.status(200).send(message)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = userRouter;
