const userBody = document.querySelector(".user");
const followersBody = document.querySelector(".followers");
const reposNum = document.querySelector("#commonRepos");
const followersNum = document.querySelector("#commonFollowers");
const gists = document.querySelector("#publicGists");
const followingNum = document.querySelector("#commonFollowing");
const searchBtn = document.querySelector(".btn");
const filterInput = document.querySelector(".search-input");

let url = "https://api.github.com/users/muradorucov";
fetch(url)
  .then((data) => data.json())
  .then((user) => {
    userUi(user);
  });

let urlFollowers = "https://api.github.com/users/muradorucov/followers";

function defaultUi(){
  fetch(urlFollowers)
  .then((data) => data.json())
  .then((follow) => {
    follow.forEach((followers) => {
      followersBody.innerHTML += `
                <div class="d-flex gap-20">
                  <img src="${followers.avatar_url}" alt="" class="follower-img" />
                  <div class="follower-inform">
                    <p class="follower-name">${followers.login}</p>
                    <p class="gitHub-link">${followers.html_url}</p>
                  </div>
                </div>
       `;
    });
  });
}
defaultUi()
searchBtn.addEventListener("click", (e) => {
  let findedUser = filterInput.value;
  fetch(`https://api.github.com/users/${findedUser}`)
    .then((data) => data.json())
    .then((userInform) => {
      
        if(userInform.message == "Not Found"){
          alert("istifadəçi tapılmadı")
          defaultUi()
        }else{
          userUi(userInform)
          
        }
     
    });
    

  fetch(`https://api.github.com/users/${findedUser}/followers`)
    .then((data) => data.json())
    .then((follow) => {
      followersBody.innerHTML = "";
      follow.forEach((followers) => {
        followersBody.innerHTML += `
                <div class="d-flex gap-20">
                  <img src="${followers.avatar_url}" alt="" class="follower-img" />
                  <div class="follower-inform">
                    <p class="follower-name">${followers.login}</p>
                    <p class="gitHub-link">${followers.html_url}</p>
                  </div>
                </div>
       `;
      });
    });

  e.preventDefault();
});

function userUi(user) {
  reposNum.innerHTML = " ";
  followersNum.innerHTML = " ";
  gists.innerHTML = " ";
  followingNum.innerHTML = " ";
  userBody.innerHTML = " ";

  reposNum.innerHTML = `
  <p class="num">${user.public_repos}</p>
  <p class="repo">repos</p>
`;
  followersNum.innerHTML = `
  <p class="num">${user.followers}</p>
  <p class="repo">Followers</p>
`;
  gists.innerHTML = `
  <p class="num">${user.public_gists}</p>
  <p class="repo">Public_gists</p>
`;
  followingNum.innerHTML = `
  <p class="num">${user.following}</p>
  <p class="repo">Following</p>
`;
  userBody.innerHTML = `
<div class="user-inform">
  <div class="name-coverPhoto">
     <img src="${user.avatar_url}" alt="" class="user-avatar" />
     <div class="user-names">
       <h4>${user.name}</h4>
       <p class="user-twitter">@${user.twitter_username}</p>
     </div>
  </div>
  <div><button class="follow-btn"><a href="${user.html_url}">Follow</a></button></div>
</div>
<div class="bio-location">
  <p class="bio">${user.bio}</p>
  <i class="fa-solid fa-building icon-color"></i>
  <div class="d-flex gap-10 ">
    <i class="fa-solid fa-location-dot icon-color"></i>
    <p class="location">${user.location}</p>
  </div>
  <div class="d-flex gap-10 ">
    <i class="fa-solid fa-link icon-color"></i>
    <a href="${user.blog}" class="link">${user.blog}</a>
  </div>
</div>
`;
}
