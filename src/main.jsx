// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './wagmi'
import AppShell from './AppShell'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <AppShell>
        <h2 className="text-2xl font-bold">Welcome to Freelancer Escrow MVP</h2>
        </AppShell>
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>
)