import React, { useState, useEffect } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

function App() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetch(`${API_BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setMessages(data.data)
        } else {
          console.error('Unexpected data format:', data)
        }
      })
      .catch((error) => console.error('Error fetching messages:', error))
  }, [])

  const handleInputChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!newMessage.trim()) {
      console.error('Message is required')
      return
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage }),
    }

    fetch(`${API_BASE_URL}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        if (data.success) {
          setMessages((prevMessages) => [...prevMessages, data.data])
          setNewMessage('')
        } else {
          console.error('Error creating message:', data.error)
        }
      })
      .catch((error) => {
        console.error('Error creating message:', error)
      })
  }

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Enter your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App
