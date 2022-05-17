/**
 * * Get the inputs and set it into the localStorage.
 */

let registerEmail = document.getElementById("registerEmail"),
  registerUserName = document.getElementById("registerUserName"),
  registerPassword = document.getElementById("registerPassword"),
  registerSubmit = document.getElementById("registerSubmit");

let checkerModal = document.querySelector(".landing__checker");

// * Close the checker modal
checkerModal.addEventListener("click", () => {
  checkerModal.classList.remove("show-checker");
});

registerSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    registerEmail.value === "" ||
    registerUserName.value === "" ||
    registerPassword.value === ""
  ) {
    checkerModal.textContent = "Please, Enter all inputs!";
    checkerModal.classList.add("show-checker");
  } else {
    localStorage.clear();

    localStorage.setItem("email_user", registerEmail.value);
    localStorage.setItem("name_user", registerUserName.value);
    localStorage.setItem("pass_user", registerPassword.value);

    registerEmail.removeAttribute("required");
    registerPassword.removeAttribute("required");
    registerUserName.removeAttribute("required");

    registerEmail.value = "";
    registerPassword.value = "";
    registerUserName.value = "";

    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
});
