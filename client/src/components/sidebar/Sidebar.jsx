
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2><span className={styles.canova}>Canova</span>CRM</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/leads">Leads</Link></li>
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <div className={styles.bottomSection}>
        <button className={styles.logoutBtn}>Logout</button>
        <Link to="/profile" className={styles.profileLink}>Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;