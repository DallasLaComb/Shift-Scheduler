const ViewSchedulePage = () => {
  // Simulating the logged-in user's ID and name
  const loggedInUserId = 1

  // Dummy schedule data
  const scheduleData = [
    {
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      location: 'Office A',
      date: '2024-01-02',
      type: 'Taken Shift',
    },
    {
      userId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      startTime: '11:00 AM',
      endTime: '07:00 PM',
      location: 'Office B',
      date: '2024-01-03',
      type: 'Overridden Availability',
    },
    {
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      location: 'Office A',
      date: '2024-01-04',
      type: 'Assigned Based on Availability',
    },
    {
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      startTime: '10:00 AM',
      endTime: '06:00 PM',
      location: 'Office C',
      date: '2024-01-05',
      type: 'Overridden Availability',
    },
  ]

  // Filter schedule data for the logged-in user
  const filteredSchedule = scheduleData.filter(
    (shift) => shift.userId === loggedInUserId,
  )

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-6">Your Schedule</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Start Time</th>
            <th className="border border-gray-300 px-4 py-2">End Time</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredSchedule.map((shift, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">
                {shift.firstName} {shift.lastName}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {shift.startTime}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {shift.endTime}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {shift.location}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {shift.date}
              </td>
              <td
                className={`border border-gray-300 px-4 py-2 text-center ${getTypeColor(
                  shift.type,
                )}`}
              >
                {shift.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Helper function to apply colors based on the shift type
const getTypeColor = (type) => {
  switch (type) {
    case 'Taken Shift':
      return 'text-blue-500'
    case 'Overridden Availability':
      return 'text-red-500'
    case 'Assigned Based on Availability':
      return 'text-green-500'
    default:
      return ''
  }
}

export default ViewSchedulePage
