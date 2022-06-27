"use strict";

window.addEventListener("scroll", () => {
  const contentAbout = document.querySelector("#about");
  const contentPosition = contentAbout.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (contentPosition < screenPosition) {
    contentAbout.classList.add("animation-up");
  }
});

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", () => {
  let menuOpen = document.querySelector("nav");

  menuOpen.classList.toggle("open");
  menuOpen.classList.toggle("openMenuAnimation");
});
