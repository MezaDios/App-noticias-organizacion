const { Router } = require('express');

const router = new Router();

const path = require('path');
const multer = require('multer');
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../dist/Noticias/IMGs'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname).toLowerCase());
    }
})
const uploadImage = multer({
    storage,
    limits: { fileSize: 3000000 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extName) {
            return cb(null, true);
        }
        cb("El archivo debede ser una imagen válida.");

    }
}).single('image');

router.post('/images/upload', (req, res) => {
    uploadImage(req, res, (err) => {
        if (err) {
            err.message = 'The file is so heavy for my service';
            return res.json({
                uploaded: false,
                error: err
            });
        }
        res.json({
            uploaded: true,
            file: req.file
        });
    });
});

router.get('/images', (req, res) => { });


module.exports = router;