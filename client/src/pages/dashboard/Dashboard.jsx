import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => (
  <div className={styles.content}>
    <h3>Home &gt; Dashboard</h3>
    <div className={styles.cards}>
      <div className={styles.card}>Unassigned Leads <h4>12</h4></div>
      <div className={styles.card}>Assigned This Week <h4>24</h4></div>
      <div className={styles.card}>Active Salespeople <h4>5</h4></div>
      <div className={styles.card}>Conversion Rate <h4>32%</h4></div>
    </div>
    <div className={styles.analytics}>
      <div className={styles.salesChart}>Sales Analytics (Chart Placeholder)</div>
      <div className={styles.activityFeed}>
        <h4>Recent Activity Feed</h4>
        <p>You assigned a lead to Priya – 1 hour ago</p>
        <p>Jay closed a deal – 2 hours ago</p>
      </div>
    </div>
    <div className={styles.tableSection}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Assigned Leads</th>
            <th>Closed Leads</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tanner Finsha</td>
            <td>#23454GH6J7YT6</td>
            <td>5</td>
            <td>2</td>
            <td><span className={styles.active}>Active</span></td>
          </tr>
          <tr>
            <td>Emeto Winner</td>
            <td>#23454GH6J7YT6</td>
            <td>3</td>
            <td>1</td>
            <td><span className={styles.active}>Active</span></td>
          </tr>
          <tr>
            <td>Emeto Winner</td>
            <td>#23454GH6J7YT6</td>
            <td>8</td>
            <td>3</td>
            <td><span className={styles.active}>Active</span></td>
          </tr>
          <tr>
            <td>Tassy Omah</td>
            <td>#23454GH6J7YT6</td>
            <td>6</td>
            <td>4</td>
            <td><span className={styles.active}>Active</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Dashboard;