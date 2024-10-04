const users = [
  {
    id: 0,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3xXWB1ucbPuH9GIkL1KhiJujxoLhk7VRsg&s",
    username: "user 1",
    imgUrl:
      "https://png.pngtree.com/thumb_back/fw800/background/20230515/pngtree-blue-clouds-in-the-sky-wallpaper-stock-videos-e-broll-footage-image_2541971.jpg",
  },
  {
    id: 1,
    avatarUrl:
      "https://woorisajin.mycafe24.com/wp-content/uploads/2020/07/%EA%B0%95%EB%82%A8%EC%97%AD%ED%94%84%EB%A1%9C%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84-683x1024.jpg",
    username: "user 2",
    imgUrl:
      "https://www.shutterstock.com/image-photo/there-clouds-sky-rainbow-pastel-260nw-1551257078.jpg",
  },
  {
    id: 2,
    avatarUrl:
      "https://www.icreta.com/files/attach/images/319/275/055/8e2c1590a474a9afb78c4cb23a9af5b2.jpg",
    username: "user 3",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3ta4wRanvq9LGI9oG8nU9X3W_ldgQPlCVw&s",
  },
];

const wrapEl = document.querySelector(".wrap");
const avatarAll = document.querySelectorAll(".avatar");
const usernameAll = document.querySelectorAll(".username");
const bgAll = document.querySelectorAll(".bg");
const menuEl = document.querySelector(".menu");
const menuwrapEl = document.querySelector(".menu_wrap");
const isClicked = true;

for (let i = 0; i < users.length; i++) {
  avatarAll[i].innerHTML = `<img src="${users[i].avatarUrl}">`;
  usernameAll[i].innerText = users[i].username;
  bgAll[i].innerHTML = `<img src="${users[i].imgUrl}">`;
}

const heartHandler = (e) => {
  if (e.target.classList.contains("fa-regular")) {
    console.log("heart");
    e.target.parentNode.innerHTML = `<i class="fa-solid fa-heart full_heart"></i>`;
  } else if (e.target.classList.contains("full_heart")) {
    e.target.parentNode.innerHTML = `<i class="fa-regular fa-heart"></i>`;
  }
};

const menuHandler = () => {
  if (isClicked === true) {
    menuwrapEl.classList.add("menu_active");
    isClicked = false;
  } else if (isClicked === false) {
    menuwrapEl.classList.remove("menu_active");
    isClicked = true;
  }
};

wrapEl.addEventListener("click", heartHandler);
menuEl.addEventListener("click", menuHandler);
