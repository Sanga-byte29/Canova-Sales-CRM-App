
import React from 'react';

import styles from './navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <input type="text" placeholder="Search here..." />
  </div>
);

export default Navbar;
