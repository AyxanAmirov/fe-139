const menuBody = document.querySelector(".menu-bar")
const toggleMenu = document.querySelector(".toggle-icon")
const toggleMenuBody = document.querySelector(".toggle-menu")
const modalBasketBtn = document.querySelector(".basket")
const modalBasketBody = document.querySelector(".basket-data")
const basketIcon = document.querySelector(".basket-ui")
runEvents()
function runEvents(){
    let openClose = true
    toggleMenu.addEventListener("click",()=>{
   if(openClose){
     toggleMenuBody.style.display="block"
     openClose = false
   }else{
    toggleMenuBody.style.display="none"
    openClose = true
   }
})


modalBasketBtn.addEventListener("click",show)
}
const url = "menu.json"
fetch(url)
.then(data=>data.json())
.then(menuItems=>{
    addUi(menuItems);
})

function addUi(menuItems){
    menuItems.forEach(datas=>{
        menuBody.innerHTML += `
        <div class="box col-lg-3">
        <img
          src="${datas.img}"
          alt="Food"
          class="food"
        />
        <p class="food-name">${datas.name}</p>
        <p class="food-info">${datas.dsc}</p>
        <div class="rate-country">
            <p class="rate">Rate:${datas.rate}</p>
            <p class="country">${datas.country}</p>
        </div>
        <div class="add-price">
          <p class="price">${datas.price}$</p>
          <button class="add-fav" >
            <i class="fa-solid fa-heart fav-ui-card"></i>
          </button>
          <button type="button" class="add-basket" onclick="addBasket(${datas.id})">
            <i class="fa-solid fa-cart-shopping basket-ui-card"></i>
          </button>
        </div>
      </div>
        `
    })
}

let showBasket = true
function show(){
  if(showBasket){
    modalBasketBody.style.display="block"
    basketIcon.style.color="gold"
    showBasket = false
  }else{
    modalBasketBody.style.display="none"
    basketIcon.style.color="#fff"
    showBasket = true
  }
}
function addBasket(id){
    console.log(id);
}