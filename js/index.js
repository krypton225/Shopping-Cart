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
          <button class="addToCart" onclick="returnID(${item.id})">add to cart</button>
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

toggleBars.addEventListener("click", () => {
  if (localStorage.getItem("name_user")) {
    itemsAfterLocal.classList.toggle("show-list");
  } else {
    signsButtons.classList.toggle("show-list");
    itemsAfterLocal.classList.add("dis-none");
  }
});

let counter = 0;
const returnID = (id) => {
  let myChoosenItem = allProducts.find((item) => item.id === id);

  let createdParagraph = document.createElement("p");
  let addTextNodeToP = document.createTextNode(myChoosenItem.productName);
  createdParagraph.appendChild(addTextNodeToP);

  divProductInIcon.appendChild(createdParagraph);
  /**
   * * Function for the number counting the icon on the navbar.
   */

  this.addEventListener("click", () => {
    iconNumber.textContent = counter;
    iconNumber.classList.add("show-number");
  });

  counter++;
};

myIconInNavBar.addEventListener("click", () => {
  groupingProducts.classList.toggle("show-products");
});

/**
 * * Checking if the username is existed OR not.
 */

const checkUserNameExist = () => {
  if (localStorage.getItem("name_user") !== null) {
    signsButtons.remove();
    nameInNav.textContent = localStorage.getItem("name_user");
  } else {
    // myMainListInNavBar.classList.remove("dis-none");
    itemsAfterLocal.classList.add("dis-none");
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
