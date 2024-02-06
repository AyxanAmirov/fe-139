const menuBody = document.querySelector(".menu-bar");
const toggleMenu = document.querySelector(".toggle-icon");
const toggleMenuBody = document.querySelector(".toggle-menu");
const modalBasketBtn = document.querySelector(".basket");
const modalBasketBody = document.querySelector(".basket-data");
const basketIcon = document.querySelector(".basket-ui");
// favModal
const modalFavBtn = document.querySelector(".fav");
const modalFavBody = document.querySelector(".fav-data");
const favIcon = document.querySelector(".fav-ui");
const form = document.querySelector("#search-form");
const searchIput = document.querySelector(".search");

let cardList = [];
let favList = [];
runEvents();
function runEvents() {
  let openClose = true;
  toggleMenu.addEventListener("click", () => {
    if (openClose) {
      toggleMenuBody.style.display = "block";
      openClose = false;
    } else {
      toggleMenuBody.style.display = "none";
      openClose = true;
    }
  });

  modalBasketBtn.addEventListener("click", show);
  modalFavBtn.addEventListener("click", showFav);
  document.addEventListener("DOMContentLoaded", pageLoad);
  document.addEventListener("DOMContentLoaded", favPageLoad);
  searchIput.addEventListener("keyup", filterMenu);
}

const url = "menu.json";
fetch(url)
  .then((data) => data.json())
  .then((menuItems) => {
    addUi(menuItems);
  });
function addUiMain(datas) {
  menuBody.innerHTML += `
        <div class="box col-lg-3 col-md-12 col-sm-12">
        <img
          src="${datas.img}"
          alt="Food"
          class="food"
        />
        <p id="name" class="food-name">${datas.name}</p>
        <p id="desc" class="food-info">${datas.dsc}</p>
        <div class="rate-country">
            <p class="rate">Rate:${datas.rate}</p>
            <p class="country">${datas.country}</p>
        </div>
        <div class="add-price">
          <p class="price">${datas.price}$</p>
          <button class="add-fav" onclick="addFav('${datas.id}')">
            <i onclick="changeColor()" class="fa-solid fa-heart fav-ui-card" ></i>
          </button>
          <button type="button" class="add-basket" onclick="addBasket('${datas.id}')">
                <span class="basket-ui-card">Add Basket</span>
                <i></i>
          </button>
        </div>
      </div>
        `;
  
}

function addUi(menuItems) {
  menuItems.forEach((datas) => {
    addUiMain(datas);
  });
}
let showFavList = true;
let showBasket = true;

//basket
function show() {
  if (showBasket) {
    modalBasketBody.style.display = "block";
    basketIcon.style.color = "gold";
    showBasket = false;
    modalFavBody.style.display = "none";
    favIcon.style.color = "#fff";
    showFavList = true;
  } else {
    modalBasketBody.style.display = "none";
    basketIcon.style.color = "#fff";
    showBasket = true;
  }

}

function addBasket(id) {
  fetch(url)
    .then((data) => data.json())
    .then((menuItems) => {
      let foundedProduct = menuItems.find((product) => product.id === id);
      let foundcard = cardList.find((product) => product.id === id);
      if (!foundcard) {
        cardList.push({ ...foundedProduct, count: 1 });
      } else {
        alert("Səbətdə bu məhsul mövcuddur");
      }
      addBasketUi();
      localStorage.setItem("cardlist", JSON.stringify(cardList));
    });
}

