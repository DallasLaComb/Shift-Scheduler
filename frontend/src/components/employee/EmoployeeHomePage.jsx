const EmployeeHomePage = () => {
  return (
    <div className="p-5 font-sans">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to the Shift Scheduler
      </h1>
      <p className="mb-8 text-gray-700">
        Easily manage your schedule, shifts, and availability in one place.
      </p>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* View Schedule */}
        <button className="px-4 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          View Schedule
        </button>

        {/* Put Up Shifts */}
        <button className="px-4 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600">
          Put Up Shifts
        </button>

        {/* Take Other Shifts */}
        <button className="px-4 py-3 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600">
          Take Other Shifts
        </button>

        {/* Submit Availability */}
        <button className="px-4 py-3 bg-purple-500 text-white rounded shadow hover:bg-purple-600">
          Submit Availability
        </button>

        {/* View Profile */}
        <button className="px-4 py-3 bg-gray-500 text-white rounded shadow hover:bg-gray-600">
          View Profile
        </button>
      </div>
    </div>
  )
}

export default EmployeeHomePage
