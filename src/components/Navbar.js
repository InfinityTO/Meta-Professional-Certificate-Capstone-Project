"use client"

import { useState } from "react"
import "../styles/Navbar.css"

function Navbar({ navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (page) => {
    navigateTo(page)
    setMobileMenuOpen(false)
  }

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-container" onClick={() => handleNavClick("home")}>
            <div className="logo-image"></div>
            <span className="logo-text">LITTLE LEMON</span>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="desktop-menu">
          <li>
            <button onClick={() => handleNavClick("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigateTo("about")}>About</button>
          </li>
          <li>
            <button onClick={() => navigateTo("menu")}>Menu</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("reservations")}>Reservations</button>
          </li>
          <li>
            <button onClick={() => navigateTo("order")}>Order Online</button>
          </li>
          <li>
            <button onClick={() => navigateTo("login")}>Login</button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <button onClick={() => handleNavClick("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigateTo("about")}>About</button>
            </li>
            <li>
              <button onClick={() => navigateTo("menu")}>Menu</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("reservations")}>Reservations</button>
            </li>
            <li>
              <button onClick={() => navigateTo("order")}>Order Online</button>
            </li>
            <li>
              <button onClick={() => navigateTo("login")}>Login</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar

