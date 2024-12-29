import { useState } from 'react'

const SubmitAvailabilityPage = () => {
  const [availability, setAvailability] = useState([])

  // State for new availability entry
  const [newEntry, setNewEntry] = useState({
    date: '',
    startTime: '',
    endTime: '',
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewEntry((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Add availability entry
  const handleAddEntry = () => {
    if (newEntry.date && newEntry.startTime && newEntry.endTime) {
      setAvailability((prev) => [...prev, newEntry])
      setNewEntry({ date: '', startTime: '', endTime: '' }) // Reset form
    } else {
      alert('Please fill in all fields.')
    }
  }

  // Handle submission
  const handleSubmit = () => {
    if (availability.length > 0) {
      console.log('Submitted Availability:', availability)
      alert('Your availability has been submitted successfully!')
      setAvailability([]) // Clear the list after submission
    } else {
      alert('Please add at least one availability entry before submitting.')
    }
  }

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-6">Submit Availability</h1>
      <p className="mb-4 text-gray-700">
        Select your availability for the next month and submit it below.
      </p>

      {/* Form for Adding Availability */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Availability</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={newEntry.date}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              value={newEntry.startTime}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Time
            </label>
            <input
              type="time"
              name="endTime"
              value={newEntry.endTime}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm"
            />
          </div>
        </div>
        <button
          onClick={handleAddEntry}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Availability
        </button>
      </div>

      {/* Display Added Availability */}
      {availability.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Availability</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Start Time</th>
                <th className="border border-gray-300 px-4 py-2">End Time</th>
              </tr>
            </thead>
            <tbody>
              {availability.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {entry.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {entry.startTime}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {entry.endTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Submit Availability
      </button>
    </div>
  )
}

export default SubmitAvailabilityPage
