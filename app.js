// Renders SITE_CONTENT (from content.js) into the page.
// You should not need to edit this file.

document.addEventListener("DOMContentLoaded", () => {

  // ---- Hero ----
  document.getElementById("heroTitle").textContent = SITE_CONTENT.hero.title;
  document.getElementById("heroIntro").textContent = SITE_CONTENT.hero.intro;
  const heroPhoto = document.getElementById("heroPhoto");
  heroPhoto.src = SITE_CONTENT.contact.photoUrl;

  // ---- About ----
  document.getElementById("aboutCopy").innerHTML = `<p>${SITE_CONTENT.about.copy}</p>`;

  // ---- Experience ----
  const expList = document.getElementById("experienceList");
  SITE_CONTENT.experience.forEach(job => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <span class="timeline-date">${job.dateRange}</span>
      <div>
        <p class="timeline-role">${job.role}</p>
        <p class="timeline-company">${job.company}</p>
        ${job.projectLine ? `<p class="timeline-project">${job.projectLine}</p>` : ""}
        <div class="timeline-desc">
          <ul>${job.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        </div>
      </div>
    `;
    expList.appendChild(item);
  });

  // ---- Skills ----
  const skillsGrid = document.getElementById("skillsGrid");
  SITE_CONTENT.skills.forEach(group => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <h3>${group.category}</h3>
      <div class="skill-tags">
        ${group.tags.map(t => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    `;
    skillsGrid.appendChild(card);
  });

  // ---- Projects ----
  const projectsGrid = document.getElementById("projectsGrid");
  SITE_CONTENT.projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p class="project-meta">${p.meta}</p>
      <p class="project-desc">${p.description}</p>
    `;
    projectsGrid.appendChild(card);
  });

  // ---- Certifications ----
  const certList = document.getElementById("certList");
  SITE_CONTENT.certifications.forEach(c => {
    const item = document.createElement("div");
    item.className = "cert-item";
    item.innerHTML = `
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-org">${c.org}</div>
      </div>
      <span class="cert-date">${c.date}</span>
    `;
    certList.appendChild(item);
  });

  // ---- Contact ----
  document.getElementById("emailValue").textContent = SITE_CONTENT.contact.email;
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    a.href = `mailto:${SITE_CONTENT.contact.email}`;
  });
  const linkedinLink = document.getElementById("linkedinLink");
  linkedinLink.href = SITE_CONTENT.contact.linkedin;
  linkedinLink.querySelector(".contact-value").textContent =
    SITE_CONTENT.contact.linkedin.replace("https://", "");

  if (SITE_CONTENT.contact.phone) {
    document.getElementById("phoneValue").textContent = SITE_CONTENT.contact.phone;
    document.getElementById("phoneLink").href = `tel:${SITE_CONTENT.contact.phone.replace(/\s+/g, "")}`;
  }

  // ---- CV download buttons ----
  ["downloadCvBtn", "downloadCvBtn2"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.href = SITE_CONTENT.contact.cvFileUrl;
  });

  // ---- About: interests ----
  document.getElementById("interestsValue").textContent = SITE_CONTENT.about.interests;

  // ---- Footer year ----
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

});
