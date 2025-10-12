import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBell, 
  FaMapMarkerAlt, 
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUsers,
  FaChartLine
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import './Dashboard.css';

const Dashboard = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      location: "Tourist Zone A - Gate 3",
      timestamp: "2025-10-12 14:32:15",
      status: "active",
      severity: "high",
      verified: true,
      responders: 3
    },
    {
      id: 2,
      location: "Beach Area - Sector 7",
      timestamp: "2025-10-12 13:15:42",
      status: "resolved",
      severity: "medium",
      verified: true,
      responders: 2
    },
    {
      id: 3,
      location: "Market Square - Block B",
      timestamp: "2025-10-12 12:08:30",
      status: "active",
      severity: "high",
      verified: false,
      responders: 1
    }
  ]);

  const [stats] = useState({
    totalAlerts: 127,
    activeAlerts: 2,
    responseTime: "1.8s",
    uptime: "99.9%"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="dashboard">
      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <motion.header 
        className="dashboard-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <div className="header-left">
            <h1>🚨 Emergency Dashboard</h1>
            <p>Real-time alert monitoring and management</p>
          </div>
        </div>
      </motion.header>

      {/* Stats Cards */}
      <motion.div 
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <FaChartLine />
          </div>
          <div className="stat-info">
            <h3>{stats.totalAlerts}</h3>
            <p>Total Alerts</p>
          </div>
        </motion.div>

        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
            <FaBell />
          </div>
          <div className="stat-info">
            <h3>{stats.activeAlerts}</h3>
            <p>Active Alerts</p>
          </div>
        </motion.div>

        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
            <FaClock />
          </div>
          <div className="stat-info">
            <h3>{stats.responseTime}</h3>
            <p>Avg Response</p>
          </div>
        </motion.div>

        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
            <FaCheckCircle />
          </div>
          <div className="stat-info">
            <h3>{stats.uptime}</h3>
            <p>System Uptime</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Alerts Section */}
      <motion.div 
        className="alerts-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="section-header">
          <h2>
            <FaBell /> Recent Alerts
          </h2>
          <div className="filter-buttons">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Active</button>
            <button className="filter-btn">Resolved</button>
          </div>
        </div>

        <div className="alerts-list">
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              className={`alert-card ${alert.status}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(0, 200, 83, 0.2)' }}
            >
              <div className="alert-header">
                <div className={`alert-status-badge ${alert.status}`}>
                  {alert.status === 'active' ? (
                    <>
                      <span className="pulse-dot"></span>
                      Active
                    </>
                  ) : (
                    <>
                      <FaCheckCircle />
                      Resolved
                    </>
                  )}
                </div>
                <div className={`severity-badge ${alert.severity}`}>
                  {alert.severity === 'high' ? (
                    <>
                      <FaExclamationTriangle />
                      High Priority
                    </>
                  ) : (
                    'Medium'
                  )}
                </div>
              </div>

              <div className="alert-body">
                <div className="alert-location">
                  <FaMapMarkerAlt />
                  <span>{alert.location}</span>
                </div>
                <div className="alert-time">
                  <FaClock />
                  <span>{alert.timestamp}</span>
                </div>
                <div className="alert-responders">
                  <FaUsers />
                  <span>{alert.responders} Responders Dispatched</span>
                </div>
              </div>

              <div className="alert-footer">
                <div className={`verification-status ${alert.verified ? 'verified' : 'pending'}`}>
                  {alert.verified ? (
                    <>
                      <FaCheckCircle />
                      AI Verified
                    </>
                  ) : (
                    <>
                      <FaClock />
                      Verification Pending
                    </>
                  )}
                </div>
                <button className="btn-details">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Map Placeholder */}
      <motion.div 
        className="map-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2>
          <FaMapMarkerAlt /> Alert Locations Map
        </h2>
        <div className="map-placeholder">
          <div className="map-marker marker-1">
            <span className="marker-pulse"></span>
            <FaMapMarkerAlt />
          </div>
          <div className="map-marker marker-2">
            <span className="marker-pulse"></span>
            <FaMapMarkerAlt />
          </div>
          <p>Interactive map integration coming soon...</p>
          <p className="map-hint">Google Maps API will display real-time alert locations</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
