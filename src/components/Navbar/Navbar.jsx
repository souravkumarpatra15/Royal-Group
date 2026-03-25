import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { NAV_LINKS } from "../../data";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img src={logo} alt="Royal Group" className={styles.logoImage} />
      </div>

      <ul className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href="#" className={styles.navLink}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}