const HelloModel = require('../models/HelloModel')

// Create a new message
const createMessage = async (req, res) => {
  try {
    const { message } = req.body

    // Validate the input
    if (!message || message.trim() === '') {
      return res
        .status(400)
        .json({ success: false, error: 'Message is required' })
    }

    const newMessage = await HelloModel.create({ message })
    res.status(201).json({ success: true, data: newMessage })
  } catch (error) {
    console.error('Error creating message:', error)
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}

// Get all messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await HelloModel.findAll()
    res.status(200).json({ success: true, data: messages })
  } catch (error) {
    console.error('Error fetching messages:', error)
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}

// Get a single message by ID
const getMessageById = async (req, res) => {
  try {
    const { id } = req.params
    const message = await HelloModel.findByPk(id)

    if (!message) {
      return res
        .status(404)
        .json({ success: false, error: 'Message not found' })
    }

    res.status(200).json({ success: true, data: message })
  } catch (error) {
    console.error('Error fetching message by ID:', error)
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}

// Update a message by ID
const updateMessage = async (req, res) => {
  try {
    const { id } = req.params
    const { message } = req.body

    // Validate the input
    if (!message || message.trim() === '') {
      return res
        .status(400)
        .json({ success: false, error: 'Message is required' })
    }

    const [updated] = await HelloModel.update({ message }, { where: { id } })

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, error: 'Message not found' })
    }

    res
      .status(200)
      .json({ success: true, message: 'Message updated successfully' })
  } catch (error) {
    console.error('Error updating message:', error)
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}

// Delete a message by ID
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await HelloModel.destroy({ where: { id } })

    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, error: 'Message not found' })
    }

    res
      .status(200)
      .json({ success: true, message: 'Message deleted successfully' })
  } catch (error) {
    console.error('Error deleting message:', error)
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
}
