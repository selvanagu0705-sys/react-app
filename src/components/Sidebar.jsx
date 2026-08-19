import {
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  LogOut,
} from 'lucide-react'

function Sidebar({ activePage, setActivePage, onLogout }) {
  const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Employees',
      icon: Users,
    },
    {
      name: 'Departments',
      icon: Building2,
    },
    {
      name: 'Settings',
      icon: Settings,
    },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">DT</div>

        <div>
          <h1>Dilligen Technology</h1>
          <span>Employee Hub</span>
        </div>
      </div>

      <nav className="sidebar-navigation">
        <p className="navigation-label">MAIN MENU</p>

        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.name}
              type="button"
              className={`navigation-item ${
                activePage === item.name ? 'active' : ''
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.name}</span>
            </button>
          )
        })}
      </nav>

      <div className="sidebar-bottom">
        <button
          type="button"
          className="navigation-item logout-button"
          onClick={onLogout}
        >
          <LogOut size={19} strokeWidth={1.8} />
          <span>Logout</span>
        </button>

        <div className="sidebar-version">
          <span>Employee Hub</span>
          <small>Version 1.0.0</small>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar