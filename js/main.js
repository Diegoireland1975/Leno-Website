// *******************************
// Mobile menu is showing on click
// **************************
const mobileToggle = document.querySelector(".navbar__mobile-menu-toggle");
const mobileList = document.querySelector(".navbar__mobile-menu-list");
// select icon inside button
const icon = mobileToggle.querySelector("i");

mobileToggle.addEventListener("click", (e) => {
  mobileList.classList.toggle("active");

  // ***********************************
  /* transfrom hamburger icon into X */
  // **********************************

  mobileToggle.classList.toggle("active");

  // replace icon  that is currently displayed
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark"); // swap to X
  } else {
    icon.classList.replace("fa-xmark", "fa-bars"); // swap back
  }
});
// change background color and add blue on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});

// Video Modal
const modal = document.getElementById("videoModal");
const videoButton = document.getElementById("preview__video-button");
const closeBtn = document.getElementById("modal__close-btn");
const videoPlayer = document.getElementById("videoPlayer");

// open modal on click
videoButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// replace the src attribute with the video URL
videoPlayer.src = "https://www.youtube.com/embed/8sXRyHI3bLw";

// close modal clicking the close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  videoPlayer.src = "";
});

// close modal clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    videoPlayer.src = "";
  }
});
