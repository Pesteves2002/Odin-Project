async function getData(city) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=cf9c9ff587249a10b86d039d23ae47bc"
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  const clouds = data.clouds;
  const coords = data.coords;
  const main = data.main;
  const country = data.sys.country;
  const weather = data.weather;
  const wind = data.wind;

  UpdateInfo(clouds, coords, main, country, weather, wind, city);
}

function UpdateInfo(clouds, coords, main, country, weather, wind, city) {
  const body = document.body;

  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather-container");

  const mainContainer = document.createElement("div");
  weatherContainer.classList.add("main-container");

  body.appendChild(weatherContainer);
}

getData("lisbon");
