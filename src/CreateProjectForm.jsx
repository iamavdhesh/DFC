import React, { useState } from 'react'

export default function CreateProjectForm({ onCreate }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [budget, setBudget] = useState('')
  const [freelancer, setFreelancer] = useState('')

  return (
    <div className="max-w-2xl bg-white p-6 rounded-2xl shadow mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Project title" className="w-full p-3 mb-3 border rounded-lg" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full p-3 mb-3 border rounded-lg" />
      <input value={budget} onChange={e => setBudget(e.target.value)} placeholder="Budget (USDT)" className="w-full p-3 mb-3 border rounded-lg" />
      <input value={freelancer} onChange={e => setFreelancer(e.target.value)} placeholder="Freelancer address" className="w-full p-3 mb-3 border rounded-lg" />
      <button onClick={() => onCreate?.({ title, description, budget, freelancer })} className="w-full bg-indigo-600 text-white py-2 rounded-lg">Create</button>
    </div>
  )
}