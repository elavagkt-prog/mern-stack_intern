
import React, { useState } from 'react'
import { Button } from './ui/button'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()

    if (email === '' || password === '') {
      alert('Please enter email and password')
    } else {
      alert('Login Successful!')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">
          Lost & Found Portal
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <form onSubmit={handleLogin}>

          <label className="font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded mt-2 mb-4"
          />

          <label className="font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded mt-2 mb-5"
          />

          <Button type="submit" className="w-full bg-blue-600">
            Login
          </Button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account? <span className="text-blue-600 cursor-pointer">Register</span>
        </p>

      </div>
    </div>
  )
}

export default Login
