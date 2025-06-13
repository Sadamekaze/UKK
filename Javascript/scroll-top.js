const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollThreshold = 100;
const handleScroll = () => {
  if (window.scrollY > scrollThreshold) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollToTopBtn.classList.remove("opacity-100", "visible");
    scrollToTopBtn.classList.add("opacity-0", "invisible");
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.addEventListener("scroll", handleScroll);
scrollToTopBtn.addEventListener("click", scrollToTop);