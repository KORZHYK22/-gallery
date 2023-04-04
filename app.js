const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    function clearActiveClasses() {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    clearActiveClasses();
    slide.classList.add("active");
  });
}
