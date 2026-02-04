/* Navbar */
const navbar = document.getElementById("navbar");
navbar.innerHTML = `
  <div class="nav-container">
    <span class="logo">${resumeData.name}</span>
    <ul class="nav-links">
      ${["hero","about","skills","projects","timeline","contact"]
        .map(id => `<li><a href="#${id}">${id}</a></li>`).join("")}
    </ul>
  </div>
`;

/* Hero */
document.getElementById("hero").innerHTML = `
  <div class="hero-wrapper fade-in">

    <div class="hero-text">
      <h1>${resumeData.name}</h1>
      <h2>${resumeData.role}</h2>
      <p>${resumeData.intro}</p>

      <div class="cta">
        <a class="btn" href="assets/resume.pdf" download>
          Download Resume
        </a>
        <a class="btn outline" href="#contact">Contact</a>
      </div>
    </div>

    <div class="hero-image">
      <img src="assets/profile.jpeg" alt="${resumeData.name}">
    </div>

  </div>
`;


/* About */
document.getElementById("about").innerHTML = `
  <h2>About Me</h2>
  <p>I am an AI/ML enthusiast passionate about building intelligent systems and data-driven solutions. I enjoy developing robust backend architectures using Python frameworks like FastAPI and Flask, while integrating machine learning models to solve real-world problems.
I have worked on projects involving disease prediction systems, NLP-based chatbots, recommendation engines, and intelligent classification models. My work focuses on transforming raw data into meaningful insights and deploying scalable backend APIs that power intelligent applications.
With strong foundations in Machine Learning, NLP, and system design, I actively participate in hackathons and competitive programming to continuously enhance my problem-solving and analytical skills. I am driven by curiosity and innovation, always exploring new ways to apply AI to impactful real-world challenges.</p>
`;

/* Skills */
document.getElementById("skills").innerHTML = `
  <h2>Skills</h2>
  <div class="grid">
    ${resumeData.skills.map(skill =>
      `<div class="card skill">${skill}</div>`).join("")}
  </div>
`;

/* Projects */
document.getElementById("projects").innerHTML = `
  <h2>Projects</h2>
  <div class="grid">
    ${resumeData.projects.map(p => `
      <div class="card project">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span>${p.tech.join(" • ")}</span>
        <div class="links">
          <a href="${p.github}" target="_blank">GitHub</a>
        </div>
      </div>`).join("")}
  </div>
`;

/* Experience */
document.getElementById("timeline").innerHTML = `
  <h2>Experience</h2>
  ${resumeData.experience.map(e => `
    <div class="card timeline-item">
      <h3>${e.title}</h3>
      <span>${e.org} | ${e.time}</span>
      <p>${e.desc}</p>
    </div>`).join("")}
`;

/* Contact */
document.getElementById("contact").innerHTML = `
  <h2>Contact</h2>
  <p>Email: ${resumeData.contact.email}</p>
  <p>Phone: ${resumeData.contact.phone}</p>
  <div class="socials">
    <a href="${resumeData.contact.linkedin}">LinkedIn</a>
    <a href="${resumeData.contact.github}">GitHub</a>
  </div>
`;

/* Footer */
document.getElementById("footer").innerHTML = `
  <div class="footer-container">

    <div class="footer-left">
      <h3>${resumeData.name}</h3>
      <p>${resumeData.role}</p>
    </div>

    <div class="footer-contact">
      <h4>Contact</h4>
      <p>📧 ${resumeData.contact.email}</p>
      <p>📞 ${resumeData.contact.phone}</p>
    </div>

    <div class="footer-socials">
      <h4>Connect</h4>
      <a href="${resumeData.contact.linkedin}" target="_blank">LinkedIn</a>
      <a href="${resumeData.contact.github}" target="_blank">GitHub</a>
      <a href="${resumeData.contact.leetcode}" target="_blank">LeetCode</a>
    </div>

  </div>

  <div class="footer-bottom">
    © ${new Date().getFullYear()} ${resumeData.name} • All Rights Reserved
  </div>
`;


/* Intersection Observer */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
});
document.querySelectorAll("section, .card").forEach(el => observer.observe(el));
