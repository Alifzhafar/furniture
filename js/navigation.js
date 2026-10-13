(() => {
  document.querySelectorAll(".nav-float").forEach((navigation) => {
    const toggle = navigation.querySelector(".nav-toggle");
    const menu = navigation.querySelector(".nav-links");

    if (!toggle || !menu) {
      return;
    }

    function setMenuOpen(isOpen) {
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
      );
      menu.classList.toggle("is-open", isOpen);
    }

    toggle.addEventListener("click", () => {
      setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", () => setMenuOpen(false));
  });
})();
