// Highlight the correct navigation link
const links = document.querySelectorAll("nav ul li a");

// Extract only the last part of the URL path (e.g., "skills_projects.html")
const currentPath = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const linkPath = link.getAttribute("href").split("/").pop(); // Get the href path
  if (currentPath === linkPath) {
    link.classList.add("active"); // Add 'active' class to the matching link
  } else {
    link.classList.remove("active"); // Remove 'active' from non-matching links
  }
});
// Apply fade-in animations when elements come into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      observer.unobserve(entry.target); // Stop observing once animation is triggered
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));


