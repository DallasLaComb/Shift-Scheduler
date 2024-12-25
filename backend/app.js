require('dotenv').config() // Load environment variables
const express = require('express')
const cors = require('cors')
const helloRoutes = require('./routes/helloRoutes')

const app = express()

// Define allowed origins
const allowedOrigins = [process.env.FRONTEND_URL]

// Configure CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // If you need to handle cookies or authentication
  }),
)

app.use(express.json()) // Parse JSON request bodies

// Routes
app.use('/api/messages', helloRoutes)

module.exports = app
