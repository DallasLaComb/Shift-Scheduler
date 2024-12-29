const EmployeeHomePage = () => {
  return (
    <div className="p-5 font-sans">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to the Shift Scheduler
      </h1>
      <p className="mb-8 text-gray-700">
        Stay updated with important notifications and access helpful resources.
      </p>

      {/* Notifications Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-800">
            <strong>Shift Alert:</strong> Your shift on <em>2024-01-05</em> has
            been overridden by the manager.
          </li>
          <li className="text-gray-800">
            <strong>Open Shifts:</strong> New open shifts available for the next
            month. Check the "Take Other Shifts" tab.
          </li>
          <li className="text-gray-800">
            <strong>Submission Reminder:</strong> Don't forget to submit your
            availability for February by <em>2024-01-25</em>.
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-gray-100 rounded shadow p-4">
            <summary className="font-medium text-gray-700">
              How do I put up a shift for others to take?
            </summary>
            <p className="mt-2 text-gray-600">
              Navigate to the "Put Up Shifts" tab, select a shift, and click
              "Put Up Shift."
            </p>
          </details>
          <details className="bg-gray-100 rounded shadow p-4">
            <summary className="font-medium text-gray-700">
              How can I take an open shift?
            </summary>
            <p className="mt-2 text-gray-600">
              Go to the "Take Other Shifts" tab, browse available shifts, and
              click "Take Shift."
            </p>
          </details>
          <details className="bg-gray-100 rounded shadow p-4">
            <summary className="font-medium text-gray-700">
              How do I submit my availability?
            </summary>
            <p className="mt-2 text-gray-600">
              Open the "Submit Availability" tab, fill out your availability for
              the next month, and click "Submit Availability."
            </p>
          </details>
        </div>
      </div>

      {/* How-To Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How-To Guides</h2>
        <div className="space-y-4">
          <div className="bg-blue-100 rounded shadow p-4">
            <h3 className="font-medium text-blue-700">
              Setting Up Notifications
            </h3>
            <p className="text-gray-600">
              Learn how to set up email and SMS alerts for your shifts and
              availability updates.
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
          <div className="bg-blue-100 rounded shadow p-4">
            <h3 className="font-medium text-blue-700">
              Understanding Shift Overrides
            </h3>
            <p className="text-gray-600">
              Find out what happens when a manager overrides your availability
              or shifts.
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
          <div className="bg-blue-100 rounded shadow p-4">
            <h3 className="font-medium text-blue-700">
              Submitting Availability
            </h3>
            <p className="text-gray-600">
              Step-by-step guide to submitting your monthly availability.
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeHomePage
