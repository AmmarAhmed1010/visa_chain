import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          🔗 VisaChain
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-mobile' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/architecture" onClick={closeMenu}>Architecture</Link></li>
          <li><Link to="/tech-specs" onClick={closeMenu}>Tech Specs</Link></li>
          <li><Link to="/demo" onClick={closeMenu}>Demo</Link></li>
          <li><Link to="/benefits" onClick={closeMenu}>Benefits</Link></li>
          <li><Link to="/competitive-analysis" onClick={closeMenu}>Competitive Analysis</Link></li>
          <li><Link to="/scam-awareness" onClick={closeMenu}>Investor Pitch</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/team" onClick={closeMenu}>Team</Link></li>
          <li><Link to="/roadmap" onClick={closeMenu}>Roadmap</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/investors" onClick={closeMenu}>For Investors</Link></li>
        </ul>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
