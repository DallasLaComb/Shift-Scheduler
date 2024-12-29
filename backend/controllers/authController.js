import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User } from '../models/userModel.js'
import 'dotenv/config'

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body

      // Find user in the database
      const user = await User.findOne({ where: { email } })
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' })
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' })
      }

      // Generate JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        },
      )

      return res.status(200).json({ token })
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Server error', error: error.message })
    }
  },

  register: async (req, res) => {
    try {
      const { email, password } = req.body

      // Check if user already exists
      const existingUser = await User.findOne({ where: { email } })
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' })
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10)

      // Create new user
      const newUser = await User.create({ email, password: hashedPassword })

      return res
        .status(201)
        .json({ message: 'User registered successfully', user: newUser })
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Server error', error: error.message })
    }
  },

  validateToken: (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      return res.status(200).json({ message: 'Token is valid', user: decoded })
    } catch (error) {
      return res
        .status(401)
        .json({ message: 'Invalid token', error: error.message })
    }
  },

  logout: (req, res) => {
    // If using tokens, "logging out" is typically handled on the client-side by removing the token
    // Optionally, implement token blacklisting here for added security
    return res.status(200).json({ message: 'Logged out successfully' })
  },
}

export default authController
