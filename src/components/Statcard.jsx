import { ArrowUpRight } from 'lucide-react'

function StatCard({ title, value, description, icon: Icon, trend }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon">
          <Icon size={21} strokeWidth={1.8} />
        </div>

        <span className="stat-trend">
          <ArrowUpRight size={14} />
          {trend}
        </span>
      </div>

      <div className="stat-content">
        <p>{title}</p>
        <h3>{value}</h3>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default StatCard