const { Animal } = require('../db');

// Obtener todos los animales
async function getAllAnimals(req, res) {
  try {
    const animals = await Animal.findAll();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los animales.' });
  }
}

// Crear un nuevo animal
async function createAnimal(req, res) {
  const { name, picture } = req.body;

  try {
    const newAnimal = await Animal.create({ name, picture });
    res.status(201).json(newAnimal);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el animal.' });
  }
}

// Obtener un animal por su ID
async function getAnimalById(req, res) {
  const animalId = req.params.id;

  try {
    const animal = await Animal.findByPk(animalId);
    if (!animal) {
      return res.status(404).json({ error: 'Animal no encontrado.' });
    }
    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el animal.' });
  }
}

// Actualizar un animal
async function updateAnimal(req, res) {
  const animalId = req.params.id;
  const { name, picture } = req.body;

  try {
    const animal = await Animal.findByPk(animalId);
    if (!animal) {
      return res.status(404).json({ error: 'Animal no encontrado.' });
    }
    await animal.update({ name, picture });
    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el animal.' });
  }
}

// Eliminar un animal
async function deleteAnimal(req, res) {
  const animalId = req.params.id;

  try {
    const animal = await Animal.findByPk(animalId);
    if (!animal) {
      return res.status(404).json({ error: 'Animal no encontrado.' });
    }
    await animal.destroy();
    res.json({ message: 'Animal eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el animal.' });
  }
}

module.exports = {
  getAllAnimals,
  createAnimal,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
};
