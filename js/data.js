/**
 * * My all products objects.
 */

const allProducts = [
  {
    id: 1,
    productName: "Phone",
    productType: "large",
    productImage: "imgs/products/pexels-tyler-lastovich-699122.jpg",
    productImageAltText: "This is just a phone photo!",
  },
  {
    id: 2,
    productName: "laptop",
    productType: "medium",
    productImage: "imgs/products/pexels-karsten-madsen-18105.jpg",
    productImageAltText: "This is just a laptop photo and its type is dell",
  },
  {
    id: 3,
    productName: "Ipad",
    productType: "large",
    productImage: "imgs/products/pexels-pixabay-221185.jpg",
    productImageAltText: "This is just a Ipad",
  },
  {
    id: 4,
    productName: "Screens",
    productType: "small",
    productImage: "imgs/products/screen.jpg",
    productImageAltText: "This is just a screens photo",
  },
];

/**
 * * All variables in the all app pages.
 */

let nameInNav = document.querySelector(
    ".landing__navbar__list__item__link-name"
  ),
  logout = document.getElementById("logout"),
  signsButtons = document.getElementById("signsButtons"),
  itemsAfterLocal = document.getElementById("itemsAfterLocal"),
  myIconInNavBar = document.querySelector(
    ".landing__navbar__list__item__link-icon"
  ),
  iconNumber = document.getElementById("spanNumberIcon"),
  myListIntern = document.querySelectorAll(".landing__navbar__list");

let getAddCartBtns = document.querySelectorAll(".addToCart"),
  groupingProducts = document.querySelector(
    ".landing__navbar__list__item__items"
  ),
  divProductInIcon = document.querySelector(
    ".landing__navbar__list__item__items div"
  ),
  divPlength = document.querySelector(
    ".landing__navbar__list__item__items div p"
  );

let myMainListInNavBar = document.querySelectorAll(".landing__navbar__list");

let registerEmail = document.getElementById("registerEmail"),
  registerUserName = document.getElementById("registerUserName"),
  registerPassword = document.getElementById("registerPassword"),
  registerSubmit = document.getElementById("registerSubmit");

let checkerModal = document.querySelector(".landing__checker");

let logInUserName = document.getElementById("logInUserName"),
  logInPassword = document.getElementById("logInPassword"),
  logInSubmit = document.getElementById("logInSubmit");

let toggleBars = document.querySelector(".toggle-menu");
