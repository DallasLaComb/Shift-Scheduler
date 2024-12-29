import app from './app.js'
import sequelize from './models/index.js'

const PORT = process.env.PORT || 8081

;(async () => {
  try {
    await sequelize.sync({ alter: true })
    console.log('Database synchronized successfully!')

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
    })
  } catch (error) {
    console.error('Error syncing database or starting server:', error)
    process.exit(1)
  }
})()
