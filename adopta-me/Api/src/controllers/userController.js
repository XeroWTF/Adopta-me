const { User } = require('../db');

// Obtener todos los usuarios
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
}

// Crear un nuevo usuario
async function createUser(req, res) {
  const { name, email, nickname, picture } = req.body;

  try {
    const newUser = await User.create({ name, email, nickname, picture });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario.' });
  }
}

// Obtener un usuario por su ID
async function getUserById(req, res) {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario.' });
  }
}

// Actualizar un usuario
async function updateUser(req, res) {
  const userId = req.params.id;
  const { name, email, nickname, picture } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    await user.update({ name, email, nickname, picture });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario.' });
  }
}

// Eliminar un usuario
async function deleteUser(req, res) {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    await user.destroy();
    res.json({ message: 'Usuario eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario.' });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
