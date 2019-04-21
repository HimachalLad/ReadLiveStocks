const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Product request for GET'
  });
});

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json({
    message: 'Product request for POST',
    createdProduct: product
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'Discovered special id',
      id
    });
  } else {
    res.status(200).json({
      message: 'You passed an id'
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product'
  });
});

module.exports = router;