import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = () => {
      e.preventDefault()
      setUser({Username, Password})  
    }


  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username' />
        <input type="password"
        value={Password}
        onChange= {(e) => setPassword(e.target.value)}
         placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login