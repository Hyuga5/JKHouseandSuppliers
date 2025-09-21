document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const jkhouse = document.getElementById("jkhouse");
  const desktopLinks = document.querySelectorAll("#links a");
  const mobileLinks = document.querySelectorAll("#mobile-menu a");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const navbarHeight = navbar.offsetHeight;

  // Scroll effect
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-white/20", "shadow-none");
      navbar.classList.add("bg-white", "shadow-md");
      jkhouse.classList.remove("text-white");
      jkhouse.classList.add("text-gray-900");

      desktopLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-gray-900");
      });

      mobileLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-gray-900");
      });

      menuToggle.querySelector("svg").classList.remove("text-white");
      menuToggle.querySelector("svg").classList.add("text-black");
    } else {
      navbar.classList.add("bg-white/20", "shadow-none");
      navbar.classList.remove("bg-white", "shadow-md");
      jkhouse.classList.add("text-white");
      jkhouse.classList.remove("text-gray-900");

      desktopLinks.forEach((link) => {
        link.classList.remove("text-gray-900");
        link.classList.add("text-white");
      });

      mobileLinks.forEach((link) => {
        link.classList.remove("text-gray-900");
        link.classList.add("text-white");
      });

      menuToggle.querySelector("svg").classList.remove("text-black");
      menuToggle.querySelector("svg").classList.add("text-white");
    }
  }

  // Toggle mobile menu
  function toggleMenu() {
    mobileMenu.classList.toggle("translate-x-full");
    menuOverlay.classList.toggle("opacity-100");
    menuOverlay.classList.toggle("pointer-events-none");
    document.body.style.overflow = mobileMenu.classList.contains(
      "translate-x-full"
    )
      ? ""
      : "hidden";
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const topPos = target.offsetTop - navbarHeight;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
      if (!mobileMenu.classList.contains("translate-x-full")) toggleMenu();
    });
  });

  window.addEventListener("scroll", handleScroll);
  menuToggle.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);
  handleScroll();
});

// Form submission
const form = document.querySelector("form");
const statusMsg = document.getElementById("form-status");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        statusMsg.textContent = "✅ Thank you! Your message has been sent.";
        statusMsg.classList.remove("hidden", "text-red-500");
        statusMsg.classList.add("text-green-600");
        form.reset();
      } else {
        statusMsg.textContent = "❌ Oops! Something went wrong.";
        statusMsg.classList.remove("hidden", "text-green-600");
        statusMsg.classList.add("text-red-500");
      }
    } catch (error) {
      statusMsg.textContent = "❌ Network error. Please try again.";
      statusMsg.classList.remove("hidden", "text-green-600");
      statusMsg.classList.add("text-red-500");
    }
  });
}
