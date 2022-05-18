/**
 * * This is for the nav bar when is in responsive.
 */

let toggleBars = document.querySelector(".toggle-menu");

let signsButtons = document.getElementById("signsButtons");
let itemsAfterLocal = document.getElementById("itemsAfterLocal");

toggleBars.addEventListener("click", () => {
  if (signsButtons.classList.contains("dis-none")) {
    signsButtons.remove();
  }

  document
    .querySelector(".landing__navbar__list")
    .classList.toggle("show-list");
});
