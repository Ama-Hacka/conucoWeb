// Replace with the real WhatsApp group invite link.
const WHATSAPP_LINK = "https://chat.whatsapp.com/your-group-link";

document.documentElement.classList.add("js");

document.querySelectorAll("[data-whatsapp]").forEach((el) => {
  el.href = WHATSAPP_LINK;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Header shadow on scroll
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Reveal cards and steps on scroll
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
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
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    observer.observe(el);
  });
} else {
  items.forEach((el) => el.classList.add("visible"));
}
