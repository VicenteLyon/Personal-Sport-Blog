// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// ── STAGGER GRID CHILDREN ──
document.querySelectorAll('.interests-grid.reveal, .blog-grid.reveal').forEach(grid => {
  grid.querySelectorAll(':scope > *').forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.1}s`;
  });
});

// ── CONTACT FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Message Sent! ';
  btn.style.background = '#2a7a4a';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
