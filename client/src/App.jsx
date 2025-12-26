import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './auth/Login'
import Navbar from './auth/NavBar'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/api/check_session').then(r => {
      if (r.ok) {
        r.json().then(u => setUser(u))
      }
    })
  }, [])

  function logout() {
    setUser(null)
  }

  if (user) {
    return <div>
      <Navbar onLogout={logout} />
      <h2>Welcome, {user.username}!</h2>
    </div>
  } else {
    return <Login onLogin={setUser} />
  }
}

export default App
