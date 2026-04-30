import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { NAV_LINKS } from "../../data";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>

      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="Royal Group" className={styles.logoImage} />
      </div>

      {/* Desktop Links */}
      <ul className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>

        {/* Close Button */}
        <div className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.name} onClick={() => setMenuOpen(false)}>
              <NavLink to={link.path} className={styles.mobileLink}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}