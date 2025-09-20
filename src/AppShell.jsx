// src/AppShell.jsx
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

export default function AppShell({ children }) {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: injected})
  const { disconnect } = useDisconnect()

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4 font-bold text-xl">Freelancer Escrow</div>
        <nav className="px-4">
          <ul className="space-y-2">
            <li><a href="/" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
            <li><a href="/dashboard" className="block p-2 hover:bg-gray-100 rounded">Dashboard</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex flex-col flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Freelancer Escrow</h1>
          <div>
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </span>
                <button
                  onClick={() => disconnect()}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={() => connect()}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </header>

        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
