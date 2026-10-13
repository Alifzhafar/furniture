(() => {
  const quantityInput = document.getElementById("qty");

  if (!quantityInput) {
    return;
  }

  document.querySelectorAll("[data-q]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentQuantity = Number(quantityInput.value);
      const quantityChange = Number(button.dataset.q);

      quantityInput.value = String(
        Math.max(1, currentQuantity + quantityChange),
      );

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        quantityInput.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(1.18)" },
            { transform: "scale(1)" },
          ],
          {
            duration: 260,
            easing: "ease-out",
          },
        );
      }
    });
  });
})();
