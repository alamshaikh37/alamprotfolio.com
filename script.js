window.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for anchor links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Responsive log
  console.log("Portfolio loaded and responsive.");

  // 🌙 Dark Mode Toggle
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🌓 Toggle Dark Mode";
  Object.assign(toggleButton.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#0070f3",
    color: "#fff",
    cursor: "pointer",
    zIndex: 1000
  });

  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
