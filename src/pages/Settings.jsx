import { useState } from 'react'
import {
  User,
  Bell,
  Shield,
  Palette,
  Save,
} from 'lucide-react'

function Settings({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState('profile')

  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@dilligen.com',
    role: 'Administrator',
  })

  const [notifications, setNotifications] = useState({
    email: true,
    employee: true,
    system: false,
  })

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [showPasswordForm, setShowPasswordForm] = useState(false)

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleProfileChange = (event) => {
    const { name, value } = event.target

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleNotificationChange = (name) => {
    setNotifications((previous) => ({
      ...previous,
      [name]: !previous[name],
    }))
  }

  const handlePasswordChange = (event) => {
    const { name, value } = event.target

    setPasswordData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSave = () => {
    alert('Settings saved successfully.')
  }

  const handlePasswordSubmit = (event) => {
    event.preventDefault()

    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      alert('New password and confirm password do not match.')
      return
    }

    alert('Password updated successfully.')

    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    })

    setShowPasswordForm(false)
  }

  const handleTwoFactor = () => {
    if (twoFactorEnabled) {
      const confirmDisable = window.confirm(
        'Are you sure you want to disable two-factor authentication?'
      )

      if (confirmDisable) {
        setTwoFactorEnabled(false)
        alert('Two-factor authentication disabled.')
      }
    } else {
      setTwoFactorEnabled(true)
      alert('Two-factor authentication enabled.')
    }
  }

  return (
    <div className="settings-page">

      {/* PAGE HEADING */}

      <div className="page-heading">
        <div>
          <p className="page-eyebrow">SYSTEM</p>

          <h2>Settings</h2>

          <p>
            Manage your account, preferences and system settings.
          </p>
        </div>
      </div>

      <div className="settings-layout">

        {/* SETTINGS NAVIGATION */}

        <aside className="settings-sidebar">

          <button
            type="button"
            className={
              activeSection === 'profile'
                ? 'settings-nav-item active'
                : 'settings-nav-item'
            }
            onClick={() => setActiveSection('profile')}
          >
            <User size={17} />

            <div>
              <strong>Profile</strong>
              <span>Personal information</span>
            </div>
          </button>

          <button
            type="button"
            className={
              activeSection === 'notifications'
                ? 'settings-nav-item active'
                : 'settings-nav-item'
            }
            onClick={() => setActiveSection('notifications')}
          >
            <Bell size={17} />

            <div>
              <strong>Notifications</strong>
              <span>Manage notifications</span>
            </div>
          </button>

          <button
            type="button"
            className={
              activeSection === 'security'
                ? 'settings-nav-item active'
                : 'settings-nav-item'
            }
            onClick={() => setActiveSection('security')}
          >
            <Shield size={17} />

            <div>
              <strong>Security</strong>
              <span>Account security</span>
            </div>
          </button>

          <button
            type="button"
            className={
              activeSection === 'appearance'
                ? 'settings-nav-item active'
                : 'settings-nav-item'
            }
            onClick={() => setActiveSection('appearance')}
          >
            <Palette size={17} />

            <div>
              <strong>Appearance</strong>
              <span>Display preferences</span>
            </div>
          </button>

        </aside>

        {/* SETTINGS CONTENT */}

        <section className="settings-content">

          {/* PROFILE */}

          {activeSection === 'profile' && (
            <div className="settings-card">

              <div className="settings-card-header">
                <div>
                  <h3>Profile Information</h3>

                  <p>
                    Update your personal account information.
                  </p>
                </div>
              </div>

              <div className="settings-profile">

                <div className="settings-avatar">
                  AU
                </div>

                <div>
                  <strong>{profile.name}</strong>
                  <span>{profile.role}</span>
                </div>

              </div>

              <div className="settings-form">

                <div className="settings-form-row">

                  <div className="settings-field">
                    <label htmlFor="settings-name">
                      Full Name
                    </label>

                    <input
                      id="settings-name"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="settings-field">
                    <label htmlFor="settings-email">
                      Email Address
                    </label>

                    <input
                      id="settings-email"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                    />
                  </div>

                </div>

                <div className="settings-field">
                  <label htmlFor="settings-role">
                    Role
                  </label>

                  <input
                    id="settings-role"
                    name="role"
                    value={profile.role}
                    onChange={handleProfileChange}
                  />
                </div>

              </div>

              <div className="settings-card-footer">

                <button
                  type="button"
                  className="save-settings-button"
                  onClick={handleSave}
                >
                  <Save size={16} />
                  Save Changes
                </button>

              </div>

            </div>
          )}

          {/* NOTIFICATIONS */}

          {activeSection === 'notifications' && (
            <div className="settings-card">

              <div className="settings-card-header">
                <div>
                  <h3>Notification Preferences</h3>

                  <p>
                    Choose which notifications you want to receive.
                  </p>
                </div>
              </div>

              <div className="settings-options">

                <div className="settings-option">
                  <div>
                    <strong>Email Notifications</strong>

                    <span>
                      Receive important updates through email.
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={() =>
                      handleNotificationChange('email')
                    }
                  />
                </div>

                <div className="settings-option">
                  <div>
                    <strong>Employee Updates</strong>

                    <span>
                      Get notified when employee records change.
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={notifications.employee}
                    onChange={() =>
                      handleNotificationChange('employee')
                    }
                  />
                </div>

                <div className="settings-option">
                  <div>
                    <strong>System Notifications</strong>

                    <span>
                      Receive system and maintenance updates.
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={notifications.system}
                    onChange={() =>
                      handleNotificationChange('system')
                    }
                  />
                </div>

              </div>

            </div>
          )}

          {/* SECURITY */}

          {activeSection === 'security' && (
            <div className="settings-card">

              <div className="settings-card-header">
                <div>
                  <h3>Security</h3>

                  <p>
                    Manage your account security settings.
                  </p>
                </div>
              </div>

              <div className="security-item">

                <div>
                  <strong>Password</strong>

                  <span>
                    Update your account password regularly.
                  </span>
                </div>

                <button
                  type="button"
                  className="secondary-settings-button"
                  onClick={() => setShowPasswordForm(true)}
                >
                  Change Password
                </button>

              </div>

              {/* PASSWORD FORM */}

              {showPasswordForm && (
                <div className="password-form-container">

                  <div className="password-form-header">
                    <div>
                      <h4>Change Password</h4>

                      <p>
                        Enter your current and new password.
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={handlePasswordSubmit}
                    className="password-form"
                  >

                    <div className="settings-field">
                      <label htmlFor="current-password">
                        Current Password
                      </label>

                      <input
                        id="current-password"
                        name="currentPassword"
                        type="password"
                        placeholder="Enter current password"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>

                    <div className="settings-field">
                      <label htmlFor="new-password">
                        New Password
                      </label>

                      <input
                        id="new-password"
                        name="newPassword"
                        type="password"
                        placeholder="Enter new password"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>

                    <div className="settings-field">
                      <label htmlFor="confirm-password">
                        Confirm New Password
                      </label>

                      <input
                        id="confirm-password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm new password"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>

                    <div className="password-form-actions">

                      <button
                        type="button"
                        className="cancel-button"
                        onClick={() => {
                          setShowPasswordForm(false)

                          setPasswordData({
                            currentPassword: '',
                            newPassword: '',
                            confirmPassword: '',
                          })
                        }}
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="save-settings-button"
                      >
                        <Save size={16} />
                        Update Password
                      </button>

                    </div>

                  </form>

                </div>
              )}

              {/* TWO FACTOR */}

              <div className="security-item">

                <div>
                  <strong>
                    Two-Factor Authentication
                  </strong>

                  <span>
                    Add an extra layer of account security.
                  </span>
                </div>

                <button
                  type="button"
                  className={
                    twoFactorEnabled
                      ? 'secondary-settings-button enabled'
                      : 'secondary-settings-button'
                  }
                  onClick={handleTwoFactor}
                >
                  {twoFactorEnabled ? 'Disable' : 'Enable'}
                </button>

              </div>

            </div>
          )}

          {/* APPEARANCE */}

          {activeSection === 'appearance' && (
            <div className="settings-card">

              <div className="settings-card-header">
                <div>
                  <h3>Appearance</h3>

                  <p>
                    Customize how the application looks.
                  </p>
                </div>
              </div>

              <div className="appearance-theme-section">

                <div className="appearance-theme-info">

                  <div className="appearance-theme-icon">
                    <Palette size={18} />
                  </div>

                  <div>
                    <strong>Application Theme</strong>

                    <span>
                      Choose how Dilligen Employee Hub
                      appears on your screen.
                    </span>
                  </div>

                </div>

                <div className="theme-select-wrapper">

                  <label htmlFor="theme-select">
                    Theme
                  </label>

                  <select
                    id="theme-select"
                    value={theme}
                    onChange={(event) =>
                      setTheme(event.target.value)
                    }
                  >
                    <option value="Light">
                      Light
                    </option>

                    <option value="Dark">
                      Dark
                    </option>

                    <option value="System Default">
                      System Default
                    </option>
                  </select>

                </div>

              </div>

              <div className="appearance-preview-section">

                <div className="appearance-preview-heading">
                  <div>
                    <strong>Theme Preview</strong>

                    <span>
                      Currently selected: {theme}
                    </span>
                  </div>
                </div>

                <div
                  className={
                    theme === 'Dark'
                      ? 'theme-preview dark-preview'
                      : 'theme-preview'
                  }
                >

                  <div className="preview-sidebar">

                    <div className="preview-logo">
                      DT
                    </div>

                    <div className="preview-nav active">
                      Dashboard
                    </div>

                    <div className="preview-nav">
                      Employees
                    </div>

                    <div className="preview-nav">
                      Departments
                    </div>

                    <div className="preview-nav">
                      Settings
                    </div>

                  </div>

                  <div className="preview-main">

                    <div className="preview-header"></div>

                    <div className="preview-title"></div>

                    <div className="preview-cards">

                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          )}

        </section>

      </div>

    </div>
  )
}

export default Settings