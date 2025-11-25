const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikControllers = require('../controllers/komikControllers');
const upload = multer( {storage: multer.memoryStorage() } );

router.post('/komiks', upload.single('image'), komikControllers.createKomik);
router.get('/komiks', komikControllers.getAllKomik);
router.get('/komiks/:id', komikControllers.getKomikById);
router.put('/komiks/:id', upload.single('image'), komikControllers.updateKomik);
router.delete('/komiks/:id', komikControllers.deleteKomik);

module.exports = router;