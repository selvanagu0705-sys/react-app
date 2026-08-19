import { useState } from 'react'
import {
  Users,
  UserRound,
  ArrowUpRight,
  Building2,
  X,
  Mail,
  Search,
  SlidersHorizontal,
} from 'lucide-react'

const departments = [
  {
    name: 'Engineering',
    description: 'Product development and technology',
    lead: 'Arun Kumar',
    employees: 42,
    active: 38,
    initials: 'EN',
    team: [
      { name: 'Arun Kumar', role: 'Engineering Lead', email: 'arun@dilligen.com', status: 'Active' },
      { name: 'Karthik Raj', role: 'Senior Software Engineer', email: 'karthik@dilligen.com', status: 'Active' },
      { name: 'Anitha Devi', role: 'Software Engineer', email: 'anitha@dilligen.com', status: 'Active' },
      { name: 'Sanjay Kumar', role: 'Frontend Developer', email: 'sanjay@dilligen.com', status: 'On Leave' },
      { name: 'Meera S', role: 'QA Engineer', email: 'meera@dilligen.com', status: 'Active' },
    ],
  },
  {
    name: 'Human Resources',
    description: 'People, culture and employee experience',
    lead: 'Priya Sharma',
    employees: 24,
    active: 22,
    initials: 'HR',
    team: [
      { name: 'Priya Sharma', role: 'HR Lead', email: 'priya@dilligen.com', status: 'Active' },
      { name: 'Divya Raj', role: 'HR Executive', email: 'divya@dilligen.com', status: 'Active' },
      { name: 'Rahul Dev', role: 'Recruitment Specialist', email: 'rahul@dilligen.com', status: 'Active' },
      { name: 'Keerthana S', role: 'HR Coordinator', email: 'keerthana@dilligen.com', status: 'On Leave' },
    ],
  },
  {
    name: 'Finance',
    description: 'Financial planning and operations',
    lead: 'Rahul Menon',
    employees: 18,
    active: 16,
    initials: 'FI',
    team: [
      { name: 'Rahul Menon', role: 'Finance Lead', email: 'rahul.menon@dilligen.com', status: 'Active' },
      { name: 'Suresh Kumar', role: 'Financial Analyst', email: 'suresh@dilligen.com', status: 'Active' },
      { name: 'Lakshmi Priya', role: 'Accountant', email: 'lakshmi@dilligen.com', status: 'Active' },
      { name: 'Vignesh R', role: 'Finance Executive', email: 'vignesh@dilligen.com', status: 'On Leave' },
    ],
  },
  {
    name: 'Design',
    description: 'Creative and user experience',
    lead: 'Meena Raj',
    employees: 16,
    active: 15,
    initials: 'DE',
    team: [
      { name: 'Meena Raj', role: 'Design Lead', email: 'meena@dilligen.com', status: 'Active' },
      { name: 'Harini S', role: 'UI/UX Designer', email: 'harini@dilligen.com', status: 'Active' },
      { name: 'Naveen Kumar', role: 'Product Designer', email: 'naveen@dilligen.com', status: 'Active' },
      { name: 'Aishwarya R', role: 'Visual Designer', email: 'aishwarya@dilligen.com', status: 'Active' },
    ],
  },
  {
    name: 'Operations',
    description: 'Business operations and coordination',
    lead: 'Divya Anand',
    employees: 18,
    active: 16,
    initials: 'OP',
    team: [
      { name: 'Divya Anand', role: 'Operations Lead', email: 'divya.anand@dilligen.com', status: 'Active' },
      { name: 'Mohan Raj', role: 'Operations Executive', email: 'mohan@dilligen.com', status: 'Active' },
      { name: 'Deepa S', role: 'Operations Coordinator', email: 'deepa@dilligen.com', status: 'Active' },
      { name: 'Ajay Kumar', role: 'Process Executive', email: 'ajay@dilligen.com', status: 'On Leave' },
    ],
  },
  {
    name: 'Support',
    description: 'Customer and technical support',
    lead: 'Vijay Kumar',
    employees: 10,
    active: 7,
    initials: 'SU',
    team: [
      { name: 'Vijay Kumar', role: 'Support Lead', email: 'vijay@dilligen.com', status: 'Active' },
      { name: 'Ramesh S', role: 'Technical Support Engineer', email: 'ramesh@dilligen.com', status: 'Active' },
      { name: 'Pooja Devi', role: 'Customer Support Executive', email: 'pooja@dilligen.com', status: 'Active' },
      { name: 'Manoj K', role: 'Support Executive', email: 'manoj@dilligen.com', status: 'On Leave' },
    ],
  },
]

