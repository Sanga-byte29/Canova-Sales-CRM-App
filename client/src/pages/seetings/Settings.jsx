import React from 'react'
import styles from './setting.module.css'

const Settings = () => {
  return (
    <div className={styles.settingsContainer}>
      <h3>Home &gt; Settings</h3>
      <div className={styles.settingsCard}>
        <h4>Edit Profile</h4>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label>First name</label>
            <input type="text" value="Sarthak" />
          </div>
          <div className={styles.formGroup}>
            <label>Last name</label>
            <input type="text" value="Pal" />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" value="Sarthakpal08@gmail.com" />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" value="**********" />
          </div>
          <div className={styles.formGroup}>
            <label>Confirm Password</label>
            <input type="password" value="**********" />
          </div>
          <div className={styles.saveButtonContainer}>
            <button type="submit" className={styles.saveButton}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Settings