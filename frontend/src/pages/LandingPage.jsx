import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBolt, 
  FaBrain, 
  FaMapMarkerAlt, 
  FaShieldAlt,
  FaArrowRight,
  FaGithub
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const shuttleVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      icon: <FaBolt />,
      title: "Instant Alerts",
      description: "Physical panic buttons for language-free emergency reporting",
      color: "#FFD700"
    },
    {
      icon: <FaBrain />,
      title: "AI Verification",
      description: "Smart false alarm filtering with ML-powered analysis",
      color: "#00E676"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Geo-Fencing",
      description: "Proximity-based notifications to authorities and civilians",
      color: "#2196F3"
    },
    {
      icon: <FaShieldAlt />,
      title: "Real-Time Safety",
      description: "Cloud-powered monitoring and instant response system",
      color: "#FF3D00"
    }
  ];

  const techStack = [
    { name: "ESP32", color: "#E7352C" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "React.js", color: "#61DAFB" },
    { name: "Node.js", color: "#68A063" },
    { name: "Python", color: "#3776AB" },
    { name: "Twilio", color: "#F22F46" }
  ];

  return (
    <div className="landing-page">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="shuttle-icon"
            variants={shuttleVariants}
            animate="animate"
          >
            🚨
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Next-Gen <span className="gradient-text">Emergency Response</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Real-time, AI-verified public safety alerts for crowded tourist zones.
            <br />Fast. Reliable. Intelligent.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <Link to="/dashboard" className="btn-hero btn-primary">
              View Dashboard <FaArrowRight />
            </Link>
            <a 
              href="https://github.com/Nithish-o7/IoT-AI-Public-Safety" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero btn-secondary"
            >
              <FaGithub /> Contribute
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="hero-stats"
          >
            <div className="stat">
              <h3>&lt; 2s</h3>
              <p>Response Time</p>
            </div>
            <div className="stat">
              <h3>AI-Powered</h3>
              <p>Verification</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Monitoring</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">🏆 Key Features</h2>
          <p className="section-subtitle">
            Revolutionizing public safety with cutting-edge technology
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 40px ${feature.color}33`,
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="tech-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">📦 Tech Stack</h2>
          <p className="section-subtitle">
            Built with modern, reliable technologies
          </p>
        </motion.div>

        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: `0 10px 30px ${tech.color}44`,
                transition: { duration: 0.2 }
              }}
              style={{ borderColor: tech.color }}
            >
              <span style={{ color: tech.color }}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Make Public Spaces Safer?</h2>
          <p>Join us in building the future of emergency response systems</p>
          <div className="cta-buttons">
            <Link to="/dashboard" className="btn-hero btn-primary">
              Explore Dashboard
            </Link>
            <a 
              href="https://github.com/Nithish-o7/IoT-AI-Public-Safety/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero btn-secondary"
            >
              Report an Issue
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>🚨 Keeping public spaces safe, intelligently and instantly.</p>
          <p className="footer-credits">
            Built with ❤️ by the IoT-AI Public Safety Team | 
            <a href="https://github.com/Nithish-o7/IoT-AI-Public-Safety" target="_blank" rel="noopener noreferrer">
              {' '}Part of GSSoC'25
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
