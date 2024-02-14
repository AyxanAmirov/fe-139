const formBody = document.querySelector(".formBody");
const searchPhoto = document.querySelector("#search");
const searchBtn = document.querySelector(".btn");
const searched = document.querySelector(".photosPage");
const loader = document.querySelector(".loader");
const errMessage = document.querySelector(".errMessage")

let key = "24090419-925e057925ba4cc124682bb5f";

formBody.addEventListener("submit", search);

function search(e) {
  let value = searchPhoto.value.trim();
  fetch(`https://pixabay.com/api/?key=${key}&q=${value}`)
    .then((data) => data.json())
    .then((photos) => {
      console.log(photos);
      searched.innerHTML = "";
      if (photos.total !== 0) {
        errMessage.style.display = "none"
        photos.hits.forEach((datas) => addUi(datas));
      } else {
        loader.style.display = "flex";
        errMessage.style.display = "none"
        setTimeout(() => {
            errMessage.style.display = "block"
            loader.style.display = "none";
        }, 1000);
        
      }
    });

  e.preventDefault();
}

function addUi(value) {
  loader.style.display = "flex";

  setTimeout(() => {
    searched.innerHTML += `
    <div class="photoBox">
    <img
      src="${value.webformatURL}"
      alt=""
      class="element"
    />
    <p class="title">${value.tags}</p>
  </div>
    `;
    loader.style.display = "none";
  }, 1000);
}
