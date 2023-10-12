
const { log } = require('handlebars/runtime');
const { Animal } = require('../db');
const { ValidationError } = require('sequelize');
const cloudinary = require('cloudinary').v2;
const {
  CLOUD_NAME, API_KEY, API_SECRET, CLOUDINARY_URL
} = process.env;

cloudinary.config({
cloud_name: `${CLOUD_NAME}`,
api_key: `${API_KEY}`,
api_secret: `${API_SECRET}`,
cloudinary_url: `${CLOUDINARY_URL}`
});


async function uploadAnimalImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'Animals' // Adjust the folder as needed
    });

    // Delete the temporary file after upload
    // fs.unlinkSync(req.file.path);

    return res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
  }
}


async function createAnimal(animal) {

  
  try {
    console.log("me empiezo a ejecutar:", animal.body)
    const { name, image, province, description, userId } = animal;

    if (!name || !image || !province || !description || !userId) {
      throw new Error('Faltan datos obligatorios');
    }

    const result = await cloudinary.uploader.upload(image.path, {
      folder: 'Animals'
    });

    const imageUrl = result.secure_url;

    const newAnimal = await Animal.create({
      name,
      image: imageUrl,
      province,
      description,
      userId,
    });

    return newAnimal;
  } catch (error) {
    return { error: error.message };
  }
}


async function getAllAnimals(req, res) {
  try {
    const animals = await Animal.findAll();
    res.json(animals); 
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los animales' }); 
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
  deleteAnimal,
  uploadAnimalImage 
}