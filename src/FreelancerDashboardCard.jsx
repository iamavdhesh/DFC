export function FreelancerDashboardCard({ project }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-500">Client: {project.client}</p>
        <p className="mt-2 font-medium">Budget: {project.amount} USDT</p>
      </div>
      <div>
        <span className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-700">Funded</span>
      </div>
    </div>
  )
}