import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './App.module.css';
import Dashboard from './pages/dashboard/Dashboard';
import Leads from './pages/leads/Leads';
import Employees from './pages/employees/Employees';
import Settings from './pages/seetings/Settings';
import Profile from './pages/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

