import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/global/RegisterPage'
import Login from './components/global/LoginPage'
import EmployeeHomePage from './components/employee/EmoployeeHomePage'
import ManagerHomePage from './components/manager/ManagerHomePage'
import ViewSchedulePage from './components/employee/ViewSchedulePage'
import PutUpShifts from './components/employee/PutUpShifts'
import TakeOtherShifts from './components/employee/TakeOtherShifts'
import SubmitAvailabilityPage from './components/employee/SubmitAvailabilityPage'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* global */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Employees */}
          <Route path="/EmployeeHomePage" element={<EmployeeHomePage />} />
          <Route path="/ViewSchedulePage" element={<ViewSchedulePage />} />
          <Route path="/PutUpShifts" element={<PutUpShifts />} />
          <Route path="/TakeOtherShifts" element={<TakeOtherShifts />} />
          <Route
            path="/SubmitAvailabilityPage"
            element={<SubmitAvailabilityPage />}
          />
          {/* Managers */}

          <Route path="/ManagerHomePage" element={<ManagerHomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