function Departments() {
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('All')

  const totalEmployees = departments.reduce(
    (total, department) => total + department.employees,
    0
  )

  const totalActive = departments.reduce(
    (total, department) => total + department.active,
    0
  )

  const filteredDepartments = departments.filter((department) => {
    const matchesSearch =
      department.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.lead.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      selectedFilter === 'All' ||
      department.name === selectedFilter

    return matchesSearch && matchesFilter
  })

  const closeTeamModal = () => {
    setSelectedDepartment(null)
  }

  return (
    <div className="departments-page">
      <div className="page-heading">
        <div>
          <p className="page-eyebrow">ORGANIZATION</p>

          <h2>Departments</h2>

          <p>
            Explore teams and workforce distribution across the
            organization.
          </p>
        </div>

        <div className="department-total-badge">
          <Building2 size={17} />
          {departments.length} Departments
        </div>
      </div>

      <div className="department-summary">
        <div className="department-summary-card">
          <div className="summary-icon">
            <Building2 size={18} />
          </div>

          <div>
            <span>Total Departments</span>
            <strong>{departments.length}</strong>
          </div>
        </div>

        <div className="department-summary-card">
          <div className="summary-icon">
            <Users size={18} />
          </div>

          <div>
            <span>Total Employees</span>
            <strong>{totalEmployees}</strong>
          </div>
        </div>

        <div className="department-summary-card">
          <div className="summary-icon">
            <UserRound size={18} />
          </div>

          <div>
            <span>Active Workforce</span>
            <strong>{totalActive}</strong>
          </div>
        </div>
      </div>

      <section className="department-section">
        <div className="section-heading">
          <div>
            <h3>All Departments</h3>
            <p>Current workforce overview by department</p>
          </div>
        </div>

        <div className="department-toolbar">
          <div className="department-search">
            <Search size={15} />

            <input
              type="text"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="department-filter">
            <SlidersHorizontal size={14} />

            <select
              value={selectedFilter}
              onChange={(event) =>
                setSelectedFilter(event.target.value)
              }
            >
              <option value="All">All Departments</option>

              {departments.map((department) => (
                <option
                  key={department.name}
                  value={department.name}
                >
                  {department.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredDepartments.length > 0 ? (
          <div className="department-grid">
            {filteredDepartments.map((department) => {
              const activePercentage = Math.round(
                (department.active / department.employees) * 100
              )

              return (
                <article
                  className="department-card"
                  key={department.name}
                >
                  <div className="department-card-top">
                    <div className="department-icon">
                      {department.initials}
                    </div>

                    <button
                      type="button"
                      className="department-arrow"
                      aria-label={`View ${department.name}`}
                      onClick={() =>
                        setSelectedDepartment(department)
                      }
                    >
                      <ArrowUpRight size={17} />
                    </button>
                  </div>

                  <h3>{department.name}</h3>

                  <p className="department-description">
                    {department.description}
                  </p>

                  <div className="department-lead">
                    <div className="lead-avatar">
                      {department.lead
                        .split(' ')
                        .map((name) => name[0])
                        .join('')}
                    </div>

                    <div>
                      <span>Department Lead</span>
                      <strong>{department.lead}</strong>
                    </div>
                  </div>

                  <div className="department-stats">
                    <div>
                      <span>Employees</span>
                      <strong>{department.employees}</strong>
                    </div>

                    <div>
                      <span>Active</span>
                      <strong>{department.active}</strong>
                    </div>

                    <div>
                      <span>Rate</span>
                      <strong>{activePercentage}%</strong>
                    </div>
                  </div>

                  <div className="department-progress">
                    <div
                      style={{
                        width: `${activePercentage}%`,
                      }}
                    ></div>
                  </div>

                  <button
                    type="button"
                    className="view-team-button"
                    onClick={() =>
                      setSelectedDepartment(department)
                    }
                  >
                    View Team
                    <ArrowUpRight size={15} />
                  </button>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="department-empty-state">
            <div className="empty-state-icon">
              <Search size={20} />
            </div>

            <h3>No departments found</h3>

            <p>
              Try changing your search or department filter.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm('')
                setSelectedFilter('All')
              }}
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {selectedDepartment && (
        <div
          className="team-modal-overlay"
          onClick={closeTeamModal}
        >
          <div
            className="team-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="team-modal-header">
              <div>
                <p className="page-eyebrow">DEPARTMENT TEAM</p>

                <h3>{selectedDepartment.name}</h3>

                <p>{selectedDepartment.description}</p>
              </div>

              <button
                type="button"
                className="team-modal-close"
                onClick={closeTeamModal}
                aria-label="Close team details"
              >
                <X size={18} />
              </button>
            </div>

            <div className="team-modal-summary">
              <div>
                <span>Total Employees</span>
                <strong>{selectedDepartment.employees}</strong>
              </div>

              <div>
                <span>Active</span>
                <strong>{selectedDepartment.active}</strong>
              </div>

              <div>
                <span>Department Lead</span>
                <strong>{selectedDepartment.lead}</strong>
              </div>
            </div>

            <div className="team-list-header">
              <h4>Team Members</h4>
              <span>{selectedDepartment.team.length} shown</span>
            </div>

            <div className="team-list">
              {selectedDepartment.team.map((employee) => (
                <div
                  className="team-member"
                  key={employee.email}
                >
                  <div className="team-member-avatar">
                    {employee.name
                      .split(' ')
                      .map((name) => name[0])
                      .join('')}
                  </div>

                  <div className="team-member-info">
                    <strong>{employee.name}</strong>
                    <span>{employee.role}</span>
                  </div>

                  <div className="team-member-email">
                    <Mail size={13} />
                    <span>{employee.email}</span>
                  </div>

                  <span
                    className={`team-status ${
                      employee.status === 'Active'
                        ? 'active'
                        : 'leave'
                    }`}
                  >
                    {employee.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="team-modal-footer">
              <button
                type="button"
                className="cancel-button"
                onClick={closeTeamModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Departments