const express = require('express')
const app = require('./app') // Your Express app with routes and middleware
const sequelize = require('./models') // Sequelize instance

const PORT = process.env.PORT || 8081

// Self-invoking async function to sync database and start server
;(async () => {
  try {
    // Synchronize Sequelize models with the database
    await sequelize.sync({ alter: true }) // Ensures tables and columns are created/updated
    console.log('Database synchronized successfully!')

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
    })
  } catch (error) {
    console.error('Error syncing database or starting server:', error)
    process.exit(1) // Exit process with failure
  }
})()
