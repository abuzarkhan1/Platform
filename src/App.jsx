// App.jsx
import React, { useState } from 'react';
import { Moon, Sun, Github, Code, Zap, Heart, Menu, X, User } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode');
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <div className="logo">
          <Code size={28} />
          <h1>DevFlow</h1>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
            <li>
              <a href="https://github.com/abuzarkhan1" className="github-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Streamline Your <span className="accent">Workflow</span></h2>
            <p>Build, deploy, and scale your projects with our powerful development platform.</p>
            <div className="developer-info">
              <User size={18} />
              <span>Developed by <span className="accent">Abuzar Khan</span></span>
            </div>
            <div className="cta-buttons">
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-block">
              <pre>
                <code>
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>
        
        <section id="features" className="features">
          <h2>Key <span className="accent">Features</span></h2>
          <div className="feature-cards">
            <div className="feature-card">
              <Zap size={32} />
              <h3>Lightning Fast</h3>
              <p>Optimized performance for rapid development and deployment.</p>
            </div>
            <div className="feature-card">
              <Github size={32} />
              <h3>GitHub Integration</h3>
              <p>Seamless workflow with your existing repositories.</p>
            </div>
            <div className="feature-card">
              <Heart size={32} />
              <h3>Developer Friendly</h3>
              <p>Built by developers, for developers, with love.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <div className="footer-content">
          <div className="logo">
            <Code size={24} />
            <h2>DevFlow</h2>
          </div>
          <div className="footer-info">
            <p>&copy; 2025 DevFlow. All rights reserved.</p>
            <p>Created by <a href="https://github.com/abuzarkhan1" target="_blank" rel="noopener noreferrer" className="footer-link">Abuzar Khan</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;