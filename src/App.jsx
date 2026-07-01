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
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Vue.js', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Express.js', level: 88, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' },
  { name: 'JWT Authentication', level: 85, category: 'backend' },
  { name: 'Microservices', level: 82, category: 'backend' },
  { name: 'WebSockets', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 88, category: 'database' },
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MySQL', level: 82, category: 'database' },
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'AWS', level: 75, category: 'devops' },
  { name: 'GitHub Actions', level: 80, category: 'devops' },
  { name: 'AWS CodeBuild', level: 72, category: 'devops' },
  { name: 'Terraform', level: 70, category: 'devops' },
  { name: 'CI/CD', level: 78, category: 'devops' },
  { name: 'Git', level: 90, category: 'devops' },
  { name: 'Agile/Scrum', level: 88, category: 'tools' },
  { name: 'Figma', level: 78, category: 'tools' },
]

const experiences = [
  {
    company: 'Programmers Force',
    role: 'Software Engineer',
    period: 'Aug 2024 - May 2026',
    location: 'Lahore, Pakistan',
    highlights: [
      'Delivered production-ready features across 6+ client projects on schedule — owning full-stack development from API design to frontend implementation in an Agile/Scrum environment.',
      'Built RESTful APIs with JWT authentication and role-based access control, supporting 1,000+ concurrent users across multiple applications.',
      'Converted Figma designs to pixel-perfect React UIs — reduced design-to-code time by 30%.',
      'Optimized database queries and frontend bundles, improving average page load time by 40% across production apps.',
      'Contributed to shuftipro.com — enterprise identity verification SaaS.',
      'Maintained CI/CD pipelines using GitHub Actions — automated testing and deployment across client projects.'
    ]
  },
  {
    company: 'Finz Games',
    role: 'Software Engineer',
    period: 'May 2021 - July 2024',
    location: 'Lahore, Pakistan',
    highlights: [
      'Built and maintained RESTful APIs across 3+ web applications — handling backend architecture, database design, and third-party integrations from concept to production.',
      'Reduced runtime memory overhead by 25% through performance profiling and targeted optimizations on Node.js backend services.',
      'Implemented structured error handling and debugging workflows — cut average production issue resolution time by 60%.'
    ]
  }
]