function addBasketUi() {
  modalBasketBody.innerHTML = "";
  cardList.forEach((item) => {
    const { name, id, price, count } = item;
    modalBasketBody.innerHTML += `
  <div class="basket-box">
          <div class="name-btn">
            <p class="name-basket-item">${name}</p>
            <div class="buttons">
              <button onclick="remove('${id}')"><i class="fa-solid fa-trash trash"></i></button>
            </div>
          </div>
          <div class="price-btn">
            <div class="count-btn">
            <p class="min" onclick="updateBasketCount('${id}', 'min')"><span>-</span></p>
            <span class="nums">${count}</span>
            <p class="pls" onclick="updateBasketCount('${id}', 'plus')"><span>+</span></p>
            </div>
            <p class="num">Price:${count * price}$</p>
          </div>
          
        </div>
  `;
  });
  
  
}
function updateBasketCount(id, action) {
  let foundcard = cardList.find((product) => product.id === id);

  if (action === "min") {
    if (foundcard && foundcard.count > 1) {
      foundcard.count--;
    }
  } else if (action === "plus") {
    if (foundcard) {
      foundcard.count++;
    }
  }

  addBasketUi();
  localStorage.setItem("cardlist", JSON.stringify(cardList));
}

function checkStorage() {
  if (localStorage.getItem("cardlist")) {
    cardList = JSON.parse(localStorage.getItem("cardlist"));
  }
  
}
function pageLoad() {
  checkStorage();
  cardList.forEach((product) => {
    addBasketUi();
  });
}

function remove(id) {
  let foundedProduct = cardList.find((product) => product.id === id);
  let index = cardList.indexOf(foundedProduct);
  cardList.splice(index, 1);
  localStorage.setItem("cardlist", JSON.stringify(cardList));
  modalBasketBody.innerHTML = `<h3 class="basket-name">Basket</h3>`;
  cardList.forEach((product) => {
    addBasketUi();
  });
}

//fav

function showFav() {
  if (showFavList) {
    modalFavBody.style.display = "block";
    favIcon.style.color = "red";
    showFavList = false;
    modalBasketBody.style.display = "none";
    basketIcon.style.color = "#fff";
    showBasket = true;
  } else {
    modalFavBody.style.display = "none";
    favIcon.style.color = "#fff";
    showFavList = true;
  }
  
}

function addFav(id) {
  fetch(url)
    .then((data) => data.json())
    .then((menuItems) => {
      let foundedProduct = menuItems.find((product) => product.id === id);
      let foundcard = favList.find((product) => product.id === id);
      if (!foundcard) {
        favList.push({ ...foundedProduct });
      } else {
        alert("Yaddaşda bu məhsul mövcuddur");
      }
      
      addfavUi();
      localStorage.setItem("favlist", JSON.stringify(favList));
    });
}
function addfavUi() {
  modalFavBody.innerHTML = "";
  favList.forEach((item) => {
    const { name, price, country, id } = item;
    modalFavBody.innerHTML += `
  <div class="basket-box">
          <div class="name-btn">
            <p class="name-basket-item">${name}</p>
            <div class="buttons">
              <button onclick="removeFav('${id}')"><i class="fa-solid fa-trash trash"></i></button>
            </div>
          </div>
          <div class="price-btn">
            <p class="num">Price:${price}$</p>
            <p class="countryFav">Country:${country}</p>
          </div>
          
        </div> 
  `;
  });
    

}

function checkFavStorage() {
  if (localStorage.getItem("favlist")) {
    favList = JSON.parse(localStorage.getItem("favlist"));
  }
}
function favPageLoad() {
  checkFavStorage();
  favList.forEach((product) => {
    addfavUi();
  });
}
function removeFav(id) {
  let foundedProduct = favList.find((product) => product.id === id);
  let index = favList.indexOf(foundedProduct);
  favList.splice(index, 1);
  localStorage.setItem("favlist", JSON.stringify(favList));
  modalFavBody.innerHTML = `<h3 class="fav-name">Favorites</h3>`;
  favList.forEach((product) => {
    addfavUi();
  });
  
}

// filter
function filterMenu(e) {
  let searchData = e.target.value.trim().toLowerCase();
  fetch(url)
    .then((data) => data.json())
    .then((product) => {
      let found = product.filter(
        (foods) =>
          foods.name.toLowerCase().includes(searchData) ||
          foods.dsc.toLowerCase().includes(searchData)
      );
      menuBody.innerHTML = "";
      found.forEach((datas) => {
        addUiMain(datas);
        console.log(datas);
      });
    });
}
