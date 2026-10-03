import { useEffect, useState } from 'react';
import '../styles/Site.scss';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav aria-label="Main" className="site-nav__inner wrap">
        <a href="#top" className="site-nav__name" aria-label="Mrinmoy Nath, back to top">
          <svg className="logo-mark" viewBox="6 10 76 40" width="34" height="23" aria-hidden="true" focusable="false">
              <polyline
                points="10.5,43.5 25,19 38,42.5 50.5,19.5 63,42.5 75.5,16"
                fill="none"
                stroke="currentColor"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
          </svg>
          <span className="site-nav__wordmark">Mrinmoy Nath</span>
        </a>
        <div className="site-nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="site-nav__link">
              {l.label}
            </a>
          ))}
          <a href="/Resume.pdf" download="Mrinmoy_Nath_Resume.pdf" className="pill pill--small">
            Resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
