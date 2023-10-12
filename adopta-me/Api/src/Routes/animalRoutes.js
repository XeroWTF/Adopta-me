const express = require('express');
const router = express.Router();
const animalController  = require('../controllers/animalController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.get('/', animalController.getAllAnimals);
router.post('/', animalController.createAnimal);
router.post('/upload', upload.single('image'), animalController.uploadAnimalImage);
router.get('/:id', animalController.getAnimalById);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;

