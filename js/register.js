/**
 * * This event for clicking on the form of the register page.
 */

registerEmail.focus();

registerSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  // * Validate the email pattern
  var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  // * Validate the username pattern
  var usernameRegex = /^[a-zA-Z0-9]+$/;

  if (
    registerEmail.value === "" ||
    registerUserName.value === "" ||
    registerPassword.value === "" ||
    !regexEmail.test(registerEmail.value) ||
    !usernameRegex.test(registerUserName.value)
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
