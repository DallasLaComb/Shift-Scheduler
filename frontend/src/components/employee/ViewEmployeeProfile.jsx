import { useState } from 'react'

const ViewEmployeeProfile = () => {
  // Simulated profile data
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
  })

  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate API call or form submission
    alert('Profile updated successfully!')
    setIsEditing(false) // Exit edit mode
  }

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-6">View Employee Profile</h1>
      <p className="mb-4 text-gray-700">Manage your profile details below.</p>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-1 p-2 block w-full border ${
              isEditing ? 'border-gray-300' : 'border-transparent'
            } rounded shadow-sm ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-1 p-2 block w-full border ${
              isEditing ? 'border-gray-300' : 'border-transparent'
            } rounded shadow-sm ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-1 p-2 block w-full border ${
              isEditing ? 'border-gray-300' : 'border-transparent'
            } rounded shadow-sm ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-1 p-2 block w-full border ${
              isEditing ? 'border-gray-300' : 'border-transparent'
            } rounded shadow-sm ${isEditing ? 'bg-white' : 'bg-gray-100'}`}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default ViewEmployeeProfile
