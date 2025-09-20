import React, { useState } from 'react'

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input className="w-full p-3 mb-3 border rounded-lg" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" className="w-full p-3 mb-3 border rounded-lg" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => onLogin?.({ email })} className="w-full bg-indigo-600 text-white py-2 rounded-lg">Login</button>
    </div>
  )
}