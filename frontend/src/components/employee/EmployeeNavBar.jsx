import { NavLink } from 'react-router-dom'

const EmployeeNavbar = () => {
  return (
    <nav className="bg-blue-500 text-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <NavLink to="/EmployeeHomePage" className="hover:text-gray-200">
            Shift Scheduler
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <NavLink
            to="/ViewSchedulePage"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
            }
          >
            View Schedule
          </NavLink>
          <NavLink
            to="/PutUpShifts"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
            }
          >
            Put Up Shifts
          </NavLink>
          <NavLink
            to="/TakeOtherShifts"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
            }
          >
            Take Other Shifts
          </NavLink>
          <NavLink
            to="/SubmitAvailabilityPage"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
            }
          >
            Submit Availability
          </NavLink>
          <NavLink
            to="/ViewEmployeeProfile"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-semibold' : 'hover:text-gray-200'
            }
          >
            View Profile
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default EmployeeNavbar
