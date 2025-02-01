import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#bio">Bio</a>
        </li>
        <li>
          <a href="#discos">Discos</a>
        </li>
        <li>
          <a href="#fotos">Fotos</a>
        </li>
        <li>
          <a href="#videos">Videos</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#textos">Textos</a>
        </li>
        <li>
          <a href="#novedades">Novedades</a>
        </li>
      </ul>
    </nav>
  );
}
