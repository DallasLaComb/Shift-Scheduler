import cors from 'cors'
import 'dotenv/config'

const isDev = process.env.NODE_ENV === 'development'

const allowedOrigins = isDev
  ? ['http://localhost:3000'] // Add your local development origin here
  : [process.env.FRONTEND_URL] // Restrict to specific frontend URL in production

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}

const corsMiddleware = cors(corsOptions)

export default corsMiddleware
