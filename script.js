<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Your Name — Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home">YourName</a>

      <button id="nav-toggle" aria-label="Toggle navigation">
        <span class="hamburger"></span>
      </button>

      <nav id="nav" class="nav">
        <ul class="nav-list">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
          <li><button id="theme-toggle" class="btn-icon" aria-label="Toggle theme">🌙</button></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero -->
    <section id="home" class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1>Hi, I’m <span class="accent">Your Name</span></h1>
          <p>Frontend developer building modern, responsive websites with HTML, CSS & vanilla JavaScript.</p>
          <div class="hero-cta">
            <a class="btn" href="#projects">View Projects</a>
            <a class="btn btn-outline" href="#contact">Contact Me</a>
          </div>
          <div class="socials">
            <a href="#" aria-label="GitHub">GitHub</a> ·
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
        <div class="hero-image">
          <!-- Placeholder avatar / illustration -->
          <div class="avatar">👨‍💻</div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <p class="section-sub">A few projects I worked on recently.</p>

        <div class="projects-grid" id="projects-grid">
          <!-- Project card 1 -->
          <article class="card">
            <div class="card-media" style="background-image:url('https://via.placeholder.com/800x450')"></div>
            <div class="card-body">
              <h3>Project One</h3>
              <p>Short description of project one — tech stack and purpose.</p>
              <div class="card-actions">
                <a href="#" class="link">Live</a>
                <a href="#" class="link">Code</a>
              </div>
            </div>
          </article>

          <!-- Project card 2 -->
          <article class="card">
            <div class="card-media" style="background-image:url('https://via.placeholder.com/800x450')"></div>
            <div class="card-body">
              <h3>Project Two</h3>
              <p>Short description of project two — what it does and why it’s cool.</p>
              <div class="card-actions">
                <a href="#" class="link">Live</a>
                <a href="#" class="link">Code</a>
              </div>
            </div>
          </article>

          <!-- add more cards as needed -->
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section alt">
      <div class="container about-inner">
        <div class="about-text">
          <h2>About Me</h2>
          <p>I’m a web developer who loves building clean UI and thoughtful UX. I focus on front-end technologies and enjoy learning new tools and patterns.</p>
          <ul class="skills">
            <li>HTML &amp; CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive design</li>
            <li>Accessibility basics</li>
          </ul>
        </div>
        <div class="about-stats">
          <div class="stat">
            <strong>3+</strong>
            <span>Years experience</span>
          </div>
          <div class="stat">
            <strong>10+</strong>
            <span>Projects</span>
          </div>
          <div class="stat">
            <strong>100%</strong>
            <span>Client satisfaction</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <p class="section-sub">Want to work together? Send a message.</p>

        <form id="contact-form" class="contact-form" onsubmit="return false;">
          <div class="form-row">
            <input type="text" id="name" name="name" placeholder="Your name" required />
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <textarea id="message" name="message" rows="6" placeholder="Your message" required></textarea>
          <div class="form-row actions">
            <button id="send-btn" class="btn">Send Message</button>
            <div id="form-msg" class="form-msg" aria-live="polite"></div>
          </div>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© <span id="year"></span> Your Name — Built with ❤️</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>