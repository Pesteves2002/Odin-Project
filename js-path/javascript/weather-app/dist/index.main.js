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
        "&appid=cf9c9ff587249a10b86d039d23ae47bc"
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

  const coords = data.coord;
  const main = data.main;
  const country = data.sys.country;
  const weather = data.weather[0];
  const wind = data.wind;

  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather-container");

  weatherContainer.innerText =
    "Status: " + weather.main + " Description:" + weather.description;

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  mainContainer.innerText = "Feels like: " + main.feels_like;

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

  body.appendChild(header);
  body.appendChild(weatherContainer);
}

UpdateInfo("lisbon");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIiArXG4gICAgICAgIGNpdHkgK1xuICAgICAgICBcIiZhcHBpZD1jZjljOWZmNTg3MjQ5YTEwYjg2ZDAzOWQyM2FlNDdiY1wiXG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUluZm8oY2l0eSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgYm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxuICBjb25zdCBjaXR5U2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaXR5U2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJjaXR5LXNlYXJjaFwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNpdHlTZWFyY2gpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IFVwZGF0ZUluZm8oY2l0eVNlYXJjaC52YWx1ZSkpO1xuXG4gIGxldCBkYXRhID0gYXdhaXQgZ2V0RGF0YShjaXR5KTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICBjb25zdCBjb29yZHMgPSBkYXRhLmNvb3JkO1xuICBjb25zdCBtYWluID0gZGF0YS5tYWluO1xuICBjb25zdCBjb3VudHJ5ID0gZGF0YS5zeXMuY291bnRyeTtcbiAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXTtcbiAgY29uc3Qgd2luZCA9IGRhdGEud2luZDtcblxuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb250YWluZXJcIik7XG5cbiAgd2VhdGhlckNvbnRhaW5lci5pbm5lclRleHQgPVxuICAgIFwiU3RhdHVzOiBcIiArIHdlYXRoZXIubWFpbiArIFwiIERlc2NyaXB0aW9uOlwiICsgd2VhdGhlci5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG5cbiAgbWFpbkNvbnRhaW5lci5pbm5lclRleHQgPSBcIkZlZWxzIGxpa2U6IFwiICsgbWFpbi5mZWVsc19saWtlO1xuXG4gIGNvbnN0IHdpbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5kLWNvbnRhaW5lclwiKTtcblxuICB3aW5kQ29udGFpbmVyLmlubmVyVGV4dCA9IFwiV2luZDogXCIgKyB3aW5kLnNwZWVkICsgXCIgRGVnOiBcIiArIHdpbmQuZGVnO1xuXG4gIGNvbnN0IGNvdW50cnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb3VudHJ5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5LWNvbnRhaW5lclwiKTtcblxuICBjb3VudHJ5Q29udGFpbmVyLmlubmVyVGV4dCA9XG4gICAgZGF0YS5uYW1lICsgXCIsIFwiICsgY291bnRyeSArIFwiXFxuIFwiICsgY29vcmRzLmxhdCArIFwiLCBcIiArIGNvb3Jkcy5sb247XG5cbiAgY29uc3QgY2xvdWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG91ZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvdWQtY29udGFpbmVyXCIpO1xuXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZENvbnRhaW5lcik7XG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRyeUNvbnRhaW5lcik7XG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvdWRDb250YWluZXIpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcbn1cblxuVXBkYXRlSW5mbyhcImxpc2JvblwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==