import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaJava,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'

import {
  SiJavascript,
  SiTypescript,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiAngular,
  SiGooglecloud,
} from 'react-icons/si'

import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="overlay">
          <h1>RAMADURGARAO TOLETI</h1>
          <h2>Lead Full-Stack Engineer</h2>

          <p className="summary">
            13+ years of experience building enterprise web and hybrid mobile
            applications using React.js, Angular, JavaScript, Node.js, OScript,
            Docker, Kubernetes, and cloud-native technologies.
          </p>

          <div className="contact-links">
            <a href="mailto:ramdurga.giet@gmail.com">
              <FaEnvelope /> Email
            </a>

            <a href="tel:+919493392688">
              <FaPhone /> Contact
            </a>

            <a
              href="https://linkedin.com/in/ramadurgaraotoleti"
              target="_blank"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a href="https://github.com" target="_blank">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </header>

      <section className="section">
                <h2>Technical Skills</h2>
        <div className="skills-grid">

          <div className="skill-card">
            <FaReact className="icon" />
            <h3>React.js</h3>
          </div>

          <div className="skill-card">
            <SiJavascript className="icon" />
            <h3>JavaScript</h3>
          </div>

          <div className="skill-card">
            <SiTypescript className="icon" />
            <h3>TypeScript</h3>
          </div>

          <div className="skill-card">
            <FaNodeJs className="icon" />
            <h3>Node.js</h3>
          </div>

          <div className="skill-card">
            <SiAngular className="icon" />
            <h3>Angular</h3>
          </div>

          <div className="skill-card">
            <FaDocker className="icon" />
            <h3>Docker</h3>
          </div>

          <div className="skill-card">
            <SiKubernetes className="icon" />
            <h3>Kubernetes</h3>
          </div>

          <div className="skill-card">
            <SiPostgresql className="icon" />
            <h3>PostgreSQL</h3>
          </div>

          <div className="skill-card">
            <SiMongodb className="icon" />
            <h3>MongoDB</h3>
          </div>

          <div className="skill-card">
            <FaJava className="icon" />
            <h3>Core Java</h3>
          </div>

          <div className="skill-card">
            <SiGooglecloud className="icon" />
            <h3>GCP</h3>
          </div>
        </div>
      </section>

      <section className="section">
              <h2>Professional Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>OpenText Technologies India Pvt Ltd</h3>
            <h4>Lead Software Engineer | Aug 2019 - Present</h4>
            <ul>
              <li>
                Developed scalable enterprise applications using OScript,
                JavaScript, Docker, Kubernetes, and PostgreSQL.
              </li>
              <li>
                Designed accessibility-compliant UI widgets and reusable
                frontend components.
              </li>
              <li>
                Worked on production deployments, performance optimization,
                database tuning, and security remediation.
              </li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>Cognizant Technology Solutions</h3>
            <h4>Senior Software Engineer | Sept 2016 - Aug 2019</h4>
            <ul>
              <li>
                Migrated legacy applications into scalable Angular SPA
                platforms.
              </li>
              <li>
                Developed reusable Angular components and dashboard systems.
              </li>
              <li>
                Implemented REST integrations and application performance
                improvements.
              </li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>Tata Consultancy Services</h3>
            <h4>UI & Mobile Application Developer | Mar 2013 - Sept 2016</h4>
            <ul>
              <li>
                Developed hybrid mobile applications for Android and iOS using
                Cordova and AngularJS.
              </li>
              <li>
                Implemented offline synchronization using SQLite.
              </li>
              <li>
                Improved mobile application performance using Chrome profiling
                tools.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="project-grid">
          <div className="project-card">
            <h3>Extended ECM for SAP SuccessFactors</h3>
            <p>
              Enterprise content management integration platform with scalable
              UI widgets, security remediation, Docker/Kubernetes deployment,
              and backend optimization.
            </p>
          </div>

          <div className="project-card">
            <h3>My Accounts Technology Upgrade</h3>
            <p>
              Migrated legacy enterprise systems into modern Angular SPA
              architecture with dashboards, REST APIs, and responsive UI.
            </p>
          </div>

          <div className="project-card">
            <h3>My Accounts Mobile Application</h3>
            <p>
              Hybrid mobile application supporting Android and iOS with secure
              login, offline capabilities, and responsive mobile UI.
            </p>
          </div>

          <div className="project-card">
            <h3>Mobile Sales Diary</h3>
            <p>
              Hybrid mobile sales application for insurance agents with dynamic
              forms, offline synchronization, and REST integrations.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <h2>Education</h2>

        <div className="education-card">
          <h3>B.Tech in Information Technology</h3>
          <p>
            Godavari Institute of Engineering and Technology, Rajahmundry
          </p>
          <p>JNTUK | 2008 - 2012</p>
        </div>
      </section>

      <footer>
        <p>
          © 2026 RamadurgaRao Toleti | Lead Full-Stack Engineer
        </p>
      </footer>
    </div>
  )
}

export default App