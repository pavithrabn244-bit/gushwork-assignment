// script.js

// Sticky Header
const stickyHeader = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    stickyHeader.classList.add("show");
  } else {
    stickyHeader.classList.remove("show");
  }

});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Carousel Buttons
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: 320,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -320,
    behavior: "smooth"
  });
});