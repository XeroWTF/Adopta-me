
const { log } = require('handlebars/runtime');
const { Animal } = require('../db');
const { ValidationError } = require('sequelize');

async function getAllAnimals(req, res) {
  try {
    const animals = await Animal.findAll();
    res.json(animals); 
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los animales' }); 
  }
}

async function createAnimal(req, res) {

  console.log(req.body);

  const { name, picture, province, description, userId } = req.body;  

  try {
    const newAnimal = await Animal.create({ name, picture, province, description, userId });
    res.status(201).json(newAnimal);

  } catch (error) {

    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: 'Error al crear el animal' });
  
  }

}

async function getAnimalById(req, res) {
  
  const { id } = req.params;

  try {
    const animal = await Animal.findByPk(id);
    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }
    res.json(animal);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el animal' });
  }

}

async function updateAnimal(req, res) {

  const { id } = req.params;  
  const { name, picture } = req.body;

  try {
    const animal = await Animal.findByPk(id);
    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }
    await animal.update({ name, picture });
    res.json(animal);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el animal' }); 
  }

}

async function deleteAnimal(req, res) {

  const { id } = req.params;

  try {
    const animal = await Animal.findByPk(id);
    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }  
    await animal.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el animal' });
  }

}


module.exports = {
  getAllAnimals,
  createAnimal, 
  getAnimalById,
  updateAnimal,
  deleteAnimal
}