const projects = [
  {
    name: 'Connect Wheels',
    description: 'A social car platform where users create garage profiles, post car listings and feeds, and connect via real-time chat. Built with microservices architecture, an API Gateway, JWT authentication, and WebSocket-powered messaging — full-stack from RESTful APIs to a responsive frontend with secure multi-user session handling.',
    tech: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'PostgreSQL', 'React'],
    icon: 'car',
    github: 'https://github.com/SalmanMani86',
    features: ['Microservices', 'Real-time Chat', 'JWT Auth', 'API Gateway', 'WebSockets']
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
    description: 'Role-based HR platform with separate dashboards for admins, managers, and employees. Features include attendance tracking, leave management, and reporting — designed for small to mid-size teams.',
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
  { number: '5+', label: 'Years Experience' },
  { number: '6+', label: 'Client Projects' },
  { number: '1K+', label: 'Concurrent Users' },
  { number: '40%', label: 'Faster Load Times' }
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
          <a href="#contact" className="nav-cta">Let's Talk</a>
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
            Full Stack Developer
            <span className="code-tag">/&gt;</span>
          </motion.div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer with <span className="highlight">5+ years</span> shipping production-grade SaaS and fintech applications using Next.js, React, Node.js, and TypeScript.
            Experienced working across distributed teams and delivering features async — focused on clean architecture, measurable performance wins, and high-impact shipping.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Let's Talk
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href={`${import.meta.env.BASE_URL}Salman_Ali_Resume.pdf`} download className="btn btn-secondary">
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
                I'm a <span className="highlight">Full Stack Developer</span> with <span className="highlight">5+ years</span> of experience shipping
                production-grade SaaS and fintech applications using Next.js, React, Node.js, TypeScript, and MongoDB/PostgreSQL.
              </p>
              <p>
                I've delivered scalable systems across <span className="highlight">fintech and enterprise domains</span> — including microservices platforms, 
                real-time applications, and role-based systems. Most recently at <span className="highlight">Programmers Force</span>, I owned full-stack
                development from API design to pixel-perfect frontend implementation.
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
                  <span>Agile/Scrum</span>
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
                  <p>Full Stack Developer</p>
                </div>
              </div>
              <div className="about-card-body">
                <div className="info-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Riyadh, Saudi Arabia</span>
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
            {['all', 'frontend', 'backend', 'database', 'devops', 'tools'].map(category => (
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
              <div className="tech-icon-item" data-tooltip="Next.js">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>
              </div>
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
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="PostgreSQL">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="Git">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 002 2 2 2 0 002-2c0-.74-.4-1.39-1-1.73V9.41l1.69 1.7a2 2 0 00.73 2.4 2 2 0 102.69-2.48l-4.79-4.79A2 2 0 0010.59 4L4.8 9.79a2 2 0 00.24 3.14 2 2 0 102.44-2.34z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="JavaScript">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="Tailwind CSS">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6M7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="Docker">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.98 11.08h2.12a.19.19 0 00.18-.19V9.01a.19.19 0 00-.18-.19h-2.12a.19.19 0 00-.19.19v1.88c0 .11.08.19.19.19m-2.95 0h2.12a.19.19 0 00.18-.19V9.01a.19.19 0 00-.18-.19h-2.12a.19.19 0 00-.19.19v1.88c0 .11.09.19.19.19m-2.91 0h2.12a.19.19 0 00.19-.19V9.01a.19.19 0 00-.19-.19H8.12a.19.19 0 00-.18.19v1.88c0 .11.08.19.18.19m-2.92 0h2.13a.19.19 0 00.18-.19V9.01a.19.19 0 00-.18-.19H5.2a.19.19 0 00-.19.19v1.88c0 .11.08.19.19.19m2.92-2.72h2.12a.19.19 0 00.19-.19V6.29a.19.19 0 00-.19-.18H8.12a.19.19 0 00-.18.18v1.88c0 .11.08.19.18.19m2.95 0h2.12a.19.19 0 00.18-.19V6.29a.19.19 0 00-.18-.18h-2.12a.19.19 0 00-.19.18v1.88c0 .11.09.19.19.19m2.95 0h2.12a.19.19 0 00.18-.19V6.29a.19.19 0 00-.18-.18h-2.12a.19.19 0 00-.19.18v1.88c0 .11.08.19.19.19m8.32 1.6c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09-.25-1.69-1.65-2.51-1.71-2.55l-.34-.2-.22.32c-.28.43-.49.91-.6 1.41-.23.97-.09 1.88.4 2.66-.59.33-1.54.41-1.74.42H1.76a.74.74 0 00-.74.74c-.03 1.26.18 2.51.64 3.68.51 1.3 1.28 2.25 2.27 2.83 1.11.65 2.92 1.02 4.97 1.02.92 0 1.85-.08 2.76-.25a11.5 11.5 0 003.61-1.32c.93-.54 1.77-1.22 2.48-2.03 1.19-1.35 1.9-2.85 2.42-4.19h.21c1.37 0 2.21-.55 2.68-1 .31-.3.55-.66.71-1.07l.1-.29-.26-.18z"/></svg>
              </div>
              <div className="tech-icon-item" data-tooltip="AWS">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 10.27c0 .3.03.54.09.72.06.18.15.37.26.58.04.06.06.12.06.18 0 .08-.05.16-.15.24l-.5.33a.38.38 0 01-.21.07c-.08 0-.16-.04-.24-.11a2.5 2.5 0 01-.29-.38 6.2 6.2 0 01-.25-.48c-.62.73-1.4 1.1-2.33 1.1-.67 0-1.2-.19-1.59-.57-.39-.38-.59-.89-.59-1.53 0-.68.24-1.23.72-1.65.48-.42 1.12-.63 1.94-.63.27 0 .55.02.84.07.29.04.59.11.9.18v-.57c0-.61-.13-1.04-.38-1.28-.26-.25-.7-.37-1.32-.37-.28 0-.57.03-.87.1-.3.07-.59.16-.87.27a2.3 2.3 0 01-.28.11.5.5 0 01-.13.02c-.11 0-.17-.08-.17-.25v-.39c0-.13.02-.23.06-.29.04-.06.11-.12.22-.18.28-.14.62-.27 1.01-.37.39-.1.81-.15 1.25-.15.95 0 1.65.22 2.09.65.44.43.66 1.09.66 1.97v2.59zm-3.22 1.21c.26 0 .53-.05.81-.14.28-.1.53-.27.74-.5.13-.15.22-.31.27-.5.05-.18.07-.4.07-.66v-.32a6.6 6.6 0 00-.72-.13 5.9 5.9 0 00-.74-.05c-.53 0-.92.1-1.18.32-.26.21-.39.51-.39.91 0 .37.1.65.29.84.18.19.45.28.81.28zm6.37.86c-.15 0-.25-.03-.31-.08-.07-.05-.13-.16-.18-.32L7.32 5.65a1.4 1.4 0 01-.08-.33c0-.13.07-.2.2-.2h.78c.15 0 .26.02.31.08.07.05.12.16.17.32l1.36 5.36 1.27-5.36c.04-.16.09-.27.16-.32a.57.57 0 01.32-.08h.64c.16 0 .26.02.33.08.06.05.12.16.16.32l1.28 5.42 1.4-5.42c.05-.16.11-.27.17-.32a.53.53 0 01.31-.08h.74c.13 0 .21.07.21.2 0 .04 0 .08-.02.13a1.16 1.16 0 01-.06.21l-1.96 6.29c-.05.16-.11.27-.18.32a.55.55 0 01-.31.08h-.69c-.16 0-.26-.03-.33-.09-.06-.05-.12-.16-.16-.33l-1.26-5.22-1.25 5.21c-.04.17-.09.28-.16.33-.06.06-.17.09-.33.09h-.69zm10.2.22c-.42 0-.84-.05-1.24-.15-.4-.1-.71-.21-.92-.33-.13-.07-.22-.16-.25-.23a.6.6 0 01-.05-.23v-.41c0-.17.06-.25.18-.25.05 0 .1.01.15.03.05.02.12.05.21.09.29.13.6.23.94.3.34.07.68.1 1.02.1.54 0 .96-.09 1.25-.28.29-.19.44-.46.44-.81 0-.24-.08-.44-.23-.6-.15-.16-.44-.31-.85-.45l-1.22-.38c-.61-.19-1.07-.48-1.35-.86-.28-.38-.42-.8-.42-1.25 0-.36.08-.68.23-.95.16-.27.37-.51.64-.69.27-.19.57-.33.93-.42.35-.1.72-.14 1.11-.14.18 0 .37.01.55.04.19.02.36.06.53.09.16.04.31.08.46.13.14.05.26.1.34.15.11.07.19.14.24.21.05.07.07.16.07.28v.38c0 .17-.06.26-.18.26a.81.81 0 01-.3-.09 3.6 3.6 0 00-1.51-.31c-.49 0-.88.08-1.14.24-.27.16-.4.41-.4.75 0 .24.09.44.26.6.17.16.49.32.94.47l1.19.38c.6.19 1.04.46 1.3.8.26.34.39.74.39 1.18 0 .37-.08.7-.23 1-.15.3-.36.55-.63.76-.27.21-.59.36-.96.47-.39.11-.79.17-1.23.17z"/></svg>
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
            <a href={`${import.meta.env.BASE_URL}Salman_Ali_Resume.pdf`} download className="btn btn-secondary btn-large">
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
