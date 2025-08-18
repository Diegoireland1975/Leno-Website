// Mobile menu is showing on click
const mobileToggle = document.querySelector(".navbar__mobile-menu-toggle");
const mobileList = document.querySelector(".navbar__mobile-menu-list");

mobileToggle.addEventListener("click", (e) => {
  mobileList.classList.toggle("active");
});
