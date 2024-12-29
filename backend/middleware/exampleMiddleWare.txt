const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`)
  next()
}

const anotherFunction = (req, res) => {
  res.json({ message: 'Request processed' })
}

module.exports = { loggerMiddleware, anotherFunction }
