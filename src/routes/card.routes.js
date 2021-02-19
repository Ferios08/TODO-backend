const express = require('express')
const router = express.Router()
const cardController = require('../controllers/card.controller');

// Retrieve all cards
router.get('/', cardController.findAll);

// Create a new card
router.post('/', cardController.create);

// Retrieve a single card with id
router.get('/:id', cardController.findById);

// Update a card with id
router.put('/:id', cardController.update);

// Delete a card with id
router.delete('/:id', cardController.delete);

module.exports = router