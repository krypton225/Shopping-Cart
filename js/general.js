/**
 * * Open & close the checker modal of the inputs in register.html and login.html.
 */

const checkerModalPopUp = () => {
  checkerModal.addEventListener("click", () => {
    checkerModal.classList.remove("show-checker");
  });
};

checkerModalPopUp();

toggleBars.addEventListener("click", () => {
  document.querySelector(".landing__navbar ul").classList.toggle("show-list");
});
