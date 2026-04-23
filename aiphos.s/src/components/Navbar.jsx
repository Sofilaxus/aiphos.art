import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation }    from 'react-router-dom';
import { NAV }                         from '../constants';

export default function Navbar() {
  const navigate    = useNavigate();
  const { pathname} = useLocation();
  const [scrolled,  setScrolled] = useState(false);
  const [menuOpen,  setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = e => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [menuOpen]);

  const go = path => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav
      ref={menuRef}
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
    >
      {/* home */}
      <button className="nav-logo" onClick={() => go('/home')}>
        <span className="nav-logo__star">✦</span>
        Aiphos.s
      </button>

      {/* desktop navbar */}
      <div className="nav-pills">
        {NAV.map(n => (
          <button
            key={n.id}
            className={`npill${pathname === n.path ? ' active' : ''}`}
            onClick={() => go(n.path)}
          >
            {n.label}
          </button>
        ))}
      </div>

      {/* mobile nav bar burger icon */}
      <button
        className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>

      {/* mobile nav bar */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu__current">
          {NAV.find(n => n.path === pathname)?.label ?? 'Home'}
        </div>

        {NAV.map(n => (
          <button
            key={n.id}
            className={`mobile-nav-item${pathname === n.path ? ' mobile-nav-item--active' : ''}`}
            onClick={() => go(n.path)}
          >
            <span className="mobile-nav-item__dot" />
            {n.label}
          </button>
        ))}

        <div className="mobile-menu__footer">✦</div>
      </div>
    </nav>
  );
}
