"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            BYFAA<span>Group</span>
          </Link>

          <nav>
            <ul className="navbar-menu">
              {[
                { path: "/", label: "Accueil" },
                { path: "/properties", label: "Propriétés" },
                { path: "/about", label: "À Propos" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path} className="navbar-item">
                  <Link to={link.path} className={`navbar-link ${location.pathname === link.path ? "active" : ""}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button className="navbar-toggle" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-logo">
            BYFAA<span>Group</span>
          </Link>
          <button className="mobile-menu-close" onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <ul className="mobile-menu-list">
          {[
            { path: "/", label: "Accueil" },
            { path: "/properties", label: "Propriétés" },
            { path: "/about", label: "À Propos" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <li key={link.path} className="mobile-menu-item">
              <Link
                to={link.path}
                className={`mobile-menu-link ${location.pathname === link.path ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
