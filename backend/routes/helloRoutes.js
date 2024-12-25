const express = require('express')
const {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
} = require('../controllers/helloController')

const router = express.Router()

router.post('/', createMessage) // Create a new message
router.get('/', getAllMessages) // Get all messages
router.get('/:id', getMessageById) // Get a single message by ID
router.put('/:id', updateMessage) // Update a message by ID
router.delete('/:id', deleteMessage) // Delete a message by ID

module.exports = router
