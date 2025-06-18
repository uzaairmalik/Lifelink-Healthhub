// Set the current date as the update date
document.addEventListener("DOMContentLoaded", function () {
  const updateDateElem = document.getElementById("update-date");
  if (updateDateElem) {
    updateDateElem.textContent = new Date().toLocaleDateString();
  }

  // Optional FAQ accordion toggle
  const faqItems = document.querySelectorAll(".faq .faq-item h4");
  faqItems.forEach((header) => {
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
    // Initially hide FAQ answers
    if (header.nextElementSibling) {
      header.nextElementSibling.style.display = "none";
    }
  });
});
