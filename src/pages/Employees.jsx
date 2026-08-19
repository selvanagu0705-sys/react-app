import { useState } from 'react'
import {
  Search,
  SlidersHorizontal,
  Plus,
  MoreHorizontal,
  X,
  Eye,
  Pencil,
  Trash2,
} from 'lucide-react'

function Employees() {
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  const [employees, setEmployees] = useState([
    {
      id: 'EMP001',
      name: 'Arun Kumar',
      role: 'Frontend Developer',
      department: 'Engineering',
      email: 'arun.kumar@dilligen.com',
      status: 'Active',
      initials: 'AK',
    },
    {
      id: 'EMP002',
      name: 'Priya Sharma',
      role: 'HR Executive',
      department: 'Human Resources',
      email: 'priya.sharma@dilligen.com',
      status: 'Active',
      initials: 'PS',
    },
    {
      id: 'EMP003',
      name: 'Rahul Menon',
      role: 'Business Analyst',
      department: 'Finance',
      email: 'rahul.menon@dilligen.com',
      status: 'On Leave',
      initials: 'RM',
    },
    {
      id: 'EMP004',
      name: 'Meena Raj',
      role: 'UI/UX Designer',
      department: 'Design',
      email: 'meena.raj@dilligen.com',
      status: 'Active',
      initials: 'MR',
    },
    {
      id: 'EMP005',
      name: 'Vijay Kumar',
      role: 'DevOps Engineer',
      department: 'Engineering',
      email: 'vijay.kumar@dilligen.com',
      status: 'Active',
      initials: 'VK',
    },
    {
      id: 'EMP006',
      name: 'Divya Anand',
      role: 'Project Coordinator',
      department: 'Operations',
      email: 'divya.anand@dilligen.com',
      status: 'Active',
      initials: 'DA',
    },
  ])

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    department: 'Engineering',
    email: '',
  })

  const [editingEmployee, setEditingEmployee] = useState(null)
  const [viewingEmployee, setViewingEmployee] = useState(null)
  const [deletingEmployee, setDeletingEmployee] = useState(null)
  const [openMenu, setOpenMenu] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const openAddForm = () => {
    setEditingEmployee(null)

    setFormData({
      name: '',
      role: '',
      department: 'Engineering',
      email: '',
    })

    setShowForm(true)
  }

  const openEditForm = (employee) => {
    setEditingEmployee(employee)

    setFormData({
      name: employee.name,
      role: employee.role,
      department: employee.department,
      email: employee.email,
    })

    setOpenMenu(null)
    setShowForm(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nameParts = formData.name.trim().split(' ')

    const initials =
      nameParts.length > 1
        ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
        : nameParts[0][0]

    if (editingEmployee) {
      setEmployees((previous) =>
        previous.map((employee) =>
          employee.id === editingEmployee.id
            ? {
                ...employee,
                name: formData.name.trim(),
                role: formData.role.trim(),
                department: formData.department,
                email: formData.email.trim(),
                initials: initials.toUpperCase(),
              }
            : employee
        )
      )
    } else {
      const newEmployee = {
        id: `EMP${String(employees.length + 1).padStart(3, '0')}`,
        name: formData.name.trim(),
        role: formData.role.trim(),
        department: formData.department,
        email: formData.email.trim(),
        status: 'Active',
        initials: initials.toUpperCase(),
      }

      setEmployees((previous) => [newEmployee, ...previous])
    }

    setFormData({
      name: '',
      role: '',
      department: 'Engineering',
      email: '',
    })

    setEditingEmployee(null)
    setShowForm(false)
  }

  const handleDelete = () => {
    if (!deletingEmployee) return

    setEmployees((previous) =>
      previous.filter(
        (employee) => employee.id !== deletingEmployee.id
      )
    )

    setDeletingEmployee(null)
  }

  const filteredEmployees = employees.filter((employee) => {
    const search = searchTerm.toLowerCase()

    const matchesSearch =
      employee.name.toLowerCase().includes(search) ||
      employee.role.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search)

    const matchesDepartment =
      selectedDepartment === 'All' ||
      employee.department === selectedDepartment

    return matchesSearch && matchesDepartment
  })

  return (
    <div className="employees-page">
      <div className="page-heading">
        <div>
          <p className="page-eyebrow">WORKFORCE</p>

          <h2>Employees</h2>

          <p>Manage and view employee information.</p>
        </div>

        <button
          type="button"
          className="primary-action-button"
          onClick={openAddForm}
        >
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      {/* ADD / EDIT FORM */}

      {showForm && (
        <div className="employee-form-overlay">
          <div className="employee-form-card">
            <div className="form-card-header">
              <div>
                <p className="page-eyebrow">
                  {editingEmployee ? 'UPDATE RECORD' : 'NEW RECORD'}
                </p>

                <h3>
                  {editingEmployee
                    ? 'Edit Employee'
                    : 'Add Employee'}
                </h3>

                <p>
                  {editingEmployee
                    ? 'Update the employee information below.'
                    : 'Enter the employee details below.'}
                </p>
              </div>

              <button
                type="button"
                className="close-form-button"
                onClick={() => setShowForm(false)}
                aria-label="Close form"
              >
                <X size={19} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="employee-form">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="employee-name">Full Name</label>

                  <input
                    id="employee-name"
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="employee-email">
                    Email Address
                  </label>

                  <input
                    id="employee-email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="employee-role">Job Role</label>

                  <input
                    id="employee-role"
                    name="role"
                    type="text"
                    placeholder="e.g. Software Developer"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="employee-department">
                    Department
                  </label>

                  <select
                    id="employee-department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Finance</option>
                    <option>Design</option>
                    <option>Operations</option>
                    <option>Support</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-employee-button"
                >
                  {editingEmployee ? (
                    <>
                      <Pencil size={17} />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Plus size={17} />
                      Add Employee
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW DETAILS MODAL */}

      {viewingEmployee && (
        <div className="employee-form-overlay">
          <div className="employee-details-card">
            <div className="form-card-header">
              <div>
                <p className="page-eyebrow">EMPLOYEE PROFILE</p>
                <h3>Employee Details</h3>
              </div>

              <button
                type="button"
                className="close-form-button"
                onClick={() => setViewingEmployee(null)}
              >
                <X size={19} />
              </button>
            </div>

            <div className="employee-profile">
              <div className="large-employee-avatar">
                {viewingEmployee.initials}
              </div>

              <h3>{viewingEmployee.name}</h3>

              <p>{viewingEmployee.role}</p>

              <span className="status-badge active">
                <span></span>
                {viewingEmployee.status}
              </span>
            </div>

            <div className="employee-detail-grid">
              <div>
                <span>Employee ID</span>
                <strong>{viewingEmployee.id}</strong>
              </div>

              <div>
                <span>Department</span>
                <strong>{viewingEmployee.department}</strong>
              </div>

              <div>
                <span>Email Address</span>
                <strong>{viewingEmployee.email}</strong>
              </div>

              <div>
                <span>Job Role</span>
                <strong>{viewingEmployee.role}</strong>
              </div>
            </div>

            <div className="details-footer">
              <button
                type="button"
                className="cancel-button"
                onClick={() => setViewingEmployee(null)}
              >
                Close
              </button>

              <button
                type="button"
                className="save-employee-button"
                onClick={() => {
                  setViewingEmployee(null)
                  openEditForm(viewingEmployee)
                }}
              >
                <Pencil size={17} />
                Edit Employee
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION */}

      {deletingEmployee && (
        <div className="employee-form-overlay">
          <div className="delete-confirmation-card">
            <div className="delete-icon">
              <Trash2 size={22} />
            </div>

            <h3>Delete Employee?</h3>

            <p>
              Are you sure you want to remove{' '}
              <strong>{deletingEmployee.name}</strong> from the
              employee list?
            </p>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-button"
                onClick={() => setDeletingEmployee(null)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="delete-confirm-button"
                onClick={handleDelete}
              >
                <Trash2 size={16} />
                Delete Employee
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EMPLOYEE TABLE */}

      <section className="employee-management-panel">
        <div className="employee-toolbar">
          <div className="employee-search">
            <Search size={18} />

            <input
              type="search"
              placeholder="Search employees..."
              aria-label="Search employees"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="filter-wrapper">
            <SlidersHorizontal size={17} />

            <select
              value={selectedDepartment}
              onChange={(event) =>
                setSelectedDepartment(event.target.value)
              }
              aria-label="Filter by department"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">
                Human Resources
              </option>
              <option value="Finance">Finance</option>
              <option value="Design">Design</option>
              <option value="Operations">Operations</option>
              <option value="Support">Support</option>
            </select>
          </div>
        </div>

        <div className="employee-table-wrapper">
          <table className="employee-table full-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Role</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
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

                    <td>{employee.email}</td>

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

                    <td className="action-cell">
                      <button
                        type="button"
                        className="table-action-button"
                        aria-label={`Actions for ${employee.name}`}
                        onClick={() =>
                          setOpenMenu(
                            openMenu === employee.id
                              ? null
                              : employee.id
                          )
                        }
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === employee.id && (
                        <div className="employee-action-menu">
                          <button
                            type="button"
                            onClick={() => {
                              setViewingEmployee(employee)
                              setOpenMenu(null)
                            }}
                          >
                            <Eye size={16} />
                            View Details
                          </button>

                          <button
                            type="button"
                            onClick={() => openEditForm(employee)}
                          >
                            <Pencil size={16} />
                            Edit Employee
                          </button>

                          <button
                            type="button"
                            className="danger-menu-item"
                            onClick={() => {
                              setDeletingEmployee(employee)
                              setOpenMenu(null)
                            }}
                          >
                            <Trash2 size={16} />
                            Delete Employee
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      textAlign: 'center',
                      padding: '40px',
                      color: '#9ca3af',
                    }}
                  >
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>
            Showing {filteredEmployees.length} of {employees.length}{' '}
            employees
          </span>

          <div className="pagination">
            <button type="button" disabled>
              Previous
            </button>

            <button type="button" className="current-page">
              1
            </button>

            <button type="button">2</button>

            <button type="button">3</button>

            <button type="button">Next</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Employees