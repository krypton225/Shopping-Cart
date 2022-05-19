let nameInNav = document.querySelector(
    ".landing__navbar__list__item__link-name"
  ),
  myMainListInNavBar = document.querySelectorAll(".landing__navbar__list")[0],
  logout = document.getElementById("logout"),
  signsButtons = document.getElementById("signsButtons"),
  itemsAfterLocal = document.getElementById("itemsAfterLocal");

/**
 * * Checking if the username is existed OR not.
 */

const checkUserNameExist = () => {
  if (localStorage.getItem("name_user") !== null) {
    nameInNav.textContent = localStorage.getItem("name_user");
    myMainListInNavBar.classList.add("dis-none");
  } else {
    myMainListInNavBar.classList.remove("dis-none");
    blockOfOptionsInNavBar.classList.add("dis-none");
  }
};

checkUserNameExist();

toggleBars.addEventListener("click", () => {
  if (localStorage.getItem("name_user")) {
    signsButtons.remove();
  }
  myMainListInNavBar.classList.toggle("show-list");
});

/**
 * * Programming logout button
 */

const logOutButtin = () => {
  logout.addEventListener("click", () => {
    localStorage.clear();

    setTimeout(() => {
      window.location = "register.html";
    }, 1000);
  });
};

logOutButtin();
