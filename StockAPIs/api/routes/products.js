const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../authMiddleWare/check-auth');
const productController = require('../controllers/products');

const multerStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toDateString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Incorrect format'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const Product = require('../models/product');

router.get('/', productController.get_all_products);

router.post(
  '/',
  checkAuth,
  upload.single('productImage'),
  productController.create_product
);

router.get('/:productId', productController.get_product);

router.patch('/:productId', checkAuth, productController.update_product);

router.delete('/:productId', checkAuth, productController.delete_product);

module.exports = router;
