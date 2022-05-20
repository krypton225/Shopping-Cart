/**
 * * This event for clicking on the form of the login page.
 */

logInUserName.focus();

logInSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let getUserName = localStorage.getItem("name_user");
  let getPassword = localStorage.getItem("pass_user");

  if (getUserName === null && getPassword === null) {
    checkerModal.textContent = "Please, Register an account first!";
    checkerModal.classList.add("show-checker");
  }

  if (logInUserName.value === "" || logInPassword.value === "") {
    checkerModal.textContent = "Please, Enter all inputs!";
    checkerModal.classList.add("show-checker");
  } else {
    if (
      getUserName &&
      getUserName.trim() === logInUserName.value.trim() &&
      getPassword &&
      getPassword.trim() === logInPassword.value.trim()
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1200);
    } else {
      checkerModal.textContent = "Enter valid username or password";
    }
  }
});
