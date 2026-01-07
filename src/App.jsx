import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './App.css'

const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Skills with proficiency levels (recruiters love this!)
const skillsData = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Vue.js', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' },
  { name: 'MongoDB', level: 85, category: 'database' },
  { name: 'PostgreSQL', level: 80, category: 'database' },
  { name: 'MySQL', level: 80, category: 'database' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Agile/Scrum', level: 85, category: 'tools' },
  { name: 'Figma', level: 75, category: 'tools' },
]

const experiences = [
  {
    company: 'Programmers Force',
    role: 'Software Engineer',
    period: 'Jan 2024 - Present',
    location: 'Lahore, Pakistan',
    highlights: [
      'Developed and deployed 10+ full-stack features using Node.js, React, Vue.js, and MongoDB/MySQL, delivering production-ready modules from concept to release.',
      'Transformed 25+ Figma designs into responsive, pixel-perfect interfaces achieving 98% design accuracy.',
      'Built and maintained RESTful APIs serving 1000+ daily active users with 99.5% uptime.',
      'Optimized application performance, reducing page load times by 40% and improving Core Web Vitals scores.'
    ]
  },
  {
    company: 'Finz Games',
    role: 'Software Engineer',
    period: 'June 2022 - Dec 2023',
    location: 'Lahore, Pakistan',
    highlights: [
      'Developed 3 mobile games using Unity and C#, achieving 50,000+ combined downloads on app stores.',
      'Improved game performance by 35% through memory optimization and asset management.',
      'Collaborated with a team of 5 developers in an Agile environment with 2-week sprint cycles.',
      'Reduced bug count by 60% through comprehensive testing and code refactoring.'
    ]
  }
]

const projects = [
  {
    name: 'Connect Wheels',
    status: 'In Progress',
    description: 'A scalable car listing platform with microservices architecture, real-time chat, and JWT authentication. Features API Gateway for service communication and responsive React frontend.',
    tech: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'PostgreSQL', 'React'],
    icon: 'car',
    github: 'https://github.com/SalmanMani86',
    features: ['Microservices', 'Real-time Chat', 'JWT Auth', 'API Gateway']
  },
  {
    name: 'E-commerce Platform',
    description: 'Fully responsive e-commerce website with dynamic product listings, cart functionality, user authentication, and optimized performance across all devices.',
    tech: ['JavaScript', 'Vue.js', 'Quasar', 'REST API'],
    icon: 'shop',
    github: 'https://github.com/SalmanMani86',
    features: ['Product Catalog', 'Shopping Cart', 'User Auth', 'Responsive']
  },
  {
    name: 'MihRM',
    subtitle: 'Employee Management System',
    description: 'Complete HR management solution with role-based dashboards, attendance tracking, leave management, and employee performance analytics.',
    tech: ['Node.js', 'Express', 'MySQL', 'Vue.js'],
    icon: 'users',
    github: 'https://github.com/SalmanMani86',
    features: ['Role-based Access', 'Attendance', 'Leave Management', 'Reports']
  },
  {
    name: 'Quiz Management System',
    description: 'Interactive quiz platform with REST APIs, JWT authentication, role-based dashboards, and real-time score tracking.',
    tech: ['Node.js', 'PostgreSQL', 'Vue.js', 'JWT'],
    icon: 'quiz',
    github: 'https://github.com/SalmanMani86',
    features: ['Quiz Builder', 'Real-time Scores', 'Analytics', 'Admin Panel']
  }
]

// Stats that recruiters love to see
const stats = [
  { number: '2+', label: 'Years Experience' },
  { number: '10+', label: 'Projects Completed' },
  { number: '50K+', label: 'Users Impacted' },
  { number: '99.5%', label: 'Uptime Achieved' }
]

