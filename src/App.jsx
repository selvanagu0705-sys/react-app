import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Departments from './pages/Departments'
import Settings from './pages/Settings'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activePage, setActivePage] = useState('Dashboard')

  const [theme, setTheme] = useState('Light')

  const handleLogin = () => {
    setIsLoggedIn(true)
    setActivePage('Dashboard')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setActivePage('Dashboard')
    setTheme('Light')
  }

  if (!isLoggedIn) {
    return (
      <main className="login-page">
        <section className="login-brand-panel">
          <div className="brand-content">

            <div className="brand-logo">
              DT
            </div>

            <h1>Dilligen Technology</h1>

            <p className="brand-title">
              Employee Hub
            </p>

            <p className="brand-description">
              A simple and efficient way to manage employee
              information, departments, and workforce activities.
            </p>

            <div className="feature-list">

              <div className="feature-item">
                <span>✓</span>
                <p>Centralized employee management</p>
              </div>

              <div className="feature-item">
                <span>✓</span>
                <p>Clear workforce overview</p>
              </div>

              <div className="feature-item">
                <span>✓</span>
                <p>Simple and intuitive interface</p>
              </div>

            </div>

          </div>

          <p className="brand-footer">
            Employee Management Platform
          </p>

        </section>

        <section className="login-form-panel">

          <div className="login-card">

            <div className="mobile-brand">

              <div className="brand-logo small">
                DT
              </div>

              <span>
                Dilligen Technology Employee Hub
              </span>

            </div>

            <div className="welcome-section">

              <p className="eyebrow">
                EMPLOYEE PORTAL
              </p>

              <h2>
                Welcome back
              </h2>

              <p>
                Sign in to access your employee dashboard.
              </p>

            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault()
                handleLogin()
              }}
            >

              <div className="form-group">

                <label htmlFor="email">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />

              </div>

              <button
                type="submit"
                className="login-button"
              >
                Sign in
                <span>→</span>
              </button>

            </form>

            <div className="login-divider">
              <span>
                Secure employee access
              </span>
            </div>

            <p className="login-footer">
              © 2026 Dilligen Technology. Employee Hub.
            </p>

          </div>

        </section>
      </main>
    )
  }

  const renderPage = () => {

    switch (activePage) {

      case 'Employees':
        return <Employees />

      case 'Departments':
        return <Departments />

      case 'Settings':
        return (
          <Settings
            theme={theme}
            setTheme={setTheme}
          />
        )

      case 'Dashboard':
      default:
        return <Dashboard />
    }
  }

  return (
    <div
      className={`app-layout ${
        theme === 'Dark'
          ? 'dark-theme'
          : ''
      }`}
    >

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={handleLogout}
      />

      <div className="main-area">

        <Topbar />

        <main className="page-content">
          {renderPage()}
        </main>

      </div>

    </div>
  )
}

export default App