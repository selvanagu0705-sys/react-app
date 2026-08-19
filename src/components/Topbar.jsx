import { Bell, Search } from 'lucide-react'

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={18} strokeWidth={1.8} />

        <input
          type="text"
          placeholder="Search anything..."
          aria-label="Search"
        />
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="notification-button"
          aria-label="Notifications"
        >
          <Bell size={20} strokeWidth={1.8} />
          <span className="notification-dot"></span>
        </button>

        <div className="user-profile">
          <div className="user-avatar">AD</div>

          <div className="user-info">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar