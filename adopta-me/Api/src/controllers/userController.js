
const { User } = require('../db');
const { ValidationError } = require('sequelize');

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
}

async function createUser(req, res) {

  const { name, email, nickname, picture } = req.body;

  try {
    const newUser = await User.create({ name, email, nickname, picture });
    res.status(201).json(newUser);
  } catch (error) {
    
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: 'Error al crear el usuario' });

  }

}


async function getUserById(req, res) {

  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }

}

async function updateUser(req, res) {

  const { id } = req.params;
  const { name, email, nickname, picture } = req.body;  

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await user.update({ name, email, nickname, picture });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }

}

async function deleteUser(req, res) {

  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await user.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }

}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,  
  deleteUser
}