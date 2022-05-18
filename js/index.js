let blockOfOptionsInNavBar = document.querySelector(
  ".landing__navbar__options"
);
let myNameInNav = document.querySelector(
  ".landing__navbar__list__item__link-name"
);
let myMainListInNavBar = document.querySelectorAll(".landing__navbar__list")[0];
let logout = document.getElementById("logout");

/**
 * * Checking if the username is existed OR not.
 */

const checkUserNameExist = () => {
  if (localStorage.getItem("name_user") !== null) {
    myNameInNav.textContent = localStorage.getItem("name_user");
    myMainListInNavBar.classList.add("dis-none");
  } else {
    myMainListInNavBar.classList.remove("dis-none");
    blockOfOptionsInNavBar.classList.add("dis-none");
  }
};

checkUserNameExist();

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
