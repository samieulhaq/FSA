import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('http://localhost:3001/api/message')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(err => console.error("Error Fetching message", err));
  }, []);

  return (
    <>
        <h1>Welcome to Vite</h1>
        <p>
          Test Zone {message}
        </p>
    </>
  )
}

export default App
