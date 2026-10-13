(() => {
  const contactForm = document.getElementById("contactForm");
  const confirmationMessage = document.getElementById("formMsg");

  if (!contactForm || !confirmationMessage) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    confirmationMessage.classList.remove("d-none");
    contactForm.reset();
  });
})();
