import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/global/RegisterPage'
import Login from './components/global/LoginPage'
import EmployeeHomePage from './components/employee/EmoployeeHomePage'
import ManagerHomePage from './components/manager/ManagerHomePage'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<h1>Hello, World!</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/EmployeeHomePage" element={<EmployeeHomePage />} />
          <Route path="/ManagerHomePage" element={<ManagerHomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
