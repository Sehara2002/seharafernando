'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "@/app/Styles/navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Navigation items
  const navItems = [
    { href: "/Pages/Home", label: "Home", icon: "🏠" },
    { href: "/Pages/Education", label: "Education", icon: "🎓" },
    { href: "/Pages/Projects", label: "Projects", icon: "💼" },
    { href: "/Pages/Services", label: "Services", icon: "⚡" },
    { href: "/Pages/Experiences", label: "Experiences", icon: "🚀" },
    { href: "/Pages/Blogs", label: "Blogs", icon: "📝" },
    { href: "/Pages/Contact", label: "Contact", icon: "📧" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__content">
            {/* Logo */}
            <Link href="/" className="navbar__logo">
              <span className="navbar__logo-text">Sehara Fernando</span>
              <div className="navbar__logo-dot"></div>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar__desktop-menu">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`navbar__link ${pathname === item.href ? 'navbar__link--active' : ''}`}
                >
                  {item.label}
                  <span className="navbar__link-hover"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'navbar__mobile-toggle--open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`navbar__mobile-overlay ${isMobileMenuOpen ? 'navbar__mobile-overlay--open' : ''}`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        ></div>

        {/* Mobile Menu */}
        <div 
          className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="navbar__mobile-header">
            <span className="navbar__mobile-title">Navigation</span>
            <button 
              className="navbar__mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              ✕
            </button>
          </div>
          <div className="navbar__mobile-links">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`navbar__mobile-link ${pathname === item.href ? 'navbar__mobile-link--active' : ''}`}
                onClick={closeMobileMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="navbar__mobile-link-icon">{item.icon}</span>
                <span className="navbar__mobile-link-text">{item.label}</span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="navbar__mobile-footer">
            <p className="navbar__mobile-footer-text">
              Let's create something amazing together! 
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;