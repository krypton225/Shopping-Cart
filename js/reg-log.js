/**
 * * This is for the nav bar when is in responsive.
 */

let toggleBars = document.querySelector(".toggle-menu");

toggleBars.addEventListener("click", () => {
  document
    .querySelector(".landing__navbar__list")
    .classList.toggle("show-list");
});
