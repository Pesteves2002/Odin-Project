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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiICtcbiAgICAgICAgY2l0eSArXG4gICAgICAgIFwiJmFwcGlkPVwiICtcbiAgICAgICAgY29uZmlnLkFQSV9LRVlcbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlSW5mbyhjaXR5KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IGNpdHlTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNpdHlTZWFyY2guY2xhc3NMaXN0LmFkZChcImNpdHktc2VhcmNoXCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2l0eVNlYXJjaCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gVXBkYXRlSW5mbyhjaXR5U2VhcmNoLnZhbHVlKSk7XG5cbiAgbGV0IGRhdGEgPSBhd2FpdCBnZXREYXRhKGNpdHkpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIGNvbnN0IGNvb3JkcyA9IGRhdGEuY29vcmQ7XG4gIGNvbnN0IG1haW4gPSBkYXRhLm1haW47XG4gIGNvbnN0IGNvdW50cnkgPSBkYXRhLnN5cy5jb3VudHJ5O1xuICBjb25zdCB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdO1xuICBjb25zdCB3aW5kID0gZGF0YS53aW5kO1xuXG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNvbnRhaW5lclwiKTtcblxuICB3ZWF0aGVyQ29udGFpbmVyLmlubmVyVGV4dCA9XG4gICAgXCJTdGF0dXM6IFwiICsgd2VhdGhlci5tYWluICsgXCIgRGVzY3JpcHRpb246XCIgKyB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcblxuICBtYWluQ29udGFpbmVyLmlubmVyVGV4dCA9IFwiRmVlbHMgbGlrZTogXCIgKyBtYWluLmZlZWxzX2xpa2U7XG5cbiAgY29uc3Qgd2luZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIndpbmQtY29udGFpbmVyXCIpO1xuXG4gIHdpbmRDb250YWluZXIuaW5uZXJUZXh0ID0gXCJXaW5kOiBcIiArIHdpbmQuc3BlZWQgKyBcIiBEZWc6IFwiICsgd2luZC5kZWc7XG5cbiAgY29uc3QgY291bnRyeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvdW50cnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvdW50cnktY29udGFpbmVyXCIpO1xuXG4gIGNvdW50cnlDb250YWluZXIuaW5uZXJUZXh0ID1cbiAgICBkYXRhLm5hbWUgKyBcIiwgXCIgKyBjb3VudHJ5ICsgXCJcXG4gXCIgKyBjb29yZHMubGF0ICsgXCIsIFwiICsgY29vcmRzLmxvbjtcblxuICBjb25zdCBjbG91ZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjbG91ZC1jb250YWluZXJcIik7XG5cbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQ29udGFpbmVyKTtcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3VudHJ5Q29udGFpbmVyKTtcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG91ZENvbnRhaW5lcik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xufVxuXG5VcGRhdGVJbmZvKFwibGlzYm9uXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9