import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          Forme
        </Link>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          <Link to="/#workouts">Workouts</Link>
          <Link to="/nutrition">Nutrition</Link>
         <Link to="/plans">Plans</Link>
          <Link to="/bmr">BMR</Link>
        </nav>

        <div className="navbar-actions">
          <a href="/login" className="btn btn-ghost">
            Log in
          </a>
          <a href="/register" className="btn btn-primary">
            Get started
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar