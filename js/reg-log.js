/**
 * * This is for the nav bar when is in responsive.
 */

let toggleBars = document.querySelector(".toggle-menu"),
  landingNavList = document.querySelector(".landing__navbar__list");

toggleBars.addEventListener("click", () => {
  landingNavList.classList.toggle("show-list");
});
