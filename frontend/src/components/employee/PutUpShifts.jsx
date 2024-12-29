import { useState } from 'react'

const PutUpShifts = () => {
  // Simulating the logged-in user's ID

  // Dummy data: shifts assigned to the logged-in user
  const initialShifts = [
    {
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      location: 'Office A',
      date: '2024-01-02',
      type: 'Assigned Based on Availability',
    },
    {
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      location: 'Office B',
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
      type: 'Assigned Based on Availability',
    },
  ]

  // State to manage shifts
  const [shifts, setShifts] = useState(initialShifts)

  // Function to "put up" a shift
  const handlePutUpShift = (index) => {
    const updatedShifts = [...shifts]
    updatedShifts.splice(index, 1) // Remove the shift from the list
    setShifts(updatedShifts)
    alert('Shift has been put up for someone to take!')
  }

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-6">Put Up Shifts</h1>
      <p className="mb-4 text-gray-700">
        Below are your shifts. If you can't make a shift, put it up for someone
        else to take.
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
          {shifts.length > 0 ? (
            shifts.map((shift, index) => (
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
                    onClick={() => handlePutUpShift(index)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Put Up Shift
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No shifts available to put up.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PutUpShifts
