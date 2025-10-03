// --- Mobile Menu Functionality ---
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

// Open mobile menu
function openMobileMenu() {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  mobileMenuOverlay.classList.remove("hidden");
}

// Close mobile menu
function closeMobileMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  mobileMenuOverlay.classList.add("hidden");
}

// Open menu on button click
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", openMobileMenu);
}

// Close menu on overlay click
if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener("click", closeMobileMenu);
}

// Close menu when clicking a link inside the menu
if (mobileMenu) {
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}

// --- Mobile Product Dropdown ---
const mobileProductDropdownBtn = document.getElementById(
  "mobileProductDropdownBtn"
);
const mobileProductDropdown = document.getElementById("mobileProductDropdown");
const dropdownIcon = document.getElementById("dropdownIcon");

if (mobileProductDropdownBtn && mobileProductDropdown && dropdownIcon) {
  mobileProductDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileProductDropdown.classList.toggle("hidden");
    dropdownIcon.classList.toggle("rotate-180");
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !mobileProductDropdown.contains(e.target) &&
      !mobileProductDropdownBtn.contains(e.target)
    ) {
      mobileProductDropdown.classList.add("hidden");
      dropdownIcon.classList.remove("rotate-180");
    }
  });
}

// Handle category selection from mobile dropdown (if you want to filter on product.html, you need to implement renderProducts etc. there)
// Here, just close the menu and let the anchor work
if (mobileProductDropdown) {
  mobileProductDropdown.querySelectorAll("a[data-category]").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
      // Let the anchor do its default scroll/navigation
    });
  });
}

// --- Navbar Products Link (Desktop) ---
document.addEventListener("DOMContentLoaded", function () {
  const navbarProducts = document.getElementById("navbarProducts");
  if (navbarProducts) {
    navbarProducts.addEventListener("click", function () {
      // No preventDefault: let anchor scroll to #products
      // If you want to do filtering, do it on product.html
    });
  }
});

// --- Smooth Scroll for all anchor links (enabled for all browsers) ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      // Optionally close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains("translate-x-full")) {
        closeMobileMenu();
      }
    }
  });
});