function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('all')
  
  const filteredSkills = activeSkillCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeSkillCategory)

  return (
    <div className="app">
      <div className="grid-bg"></div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      
      <nav className="navbar">
        <motion.div 
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          SA<span className="accent">.</span>
        </motion.div>
        <motion.div 
          className="nav-links"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-cta">Hire Me</a>
        </motion.div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot"></span>
            Open to Work
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Salman Ali</span>
          </motion.h1>
          
          <motion.div 
            className="hero-role"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="code-tag">&lt;</span>
            Full-Stack Software Engineer
            <span className="code-tag">/&gt;</span>
          </motion.div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build <span className="highlight">scalable web applications</span> and <span className="highlight">robust backend systems</span>. 
            Specialized in React, Node.js, and Vue.js with a passion for clean code and exceptional user experiences.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Hire Me
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/Salman_Ali_Resume.pdf" download className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://github.com/SalmanMani86" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/salman-ali-10bb62307/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:salman.ali52245@gmail.com" className="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
        
        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section">
        <FadeInSection>
          <h2 className="section-title">
            <span className="section-number">01.</span>
            About Me
          </h2>
        </FadeInSection>
        
        <div className="about-content">
          <FadeInSection delay={0.2}>
            <div className="about-text">
              <p>
                I'm a <span className="highlight">Full-Stack Software Engineer</span> passionate about building things that live on the internet. 
                My journey in tech has been driven by a love for creating seamless web experiences and scalable backend systems.
              </p>
              <p>
                Currently at <span className="highlight">Programmers Force</span>, I develop full-stack applications, 
                transforming designs into pixel-perfect, responsive interfaces while building robust backend systems that serve thousands of users.
              </p>
              <p>
                I hold a <span className="highlight">BS in Computer Science</span> from the University of Management and Technology, 
                graduating as a <span className="highlight">Silver Medalist</span> with a CGPA of 3.81.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                  <span>Production-ready code</span>
                </div>
                <div className="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                  <span>Agile methodology</span>
                </div>
                <div className="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                  <span>Clean architecture</span>
                </div>
                <div className="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                  <span>UI/UX focused</span>
                </div>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.4}>
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-avatar">SA</div>
                <div className="about-info">
                  <h3>Salman Ali</h3>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="about-card-body">
                <div className="info-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="info-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                  </svg>
                  <span>Programmers Force</span>
                </div>
                <div className="info-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  <span>BS Computer Science</span>
                </div>
                <div className="info-row highlight-row">
                  <span>🥈</span>
                  <span>Silver Medalist • CGPA 3.81</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section id="skills" className="section">
        <FadeInSection>
          <h2 className="section-title">
            <span className="section-number">02.</span>
            Technical Skills
          </h2>
        </FadeInSection>
        
        <FadeInSection delay={0.2}>
          <div className="skills-filter">
            {['all', 'frontend', 'backend', 'database', 'tools'].map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeSkillCategory === category ? 'active' : ''}`}
                onClick={() => setActiveSkillCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </FadeInSection>
        
        <FadeInSection delay={0.3}>
          <div className="skills-bars">
            {filteredSkills.map((skill, index) => (
              <div key={skill.name} className="skill-bar-item">
                <div className="skill-bar-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div 
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
        
        <FadeInSection delay={0.4}>
          <div className="tech-stack-visual">
            <h3 className="stack-title">Tech Stack I Work With</h3>
            <div className="tech-icons">
              <div className="tech-icon-item" data-tooltip="React">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="Vue.js">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3m4.5 0h3L12 7.58 14.5 3h3L12 13.08 6.5 3z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="Node.js">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v6.47c0 .66-.68 1.31-1.77.76L4.45 14.5a.27.27 0 01-.14-.24V5.78c0-.1.06-.2.14-.24l7.44-4.3c.08-.04.18-.04.26 0l7.44 4.3c.08.05.14.14.14.24v8.58c0 .1-.06.19-.14.24l-7.44 4.3c-.08.04-.17.04-.26 0l-1.9-1.13c-.08-.04-.17-.05-.24-.02-.66.31-.79.35-1.41.53-.15.04-.37.12.08.35l2.48 1.47c.24.14.5.21.78.21.27 0 .54-.07.78-.21l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 00-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="TypeScript">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="MongoDB">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.79 2 8 3.79 8 6v.03c.59-.02 1.23.06 1.85.26 1.38-1.34 3.54-1.34 4.92 0 .62-.2 1.26-.28 1.85-.26V6c0-2.21-1.79-4-4.62-4m-.62 5.47c-.37.49-.65 1.07-.78 1.72-.39.03-.77.1-1.14.21-1.07.33-1.98.96-2.62 1.78C6.3 12 6 13.11 6 14.31c0 1.21.3 2.32.84 3.14.64.82 1.55 1.45 2.62 1.78.37.11.75.18 1.14.21.13.65.41 1.23.78 1.72.14.18.29.35.45.51.56.59 1.27 1.02 2.06 1.29.05.02.1.02.15.04V6.06c-.05.02-.1.02-.15.04-.79.27-1.5.7-2.06 1.29-.16.16-.31.33-.45.51M17.16 11.18c-.64-.82-1.55-1.45-2.62-1.78-.37-.11-.75-.18-1.14-.21a4.31 4.31 0 00-.78-1.72c-.14-.18-.29-.35-.45-.51V23c.05-.02.1-.02.15-.04.79-.27 1.5-.7 2.06-1.29.16-.16.31-.33.45-.51.37-.49.65-1.07.78-1.72.39-.03.77-.1 1.14-.21 1.07-.33 1.98-.96 2.62-1.78.54-.82.84-1.93.84-3.14 0-1.2-.3-2.31-.84-3.13z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="PostgreSQL">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2v-2m0-2h2V7h-2v7z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="Git">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 002 2 2 2 0 002-2c0-.74-.4-1.39-1-1.73V9.41l1.69 1.7a2 2 0 00.73 2.4 2 2 0 102.69-2.48l-4.79-4.79A2 2 0 0010.59 4L4.8 9.79a2 2 0 00.24 3.14 2 2 0 102.44-2.34z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="JavaScript">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"/></svg>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="experience" className="section">
        <FadeInSection>
          <h2 className="section-title">
            <span className="section-number">03.</span>
            Work Experience
          </h2>
        </FadeInSection>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <FadeInSection key={exp.company} delay={0.2 * (index + 1)}>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="role-name">{exp.role}</p>
                      <p className="location-name">{exp.location}</p>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul className="highlights">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <FadeInSection>
          <h2 className="section-title">
            <span className="section-number">04.</span>
            Featured Projects
          </h2>
        </FadeInSection>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <FadeInSection key={project.name} delay={0.15 * (index + 1)}>
              <div className="project-card">
                <div className="project-header">
                  {project.icon === 'car' && (
                    <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 17h14M6 12h12M7 7h10M4 17a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1z"/>
                      <circle cx="7.5" cy="17.5" r="1.5"/>
                      <circle cx="16.5" cy="17.5" r="1.5"/>
                      <path d="M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5"/>
                    </svg>
                  )}
                  {project.icon === 'shop' && (
                    <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 3h18v4H3zM3 7v13a1 1 0 001 1h16a1 1 0 001-1V7"/>
                      <path d="M8 11h8M8 15h5"/>
                      <rect x="6" y="3" width="4" height="4"/>
                      <rect x="14" y="3" width="4" height="4"/>
                    </svg>
                  )}
                  {project.icon === 'users' && (
                    <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="9" cy="7" r="3"/>
                      <circle cx="17" cy="7" r="2"/>
                      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
                      <path d="M17 11a3 3 0 013 3v2"/>
                    </svg>
                  )}
                  {project.icon === 'quiz' && (
                    <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M9 9h6M9 13h4M9 17h2"/>
                      <circle cx="6" cy="9" r="1" fill="currentColor"/>
                      <circle cx="6" cy="13" r="1" fill="currentColor"/>
                      <circle cx="6" cy="17" r="1" fill="currentColor"/>
                    </svg>
                  )}
                  <div className="project-links">
                    {project.status && <span className="project-status">{project.status}</span>}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-name">{project.name}</h3>
                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  {project.features.map(feature => (
                    <span key={feature} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <FadeInSection>
          <h2 className="section-title">
            <span className="section-number">05.</span>
            Education
          </h2>
        </FadeInSection>
        
        <FadeInSection delay={0.2}>
          <div className="education-card">
            <div className="education-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                <path d="M12 14v7"/>
              </svg>
            </div>
            <div className="education-content">
              <h3>University of Management and Technology</h3>
              <p className="degree">Bachelor of Science in Computer Science</p>
              <p className="location">Lahore, Pakistan</p>
              <div className="education-meta">
                <span className="cgpa">CGPA: 3.81</span>
                <span className="achievement">🥈 Silver Medalist</span>
                <span className="period">Dec 2018 - Dec 2022</span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="contact" className="section contact-section">
        <FadeInSection>
          <h2 className="section-title centered">
            <span className="section-number">06.</span>
            Let's Work Together
          </h2>
        </FadeInSection>
        
        <FadeInSection delay={0.2}>
          <p className="contact-text">
            I'm actively seeking new opportunities where I can contribute, learn, and grow. 
            If you have a position that matches my skills, I'd love to hear from you!
          </p>
        </FadeInSection>
        
        <FadeInSection delay={0.4}>
          <div className="contact-links">
            <a href="mailto:salman.ali52245@gmail.com" className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
              <span>salman.ali52245@gmail.com</span>
            </a>
            <a href="tel:+923085065301" className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>+92 308 5065301</span>
            </a>
            <a href="https://www.linkedin.com/in/salman-ali-10bb62307/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/SalmanMani86" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </FadeInSection>
        
        <FadeInSection delay={0.6}>
          <div className="contact-cta-group">
            <a href="mailto:salman.ali52245@gmail.com" className="btn btn-primary btn-large">
              Get In Touch
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/Salman_Ali_Resume.pdf" download className="btn btn-secondary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </div>
        </FadeInSection>
      </section>

      <footer className="footer">
        <p>Designed & Built by <span className="accent">Salman Ali</span></p>
        <p className="footer-year">© 2026 • All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
