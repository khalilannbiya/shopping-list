import styles from "./Navbar.module.css";
const Navbar = ({ icon }) => {
   return (
      <nav className={styles.nav}>
         <img className={styles.navIcon} src={icon} alt="Shopping Icon" />
         <h1 className={styles.navTitle}>Shopping List</h1>
      </nav>
   );
};

export default Navbar;
