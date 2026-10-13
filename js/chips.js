(() => {
  document.querySelectorAll(".chips").forEach((group) => {
    const buttons = group.querySelectorAll("button");

    buttons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.classList.contains("on")),
      );

      button.addEventListener("click", () => {
        buttons.forEach((item) => {
          const isSelected = item === button;

          item.classList.toggle("on", isSelected);
          item.setAttribute("aria-pressed", String(isSelected));
        });
      });
    });
  });
})();
