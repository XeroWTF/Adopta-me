const express = require('express');
const router = express.Router();
const {getAllAnimals, createAnimal, getAnimalById , updateAnimal, deleteAnimal} = require('../controllers/animalController');

router.get('/', animalController.getAllAnimals);
router.post('/', animalController.createAnimal);
router.get('/:id', animalController.getAnimalById);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;

