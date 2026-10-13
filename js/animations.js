(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const animatedElements = document.querySelectorAll(
    ".nav-float, .hero, .stat, .who, .sec, .scard, .wc, .pcard, .panel, .formc, .cinfo, .foot",
  );

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -24px 0px",
    },
  );

  animatedElements.forEach((element, index) => {
    const stagger = (index % 4) * 70;

    element.classList.add("motion-reveal");
    element.style.setProperty("--reveal-delay", `${stagger}ms`);
    observer.observe(element);
  });
})();
