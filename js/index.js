let nameInNav = document.querySelector(
    ".landing__navbar__list__item__link-name"
  ),
  myMainListInNavBar = document.querySelectorAll(".landing__navbar__list")[0],
  logout = document.getElementById("logout"),
  signsButtons = document.getElementById("signsButtons"),
  itemsAfterLocal = document.getElementById("itemsAfterLocal"),
  myIconInNavBar = document.querySelector(
    ".landing__navbar__list__item__link-icon"
  ),
  iconNumber = document.querySelector(
    ".landing__navbar__list__item__link__number"
  );

/**
 * * My all products.
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
    productImage: "imgs/products/screen.jpg",
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
    productImage: "imgs/products/pexels-karsten-madsen-18105.jpg",
    productImageAltText: "This is just a screens photo",
  },
];

const setAllProductsInSection = () => {
  let myContent = document.querySelector(".items__content");

  allProducts.forEach((item) => {
    let myPattern = `<div class="items__content__card">
      <div class="items__content__card__img">
          <img src="${item.productImage}"
              alt="${item.productImageAltText}" draggable="false">
      </div>

      <div class="items__content__card__info">
          <p class="items__content__card__info__desc">
              Lorem ipsum dolor sit amet adipisicing.
          </p>
          <p class="items__content__card__info__type">Type: ${item.productType}</p>
      </div>

      <div class="items__content__card__operations">
          <button id="addToCart" onclick="returnID(${item.id})">add to cart</button>
          <i class="fav fas fa-heart fa-beat" style="--fa-animation-duration: 1s;"></i>
      </div>
  </div>`;

    myContent.innerHTML += myPattern;
  });
};

setAllProductsInSection();

/**
 * * Programming add to cart button.
 */

let getAddCartBtn = document.querySelectorAll(
    ".items__content__card__operations"
  ),
  groupingProducts = document.querySelector(
    ".landing__navbar__list__item__items"
  );
divProductInIcon = document.querySelector(
  ".landing__navbar__list__item__items div"
);

let myCounter = 1;

getAddCartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    iconNumber.textContent = myCounter++;
    iconNumber.classList.add("show-number");
  });
});

const returnID = (id) => {
  let myChoosenItem = allProducts.find((item) => item.id === id);

  let createdParagraph = document.createElement("p");
  let addTextNodeToP = document.createTextNode(myChoosenItem.productName);
  createdParagraph.appendChild(addTextNodeToP);

  divProductInIcon.appendChild(createdParagraph);
};

myIconInNavBar.addEventListener("click", () => {
  groupingProducts.classList.toggle("show-products");
});

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

/**
 * * Function for the number counting the icon on the navbar.
 */
