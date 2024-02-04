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
const form = document.querySelector("#search-form")
const searchIput = document.querySelector(".search")

let products = [];

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
  modalFavBtn.addEventListener("click",showFav);
  document.addEventListener("DOMContentLoaded", pageLoad);
  document.addEventListener("DOMContentLoaded", favPageLoad);
  searchIput.addEventListener("keyup",filterMenu)
}

const url = "menu.json";
fetch(url)
  .then((data) => data.json())
  .then((menuItems) => {
    addUi(menuItems);
  });
function addUiMain(datas){
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
            <i class="fa-solid fa-heart fav-ui-card" ></i>
          </button>
          <button type="button" class="add-basket" onclick="addBasket('${datas.id}')">
            <i class="fa-solid fa-cart-shopping basket-ui-card"></i>
          </button>
        </div>
      </div>
        `;
}
function addUi(menuItems) {
  menuItems.forEach((datas) => {
    addUiMain(datas)
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
      addBasketUi(foundedProduct);
      addStorage(foundedProduct);
    });
}

function addBasketUi(foundedProduct) {
  
  modalBasketBody.innerHTML += `
  <div class="basket-box">
        <img src="${foundedProduct.img}" alt="" class="basket-image">
        <div class="rate-count-name">
            <p  class="name-basket-item">${foundedProduct.name}</p>
            <p class="rate-basket-item">Rate:${foundedProduct.rate}</p>
            <p class="count-basket-item">${foundedProduct.country}</p>
            <div class="price-num">
              <p class="num">1</p>
              <p class="price-basket-item">Total:${foundedProduct.price}$</p>
            </div>
        </div>
        <div class="buttons">
            <button onclick="remove('${foundedProduct.id}')"><i class="fa-solid fa-trash trash"></i></button>
        </div>
    </div>
  `;
}





function addStorage(product) {
  checkStorage();
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
}

function checkStorage() {
  if (localStorage.getItem("products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }
}
function pageLoad() {
  checkStorage();
  products.forEach((product) => {
    addBasketUi(product);
  });
}


function remove(id) {
  let foundedProduct = products.find((product) => product.id === id);
  let index = products.indexOf(foundedProduct);
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  modalBasketBody.innerHTML = `<h3 class="basket-name">Basket</h3>`;
  products.forEach((product) => {
    addBasketUi(product);
  });
}


//fav

function showFav(){
  if (showFavList) {
    modalFavBody.style.display = "block";
    favIcon.style.color = "red";
    showFavList = false;
    modalBasketBody.style.display = "none";
    basketIcon.style.color = "#fff";
    showBasket = true
  } else {
    modalFavBody.style.display = "none";
    favIcon.style.color = "#fff";
    showFavList = true;
  }
}

function addFav(id){
  fetch(url)
  .then((data) => data.json())
  .then((menuItems) => {
    let foundedProduct = menuItems.find((product) => product.id === id);
    addfavUi(foundedProduct);
    addFavStorage(foundedProduct);
  });
}
function addfavUi(fav){
  modalFavBody.innerHTML += `
  <div class="fav-box">
          <img
            src="${fav.img}"
            alt=""
            class="basket-image"
          />
          <div class="rate-count-name">
            <p class="name-fav-item">${fav.name}</p>
            <p class="rate-fav-item">Rate:${fav.rate}</p>
            <p class="count-fav-item">${fav.country}</p>

            <p class="price-fav-item">${fav.price}$</p>
          </div>
          <div class="buttons">
            <button onclick="removeFav('${fav.id}')"><i class="fa-solid fa-trash trash-fav"></i></button>
          </div>
        </div>
  `
}

let favProducts = []
function addFavStorage(product) {
  checkFavStorage();
  favProducts.push(product);
  localStorage.setItem("favProducts", JSON.stringify(favProducts));
}

function checkFavStorage() {
  if (localStorage.getItem("favProducts") === null) {
    favProducts = [];
  } else {
    favProducts = JSON.parse(localStorage.getItem("favProducts"));
  }
}
function favPageLoad() {
  checkFavStorage();
  favProducts.forEach((product) => {
    addfavUi(product);
  });
}
function removeFav(id) {
  let foundedProduct = favProducts.find((product) => product.id === id);
  let index = favProducts.indexOf(foundedProduct);
  favProducts.splice(index, 1);
  localStorage.setItem("favProducts", JSON.stringify(favProducts));
  modalFavBody.innerHTML = `<h3 class="fav-name">Favorites</h3>`;
  favProducts.forEach((product) => {
    addfavUi(product);
  });
}

// filter
function filterMenu(e){
let searchData = e.target.value.trim().toLowerCase()
fetch(url)
.then(data=>data.json())
.then(product=>{
  let found = product.filter(foods=>foods.name.toLowerCase().includes(searchData) || foods.dsc.toLowerCase().includes(searchData) )
  menuBody.innerHTML = ''
  found.forEach(datas=>{
    addUiMain(datas)
    console.log(datas);
  })
})
}

