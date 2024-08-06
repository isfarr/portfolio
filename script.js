document.addEventListener("DOMContentLoaded", function () {
  // Code for smooth scrolling on anchor click
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Code for scrolling to a specific section
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.error(`Section with id "${sectionId}" not found.`);
    }
  }

  // Code for updating progress bar on scroll
  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    const progressBarFill = document.getElementById("progress-bar-fill");
    if (progressBarFill) {
      progressBarFill.style.width = `${scrollPercentage}%`;
    }
  });

  // Code for handling testimonials
  let currentIndex = 0;
  const quotes = document.querySelectorAll(".quote-card");

  function showCurrentQuote() {
    quotes.forEach((quote, index) => {
      quote.style.display = index === currentIndex ? "block" : "none";
    });
  }

  function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    showCurrentQuote();
  }

  function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    showCurrentQuote();
  }

  showCurrentQuote();
});
