const testimonioButtons = document.querySelectorAll("[data-testimonio-btn]");
const testimonioPanels = document.querySelectorAll("[data-testimonio-panel]");

if (testimonioButtons.length && testimonioButtons.length === testimonioPanels.length) {
  const activarTestimonio = (index) => {
    testimonioButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;

      button.classList.toggle("activo", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    testimonioPanels.forEach((panel, panelIndex) => {
      const isActive = panelIndex === index;

      panel.classList.toggle("activo", isActive);
      panel.hidden = !isActive;
    });
  };

  testimonioButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      activarTestimonio(index);
    });
  });
}
