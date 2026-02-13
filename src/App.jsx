import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
      <Login/>
      <Dashboard/>
    </>
  )
}

export default App;
