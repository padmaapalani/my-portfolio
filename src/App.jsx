import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">K.B. Padmaa</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>K.B. Padmaa</h1>

          <h2>AI Developer</h2>

          <p className="hero-text">
            Python • Generative AI • NLP • Gemini API • React • Flask
          </p>

          <p className="hero-description">
            I build practical AI-powered applications using Generative AI,
            NLP and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="mailto:padmaapalani@gmail.com"
              className="btn secondary-btn"
            >
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/padmaa-balasubramanian-4b859a2a2"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:padmaapalani@gmail.com">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <p>
            I am an AI Developer with hands-on experience in Python,
            Generative AI, NLP, Gemini API, and AI-powered application
            development.
          </p>

          <p>
            I have developed AI-based recruitment and personalized learning
            applications using Flask, React, MySQL, and Supabase.
          </p>

          <p>
            I am interested in building practical Generative AI solutions
            and AI-powered applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <div className="tags">
              <span>Python</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>AI / ML</h3>
            <div className="tags">
              <span>Generative AI</span>
              <span>NLP</span>
              <span>Machine Learning</span>
              <span>Gemini API</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Web Development</h3>
            <div className="tags">
              <span>React</span>
              <span>Flask</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>PHP</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database & Tools</h3>
            <div className="tags">
              <span>MySQL</span>
              <span>Supabase</span>
              <span>Git</span>
            </div>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Faculty Recruitment System</h3>

            <p className="project-tech">
              React • Flask • NLP • Machine Learning • Gemini API
            </p>

            <p>
              AI-powered recruitment platform that parses candidate resumes
              using PyPDF2 and evaluates candidates using the Gemini API.
            </p>

            <p>
              Includes technical and psychometric assessments with a scoring
              system to support candidate evaluation and shortlisting.
            </p>

            <div className="project-tags">
              <span>Generative AI</span>
              <span>NLP</span>
              <span>React</span>
              <span>Flask</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Personalized Learning Platform</h3>

            <p className="project-tech">
              React • Supabase • NLP • Reinforcement Learning
            </p>

            <p>
              Personalized learning application that generates quiz
              questions using NLP techniques.
            </p>

            <p>
              Uses a reinforcement learning approach to adjust question
              difficulty based on learner responses.
            </p>

            <div className="project-tags">
              <span>NLP</span>
              <span>React</span>
              <span>Supabase</span>
              <span>RL</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>AI-driven Diabetes Home Management</h3>

            <p className="project-tech">
              React • Flask • MySQL • AI Models
            </p>

            <p>
              Web application using AI models to predict blood sugar levels
              and provide personalized meal recommendations.
            </p>

            <p>
              Built using React, Flask and MySQL.
            </p>

            <div className="project-tags">
              <span>AI</span>
              <span>React</span>
              <span>Flask</span>
              <span>MySQL</span>
            </div>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <p className="section-label">MY JOURNEY</p>

        <h2 className="section-title">Experience</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <p className="date">Dec 2025 – Feb 2026</p>

              <h3>AI/ML Intern</h3>

              <h4>Univision Technology, Chetpet</h4>

              <ul>
                <li>
                  Designed prompts for the Gemini API to analyze resumes and
                  evaluate candidates.
                </li>

                <li>
                  Worked on AI-assisted candidate evaluation and recruitment
                  automation.
                </li>

                <li>
                  Applied Generative AI concepts to support resume analysis
                  and candidate assessment.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <p className="date">Feb 2024</p>

              <h3>Web Development Intern</h3>

              <h4>CodeBind Technologies, T Nagar</h4>

              <ul>
                <li>
                  Developed responsive web pages using HTML, CSS, PHP and
                  MySQL.
                </li>

                <li>
                  Implemented web features with focus on usability and
                  responsive design.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <p className="section-label">EDUCATION</p>

        <h2 className="section-title">Education</h2>

        <div className="education-grid">

          <div className="education-card">
            <span>2022 – 2026</span>
            <h3>B.Tech – Information Technology</h3>
            <p>
              Meenakshi Sundararajan Engineering College
            </p>
            <strong>CGPA: 8.42</strong>
          </div>

          <div className="education-card">
            <span>May 2022</span>
            <h3>Class XII</h3>
            <p>Alpha Matriculation Higher Secondary School</p>
            <strong>87.6%</strong>
          </div>

          <div className="education-card">
            <span>March 2020</span>
            <h3>Class X</h3>
            <p>Alpha Matriculation Higher Secondary School</p>
            <strong>79.6%</strong>
          </div>

        </div>
      </section>

      {/* Certificates */}
      <section className="section">
        <p className="section-label">CERTIFICATIONS</p>

        <h2 className="section-title">Certificates</h2>

        <div className="certificate-list">

          <div className="certificate">
            <span>07/2025</span>
            <div>
              <h3>TCS ION Career Edge – Young Professional</h3>
              <p>TCS</p>
            </div>
          </div>

          <div className="certificate">
            <span>05/2025</span>
            <div>
              <h3>Programming in Python</h3>
              <p>NPTEL</p>
            </div>
          </div>

          <div className="certificate">
            <span>08/2026</span>
            <div>
              <h3>Introduction to Generative AI</h3>
              <p>Google Cloud</p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p>
          Interested in AI, Generative AI and practical AI-powered
          applications? Feel free to reach out.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:padmaapalani@gmail.com"
            className="btn primary-btn"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/padmaa-balasubramanian-4b859a2a2"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            LinkedIn
          </a>

        </div>

        <div className="contact-info">
          <p>📧 padmaapalani@gmail.com</p>
          <p>📱 7358109775</p>
          <p>📍 Chennai, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 K.B. Padmaa. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;