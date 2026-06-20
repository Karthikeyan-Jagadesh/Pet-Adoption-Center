document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      siteNav.classList.toggle("open");
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("open");
      });
    });
  }

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(".site-nav a").forEach((link) => {
      if (link.dataset.nav === currentPage) {
        link.classList.add("active");
      }
    });
  }
});
