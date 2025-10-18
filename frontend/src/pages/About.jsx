import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaUsers, FaHandshake, FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        stiffness: 100
      }
    }
  };

  const team = [
    {
      name: "Nithish Kanna",
      role: "Project Lead & Full Stack Developer",
      github: "https://github.com/Nithish-o7",
      linkedin: "https://www.linkedin.com/in/nithish-kanna-d-292b98299/"
    }
  ];

  const values = [
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Leveraging cutting-edge IoT and AI technologies to save lives",
      color: "#00C853"
    },
    {
      icon: <FaEye />,
      title: "Transparency",
      description: "Open-source development with community-driven improvements",
      color: "#2196F3"
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Building together with contributors from GSSoC'25 and beyond",
      color: "#FFD700"
    },
    {
      icon: <FaHandshake />,
      title: "Reliability",
      description: "Creating dependable systems for emergency response scenarios",
      color: "#FF3D00"
    }
  ];

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Our Mission</h1>
          <p className="hero-subtitle">
            Revolutionizing public safety through intelligent IoT solutions
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <motion.div
            className="content-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="mission-card" variants={itemVariants}>
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To provide fast, reliable, and intelligent emergency alert systems 
                for crowded tourist zones and public spaces. We aim to reduce response 
                times, minimize false alarms, and create safer environments through 
                innovative IoT and AI technology.
              </p>
            </motion.div>

            <motion.div className="vision-card" variants={itemVariants}>
              <div className="card-icon">🔮</div>
              <h2>Our Vision</h2>
              <p>
                To become the global standard for emergency response systems in 
                public spaces, empowering communities with technology that saves 
                lives. We envision a world where every tourist destination and 
                crowded area has instant, verified emergency communication.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">💎 Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our development
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 40px ${value.color}33`,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="value-icon" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Story */}
      <section className="project-story">
        <div className="container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>📖 Our Story</h2>
            <p>
              IoT-AI Public Safety was born from a simple observation: emergency 
              response in crowded tourist areas is often slow, confusing, and prone 
              to false alarms. Traditional panic buttons are language-dependent, 
              and verification systems are either absent or inefficient.
            </p>
            <p>
              We set out to build a solution that combines the simplicity of 
              physical panic buttons with the intelligence of AI verification and 
              the reach of modern communication technology. The result is a system 
              that can alert the right people at the right time with verified 
              information.
            </p>
            <p>
              Now part of <strong>GirlScript Summer of Code (GSSoC'25)</strong>, 
              we're building this project with contributors from around the world, 
              making it truly community-driven and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">👥 Project Team</h2>
            <p className="section-subtitle">
              Meet the people behind IoT-AI Public Safety
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-avatar">
                  <img 
                    src={`https://github.com/${member.github.split('/').pop()}.png`} 
                    alt={member.name}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <div className="team-links">
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="contributors-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p>
              <strong>Plus amazing contributors from GSSoC'25!</strong>
              <br />
              This project is built with love by developers from all over India and beyond.
            </p>
            <a 
              href="https://github.com/Nithish-o7/IoT-AI-Public-Safety/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contributors"
            >
              View All Contributors
            </a>
          </motion.div>
        </div>
      </section>

      {/* GSSoC Section */}
      <section className="gssoc-section">
        <div className="container">
          <motion.div
            className="gssoc-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>🌟 Part of GSSoC'25</h2>
            <p>
              We're proud to be an official project in GirlScript Summer of Code 2025, 
              India's largest open-source program. GSSoC connects developers with 
              real-world projects, providing mentorship, community support, and 
              recognition for contributions.
            </p>
            <div className="gssoc-stats">
              <div className="stat">
                <h3>3 Months</h3>
                <p>Program Duration</p>
              </div>
              <div className="stat">
                <h3>Open Source</h3>
                <p>100% Community Driven</p>
              </div>
              <div className="stat">
                <h3>Learn & Grow</h3>
                <p>Real-World Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>🚨 Building safer public spaces, one commit at a time.</p>
          <p className="footer-credits">
            Built with ❤️ by the IoT-AI Public Safety Team | 
            <a href="https://github.com/Nithish-o7/IoT-AI-Public-Safety" target="_blank" rel="noopener noreferrer">
              {' '}Open Source on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
