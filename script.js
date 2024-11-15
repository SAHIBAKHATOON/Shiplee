// Subtle animation for scrolling sections
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;
    
    elements.forEach((el) => {
      const positionFromTop = el.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });
  
  // Initial style
  document.querySelectorAll("section").forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.6s ease";
  });
  