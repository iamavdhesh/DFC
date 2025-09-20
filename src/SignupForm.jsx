import React, { useState } from 'react'

export default function SignupForm({ onSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('client')

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <input className="w-full p-3 mb-3 border rounded-lg" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" className="w-full p-3 mb-3 border rounded-lg" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <select className="w-full p-3 mb-3 border rounded-lg" value={role} onChange={e => setRole(e.target.value)}>
        <option value="client">Client</option>
        <option value="freelancer">Freelancer</option>
      </select>
      <button onClick={() => onSignup?.({ email, role })} className="w-full bg-indigo-600 text-white py-2 rounded-lg">Signup</button>
    </div>
  )
}