import { useState } from 'react'

const TakeOtherShifts = () => {
  // Dummy data: Shifts put up by other employees
  const initialShifts = [
    {
      userId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      location: 'Office A',
      date: '2024-01-03',
      type: 'Taken Shift',
    },
    {
      userId: 3,
      firstName: 'Emily',
      lastName: 'Johnson',
      startTime: '10:00 AM',
      endTime: '06:00 PM',
      location: 'Office B',
      date: '2024-01-04',
      type: 'Assigned Based on Availability',
    },
    {
      userId: 4,
      firstName: 'Michael',
      lastName: 'Brown',
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      location: 'Office C',
      date: '2024-01-05',
      type: 'Overridden Availability',
    },
  ]

  // State to manage available shifts
  const [availableShifts, setAvailableShifts] = useState(initialShifts)

  // Function to "take" a shift
  const handleTakeShift = (index) => {
    const updatedShifts = [...availableShifts]
    updatedShifts.splice(index, 1) // Remove the taken shift
    setAvailableShifts(updatedShifts)
    alert('You have successfully taken the shift!')
  }

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-6">Take Other Shifts</h1>
      <p className="mb-4 text-gray-700">
        Below are shifts that other employees have put up. Select a shift to
        take it.
      </p>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Start Time</th>
            <th className="border border-gray-300 px-4 py-2">End Time</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {availableShifts.length > 0 ? (
            availableShifts.map((shift, index) => (
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
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleTakeShift(index)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Take Shift
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No shifts are currently available to take.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TakeOtherShifts
