const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');
const multer = require('multer');

// Configura multer para almacenar los archivos en la carpeta 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/', animalController.getAllAnimals);
router.post('/', animalController.createAnimal);

// Utiliza multer para manejar la carga de la imagen
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image provided' });
      }
  
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'Animals' // Carpeta donde se almacenará en Cloudinary
      });
  
      // Elimina el archivo temporal después de cargarlo a Cloudinary
      fs.unlinkSync(req.file.path);
  
      return res.json({ imageUrl: result.secure_url });
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
  });

router.get('/:id', animalController.getAnimalById);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;
