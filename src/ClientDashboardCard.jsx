export function ClientDashboardCard({ project, onRelease, onRefund }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-500">Freelancer: {project.freelancer}</p>
        <p className="mt-2 font-medium">Budget: {project.amount} USDT</p>
      </div>
      <div className="flex gap-3">
        <button onClick={() => onRelease?.(project.id)} className="px-4 py-2 rounded-lg bg-green-600 text-white">Release</button>
        <button onClick={() => onRefund?.(project.id)} className="px-4 py-2 rounded-lg bg-red-600 text-white">Refund</button>
      </div>
    </div>
  )
}