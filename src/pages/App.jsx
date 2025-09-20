import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppShell from '../AppShell'
import LoginForm from '../LoginForm'
import SignupForm from '../SignupForm'
import CreateProjectForm from '../CreateProjectForm'
import { ClientDashboardCard } from '../ClientDashboardCard'
import { FreelancerDashboardCard } from '../FreelancerDashboardCard'

export default function App() {
  const dummyProject = { id: 1, title: "Website Redesign", freelancer: "0x123..abc", client: "0x456..def", amount: 500 }

  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<h2 className="text-2xl font-bold">Welcome to Freelancer Escrow MVP</h2>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <ClientDashboardCard project={dummyProject} />
            <FreelancerDashboardCard project={dummyProject} />
            <CreateProjectForm />
          </div>
        } />
      </Routes>
    </AppShell>
  )
}