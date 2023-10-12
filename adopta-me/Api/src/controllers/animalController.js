
const { log } = require('handlebars/runtime');
const { Animal } = require('../db');
const { ValidationError } = require('sequelize');
const cloudinary = require('cloudinary').v2;
const {
  CLOUD_NAME, API_KEY, API_SECRET
} = process.env;

cloudinary.config({
cloud_name: `${CLOUD_NAME}`,
api_key: `${API_KEY}`,
api_secret: `${API_SECRET}`
});

async function getAllAnimals(req, res) {
  try {
    const animals = await Animal.findAll();
    res.json(animals); 
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los animales' }); 
  }
}

async function createAnimal(animal) {

  try {
    let { name, image, province, description, userId } = animal;  

    
    if(!name || !image || !province || !description || !userId)  throw new Error('Faltan datos obligatorios')
    
    const response = await cloudinary.uploader.upload(image, { folder: 'Videogames' }, (error) => {
      if (error) {
        console.error("Este es el error:",error);
      }
    });
    
    image=response.secure_url
    
    const newAnimal = await Animal.create({ name, picture, province, description, userId });

    return newAnimal;

  } catch (error) {
    return {error: error.message};
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