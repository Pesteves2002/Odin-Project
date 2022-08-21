async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function UpdateInfo(city) {
  const { body } = document;
  body.replaceChildren();

  const header = document.createElement("div");
  header.classList.add("header");

  const form = document.createElement("div");
  form.classList.add("form");

  const citySearch = document.createElement("input");
  citySearch.classList.add("city-search");
  const button = document.createElement("button");

  form.appendChild(citySearch);
  form.appendChild(button);
  header.appendChild(form);

  button.addEventListener("click", () => UpdateInfo(citySearch.value));

  const data = await getData(city);

  console.log(data);

  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather-container");
  if (data.cod !== 400) {
    const coords = data.coord;
    const { main } = data;
    const { country } = data.sys;
    const weather = data.weather[0];
    const { wind } = data;

    weatherContainer.innerText = `Status: ${weather.main} Description:${weather.description}`;

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    mainContainer.innerText = `Feels like: ${(main.feels_like - 273.15).toFixed(
      0
    )}`;

    const windContainer = document.createElement("div");
    windContainer.classList.add("wind-container");

    windContainer.innerText = `Wind: ${wind.speed} Deg: ${wind.deg}`;

    const countryContainer = document.createElement("div");
    countryContainer.classList.add("country-container");

    countryContainer.innerText = `${data.name}, ${country}\n ${coords.lat}, ${coords.lon}`;

    const cloudContainer = document.createElement("div");
    cloudContainer.classList.add("cloud-container");

    weatherContainer.appendChild(mainContainer);
    weatherContainer.appendChild(windContainer);
    weatherContainer.appendChild(countryContainer);
    weatherContainer.appendChild(cloudContainer);
  } else {
    weatherContainer.innerText = "Couldn't locate city";
  }
  body.appendChild(header);
  body.appendChild(weatherContainer);
}

UpdateInfo("lisbon");
