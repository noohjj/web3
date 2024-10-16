// 305c17215accd85549d988fa105d89d8

const weather = (pos) => {
  const API_KEY = "305c17215accd85549d988fa105d89d8";
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  const tempEl = document.querySelector(".temp span");
  const cityEl = document.querySelector(".city span");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tempEl.innerText = data.main.temp;
      cityEl.innerText = data.name;
    });
};

navigator.geolocation.getCurrentPosition(weather);
