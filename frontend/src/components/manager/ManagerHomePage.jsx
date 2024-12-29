const ManagerHomePage = () => {
  return (
    <div className="p-5 font-sans">
      <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>
      <p className="mb-8 text-gray-700">
        Manage your teams schedules, shifts, and profiles efficiently.
      </p>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* View Profile */}
        <button className="px-4 py-3 bg-gray-500 text-white rounded shadow hover:bg-gray-600">
          View Profile
        </button>

        {/* View Schedule */}
        <button className="px-4 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          View Schedule
        </button>

        {/* View Employees */}
        <button className="px-4 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600">
          View Employees
        </button>

        {/* Shifts to Be Filled */}
        <button className="px-4 py-3 bg-red-500 text-white rounded shadow hover:bg-red-600">
          Open Shifts for Next Month
        </button>
      </div>
    </div>
  )
}

export default ManagerHomePage
