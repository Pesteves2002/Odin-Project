/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getData(city) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        config.API_KEY
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function UpdateInfo(city) {
  const body = document.body;
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

  let data = await getData(city);

  console.log(data);

  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather-container");
  if (data.cod != 400) {
    const coords = data.coord;
    const main = data.main;
    const country = data.sys.country;
    const weather = data.weather[0];
    const wind = data.wind;

    weatherContainer.innerText =
      "Status: " + weather.main + " Description:" + weather.description;

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    mainContainer.innerText =
      "Feels like: " + (main.feels_like - 273.15).toFixed(0);

    const windContainer = document.createElement("div");
    windContainer.classList.add("wind-container");

    windContainer.innerText = "Wind: " + wind.speed + " Deg: " + wind.deg;

    const countryContainer = document.createElement("div");
    countryContainer.classList.add("country-container");

    countryContainer.innerText =
      data.name + ", " + country + "\n " + coords.lat + ", " + coords.lon;

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIiArXG4gICAgICAgIGNpdHkgK1xuICAgICAgICBcIiZhcHBpZD1cIiArXG4gICAgICAgIGNvbmZpZy5BUElfS0VZXG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUluZm8oY2l0eSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgYm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxuICBjb25zdCBjaXR5U2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaXR5U2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJjaXR5LXNlYXJjaFwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNpdHlTZWFyY2gpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IFVwZGF0ZUluZm8oY2l0eVNlYXJjaC52YWx1ZSkpO1xuXG4gIGxldCBkYXRhID0gYXdhaXQgZ2V0RGF0YShjaXR5KTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb250YWluZXJcIik7XG4gIGlmIChkYXRhLmNvZCAhPSA0MDApIHtcbiAgICBjb25zdCBjb29yZHMgPSBkYXRhLmNvb3JkO1xuICAgIGNvbnN0IG1haW4gPSBkYXRhLm1haW47XG4gICAgY29uc3QgY291bnRyeSA9IGRhdGEuc3lzLmNvdW50cnk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXTtcbiAgICBjb25zdCB3aW5kID0gZGF0YS53aW5kO1xuXG4gICAgd2VhdGhlckNvbnRhaW5lci5pbm5lclRleHQgPVxuICAgICAgXCJTdGF0dXM6IFwiICsgd2VhdGhlci5tYWluICsgXCIgRGVzY3JpcHRpb246XCIgKyB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG5cbiAgICBtYWluQ29udGFpbmVyLmlubmVyVGV4dCA9XG4gICAgICBcIkZlZWxzIGxpa2U6IFwiICsgKG1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSkudG9GaXhlZCgwKTtcblxuICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpbmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIndpbmQtY29udGFpbmVyXCIpO1xuXG4gICAgd2luZENvbnRhaW5lci5pbm5lclRleHQgPSBcIldpbmQ6IFwiICsgd2luZC5zcGVlZCArIFwiIERlZzogXCIgKyB3aW5kLmRlZztcblxuICAgIGNvbnN0IGNvdW50cnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvdW50cnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvdW50cnktY29udGFpbmVyXCIpO1xuXG4gICAgY291bnRyeUNvbnRhaW5lci5pbm5lclRleHQgPVxuICAgICAgZGF0YS5uYW1lICsgXCIsIFwiICsgY291bnRyeSArIFwiXFxuIFwiICsgY29vcmRzLmxhdCArIFwiLCBcIiArIGNvb3Jkcy5sb247XG5cbiAgICBjb25zdCBjbG91ZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvdWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNsb3VkLWNvbnRhaW5lclwiKTtcblxuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQ29udGFpbmVyKTtcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvdW50cnlDb250YWluZXIpO1xuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvdWRDb250YWluZXIpO1xuICB9IGVsc2Uge1xuICAgIHdlYXRoZXJDb250YWluZXIuaW5uZXJUZXh0ID0gXCJDb3VsZG4ndCBsb2NhdGUgY2l0eVwiO1xuICB9XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcbn1cblxuVXBkYXRlSW5mbyhcImxpc2JvblwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==