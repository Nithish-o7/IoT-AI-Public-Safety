import { motion } from 'framer-motion';
import { 
  FaRegHandPaper, 
  FaWifi, 
  FaBrain, 
  FaBell, 
  FaMapMarkerAlt,
  FaCheckCircle 
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <FaRegHandPaper />,
      title: "Panic Button Press",
      description: "User presses the physical emergency button installed at the location. The button is designed for instant activation without any language barrier.",
      color: "#FF3D00"
    },
    {
      number: "02",
      icon: <FaWifi />,
      title: "IoT Alert Transmission",
      description: "ESP32 microcontroller instantly sends alert data via Wi-Fi to the cloud backend, including device ID, timestamp, and GPS coordinates.",
      color: "#2196F3"
    },
    {
      number: "03",
      icon: <FaBrain />,
      title: "AI Verification",
      description: "Machine learning model analyzes the alert for false alarm patterns, cross-references with historical data, and verifies authenticity within milliseconds.",
      color: "#FFD700"
    },
    {
      number: "04",
      icon: <FaBell />,
      title: "Smart Notification",
      description: "Verified alerts trigger immediate SMS/Call notifications via Twilio API to nearby authorities and registered emergency responders.",
      color: "#00E676"
    },
    {
      number: "05",
      icon: <FaMapMarkerAlt />,
      title: "Geo-Fenced Dispatch",
      description: "System identifies responders within proximity using geolocation and sends targeted alerts with exact location details and emergency type.",
      color: "#9C27B0"
    },
    {
      number: "06",
      icon: <FaCheckCircle />,
      title: "Real-Time Tracking",
      description: "Dashboard displays live status, responder acknowledgment, estimated arrival time, and allows for continuous monitoring until resolution.",
      color: "#00C853"
    }
  ];

  const features = [
    {
      icon: "⚡",
      title: "< 2 Second Response",
      description: "From button press to notification delivery"
    },
    {
      icon: "🤖",
      title: "AI-Powered Filtering",
      description: "95%+ accuracy in false alarm detection"
    },
    {
      icon: "📍",
      title: "Precise Location",
      description: "GPS coordinates with 5m accuracy"
    },
    {
      icon: "🔒",
      title: "Secure & Encrypted",
      description: "End-to-end data encryption"
    }
  ];

  const techStack = [
    { category: "Hardware", items: ["ESP32 DevKit", "Panic Button", "GPS Module", "LED Indicators"] },
    { category: "Backend", items: ["Node.js", "Python", "Firebase", "Express.js"] },
    { category: "AI/ML", items: ["TensorFlow", "Scikit-learn", "ML Model API"] },
    { category: "Communication", items: ["Twilio SMS", "Twilio Voice", "WebSockets"] },
    { category: "Frontend", items: ["React.js", "Framer Motion", "Google Maps API"] }
  ];

  return (
    <div className="how-it-works-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hiw-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>⚙️ How It Works</h1>
          <p className="hero-subtitle">
            A seamless journey from emergency to response in under 2 seconds
          </p>
        </motion.div>
      </section>

      {/* Steps Timeline */}
      <section className="steps-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">📋 The Emergency Response Flow</h2>
            <p className="section-subtitle">
              Six intelligent steps that save lives
            </p>
          </motion.div>

          <div className="steps-timeline">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="step-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="step-number" style={{ borderColor: step.color }}>
                  {step.number}
                </div>
                <motion.div 
                  className="step-card"
                  whileHover={{ 
                    y: -10,
                    boxShadow: `0 20px 40px ${step.color}33`,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="step-icon" style={{ color: step.color }}>
                    {step.icon}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="key-features">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">⚡ Performance Metrics</h2>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Breakdown */}
      <section className="tech-breakdown">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">🛠️ Technology Stack</h2>
            <p className="section-subtitle">
              Powered by modern, reliable technologies
            </p>
          </motion.div>

          <div className="tech-grid">
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                className="tech-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3>{category.category}</h3>
                <ul>
                  {category.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (i * 0.05), duration: 0.4 }}
                    >
                      <span className="bullet">▸</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="data-flow">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">🔄 Data Flow Architecture</h2>
          </motion.div>

          <motion.div
            className="flow-diagram"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flow-box">
              <h4>IoT Device</h4>
              <p>ESP32 + Sensors</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-box">
              <h4>Cloud Backend</h4>
              <p>Firebase + Node.js</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-box">
              <h4>AI Processing</h4>
              <p>Python ML Model</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-box">
              <h4>Notification</h4>
              <p>Twilio SMS/Call</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-box">
              <h4>Dashboard</h4>
              <p>React Frontend</p>
            </div>
          </motion.div>
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
          <h2>Ready to Contribute?</h2>
          <p>Help us build the future of emergency response systems</p>
          <div className="cta-buttons">
            <a 
              href="https://github.com/Nithish-o7/IoT-AI-Public-Safety" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on GitHub
            </a>
            <a 
              href="https://github.com/Nithish-o7/IoT-AI-Public-Safety/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
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
            Built with ❤️ by the IoT-AI Public Safety Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
