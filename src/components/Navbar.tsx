import React, { useState } from 'react';
import { Laptop, Menu, X, Home, Search, BarChart3, Info, Phone } from 'lucide-react';
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Search, label: 'Browse', href: '#browse' },
    { icon: BarChart3, label: 'Compare', href: '#compare' },
    { icon: Info, label: 'About', href: '#about' },
    { icon: Phone, label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <div className="brand-icon-wrapper me-3">
            <Laptop className="brand-icon" size={32} />
          </div>
          <div>
            <span className="brand-name">TechCompare Pro</span>
            <div className="brand-tagline">Smart Tech Decisions</div>
          </div>
        </a>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <div className="mobile-menu-icon">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>

        {/* Navigation menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={item.label} className="nav-item">
                  <a 
                    className="nav-link nav-link-custom d-flex align-items-center"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent size={18} className="me-2" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          
          {/* CTA Button */}
          <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <button className="btn btn-primary btn-cta">
              Start Comparing
            </button>
          </div>

           <div className='ms-lg-2 mt-3 mt-lg-0'>
            {/* Theme Toggle Button */}
           <ThemeToggle />
           </div>
        </div>
      </div>
    </nav>
  );
};