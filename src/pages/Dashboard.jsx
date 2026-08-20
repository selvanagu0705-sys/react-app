import {
  Users,
  UserCheck,
  Clock3,
  Building2,
  ArrowRight,
} from 'lucide-react'
import StatCard from '../Components/Statcard'

function Dashboard() {
  const recentEmployees = [
    {
      id: 'EMP001',
      name: 'Arun Kumar',
      role: 'Frontend Developer',
      department: 'Engineering',
      status: 'Active',
      initials: 'AK',
    },
    {
      id: 'EMP002',
      name: 'Priya Sharma',
      role: 'HR Executive',
      department: 'Human Resources',
      status: 'Active',
      initials: 'PS',
    },
    {
      id: 'EMP003',
      name: 'Rahul Menon',
      role: 'Business Analyst',
      department: 'Finance',
      status: 'On Leave',
      initials: 'RM',
    },
    {
      id: 'EMP004',
      name: 'Meena Raj',
      role: 'UI/UX Designer',
      department: 'Design',
      status: 'Active',
      initials: 'MR',
    },
    {
      id: 'EMP005',
      name: 'Vijay Kumar',
      role: 'DevOps Engineer',
      department: 'Engineering',
      status: 'Active',
      initials: 'VK',
    },
  ]

  return (
    <div className="dashboard-page">
      <div className="page-heading">
        <div>
          <p className="page-eyebrow">OVERVIEW</p>
          <h2>Dashboard</h2>
          <p>Here&apos;s what&apos;s happening with your workforce today.</p>
        </div>

        <div className="date-display">
          <span>Today</span>
          <strong>August 19, 2026</strong>
        </div>
      </div>

      <section className="stats-grid">
        <StatCard
          title="Total Employees"
          value="128"
          description="Across all departments"
          trend="+8.2%"
          icon={Users}
        />

        <StatCard
          title="Active Employees"
          value="114"
          description="89.1% of total workforce"
          trend="+5.4%"
          icon={UserCheck}
        />

        <StatCard
          title="On Leave"
          value="08"
          description="Currently on leave"
          trend="-2.1%"
          icon={Clock3}
        />

        <StatCard
          title="Departments"
          value="06"
          description="Active departments"
          trend="+1"
          icon={Building2}
        />
      </section>

      <section className="analytics-panel">
  <div className="panel-header">
    <div>
      <h3>Workforce Analytics</h3>
      <p>Employee distribution across departments</p>
    </div>

    <div className="analytics-period">
      <span>2026</span>
    </div>
  </div>

  <div className="analytics-chart">
    <div className="chart-y-axis">
      <span>50</span>
      <span>40</span>
      <span>30</span>
      <span>20</span>
      <span>10</span>
      <span>0</span>
    </div>

    <div className="chart-area">
      <div className="chart-grid-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="chart-bars">
        <div className="chart-column">
          <div className="chart-bar" style={{ height: '84%' }}>
            <span>42</span>
          </div>
          <small>Engineering</small>
        </div>

        <div className="chart-column">
          <div className="chart-bar" style={{ height: '48%' }}>
            <span>24</span>
          </div>
          <small>Finance</small>
        </div>

        <div className="chart-column">
          <div className="chart-bar" style={{ height: '36%' }}>
            <span>18</span>
          </div>
          <small>HR</small>
        </div>

        <div className="chart-column">
          <div className="chart-bar" style={{ height: '32%' }}>
            <span>16</span>
          </div>
          <small>Design</small>
        </div>

        <div className="chart-column">
          <div className="chart-bar" style={{ height: '24%' }}>
            <span>12</span>
          </div>
          <small>Operations</small>
        </div>

        <div className="chart-column">
          <div className="chart-bar" style={{ height: '20%' }}>
            <span>10</span>
          </div>
          <small>Support</small>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="dashboard-content-grid">
        <div className="dashboard-panel employee-panel">
          <div className="panel-header">
            <div>
              <h3>Recent Employees</h3>
              <p>Recently added employee records</p>
            </div>

            <button type="button" className="view-all-button">
              View all
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="employee-table-wrapper">
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <div className="employee-name-cell">
                        <div className="employee-avatar">
                          {employee.initials}
                        </div>

                        <div>
                          <strong>{employee.name}</strong>
                          <span>{employee.id}</span>
                        </div>
                      </div>
                    </td>

                    <td>{employee.department}</td>
                    <td>{employee.role}</td>

                    <td>
                      <span
                        className={`status-badge ${
                          employee.status === 'Active'
                            ? 'active'
                            : 'leave'
                        }`}
                      >
                        <span></span>
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-panel department-panel">
          <div className="panel-header">
            <div>
              <h3>Departments</h3>
              <p>Workforce distribution</p>
            </div>
          </div>

          <div className="department-list">
            <div className="department-item">
              <div>
                <strong>Engineering</strong>
                <span>42 employees</span>
              </div>
              <b>33%</b>
            </div>

            <div className="department-progress">
              <span style={{ width: '72%' }}></span>
            </div>

            <div className="department-item">
              <div>
                <strong>Human Resources</strong>
                <span>18 employees</span>
              </div>
              <b>14%</b>
            </div>

            <div className="department-progress">
              <span style={{ width: '44%' }}></span>
            </div>

            <div className="department-item">
              <div>
                <strong>Finance</strong>
                <span>24 employees</span>
              </div>
              <b>19%</b>
            </div>

            <div className="department-progress">
              <span style={{ width: '52%' }}></span>
            </div>

            <div className="department-item">
              <div>
                <strong>Design</strong>
                <span>16 employees</span>
              </div>
              <b>13%</b>
            </div>

            <div className="department-progress">
              <span style={{ width: '38%' }}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard