// ── Scroll-triggered fade-in ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// ── Active nav link on scroll ──
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav .links a");

function updateActiveNav() {
  const scrollY = window.scrollY + 80;
  let current = "";

  sections.forEach((section) => {
    if (scrollY >= section.offsetTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();
