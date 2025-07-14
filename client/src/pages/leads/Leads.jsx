import styles from  './leads.module.css';

const Leads = () => {
  return (
    <div className={styles.leadsContainer}>
      <h3>Home &gt; Leads</h3>
      <div className={styles.leadsHeader}>
        <button className={styles.addLeadsButton}>Add Leads</button>
      </div>
      <div className={styles.tableSection}>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Date</th>
              <th>No. of Leads</th>
              <th>Assigned Leads</th>
              <th>Unassigned Leads</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>CSV0225</td>
              <td>01/03/2025</td>
              <td>250</td>
              <td>213</td>
              <td>30</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
