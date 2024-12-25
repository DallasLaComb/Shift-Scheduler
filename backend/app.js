const express = require('express')
const cors = require('cors')
const helloRoutes = require('./routes/helloRoutes')

const app = express()

// Middleware
app.use(cors()) // Enable CORS
app.use(express.json()) // Parse JSON request bodies

// Routes
app.use('/api/messages', helloRoutes)

module.exports = app
