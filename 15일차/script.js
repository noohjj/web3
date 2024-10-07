const headerEl = document.querySelector("header");
const secEl_2 = document.querySelector(".sec_2");
const titleEl = document.querySelector(".title");

const handleScroll = () => {
  const pageY = pageYOffset;
  //=>스크롤바의 높이값을 px단위로 알아옴
  console.log(pageY);
  const secTop_2 = secEl_2.offsetTop;
  // =>엘리먼트의 top값을 px단위로 알아옴
  console.log(secTop_2);

  if (pageY > 300) {
    headerEl.classList.add("header_active");
  } else {
    headerEl.classList.remove("header_active");
  }

  if (pageY >= secTop_2 / 2) {
    titleEl.classList.add("title_active");
  } else {
    titleEl.classList.remove("title_active");
  }
};

window.addEventListener("scroll", handleScroll);
