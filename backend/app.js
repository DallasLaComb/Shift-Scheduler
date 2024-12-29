import 'dotenv/config'
import express from 'express'
import corsMiddleware from './middleware/cors.js'

const app = express()

app.use(corsMiddleware)
app.use(express.json())

export default app
