(() => {
  const searchForm = document.getElementById("searchForm");

  if (!searchForm) {
    return;
  }

  const searchInput = searchForm.querySelector("input");
  const productCards = document.querySelectorAll("[data-name]");
  const hideDelay = 220;
  const hideTimers = new WeakMap();

  function updateCardVisibility(card, shouldShow) {
    const existingTimer = hideTimers.get(card);

    if (existingTimer) {
      window.clearTimeout(existingTimer);
      hideTimers.delete(card);
    }

    if (shouldShow) {
      if (!card.hidden) {
        card.classList.remove("is-hiding");
        return;
      }

      card.hidden = false;
      card.classList.add("is-entering");
      card.addEventListener(
        "animationend",
        () => card.classList.remove("is-entering"),
        { once: true },
      );
      return;
    }

    if (card.hidden) {
      return;
    }

    card.classList.remove("is-entering");
    card.classList.add("is-hiding");
    const timer = window.setTimeout(() => {
      card.hidden = true;
      card.classList.remove("is-hiding");
      hideTimers.delete(card);
    }, hideDelay);

    hideTimers.set(card, timer);
  }

  function filterProducts() {
    const searchTerm = searchInput.value.trim().toLocaleLowerCase();

    productCards.forEach((card) => {
      const productName = card.dataset.name.toLocaleLowerCase();
      updateCardVisibility(card, productName.includes(searchTerm));
    });
  }

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterProducts();
  });

  searchInput.addEventListener("input", filterProducts);
})();
