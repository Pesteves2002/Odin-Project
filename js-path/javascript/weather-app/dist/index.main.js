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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIiArXG4gICAgICAgIGNpdHkgK1xuICAgICAgICBcIiZhcHBpZD1jZjljOWZmNTg3MjQ5YTEwYjg2ZDAzOWQyM2FlNDdiY1wiXG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG5cbiAgY29uc3QgY2xvdWRzID0gZGF0YS5jbG91ZHM7XG4gIGNvbnN0IGNvb3JkcyA9IGRhdGEuY29vcmRzO1xuICBjb25zdCBtYWluID0gZGF0YS5tYWluO1xuICBjb25zdCBjb3VudHJ5ID0gZGF0YS5zeXMuY291bnRyeTtcbiAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlcjtcbiAgY29uc3Qgd2luZCA9IGRhdGEud2luZDtcblxuICBVcGRhdGVJbmZvKGNsb3VkcywgY29vcmRzLCBtYWluLCBjb3VudHJ5LCB3ZWF0aGVyLCB3aW5kLCBjaXR5KTtcbn1cblxuZnVuY3Rpb24gVXBkYXRlSW5mbyhjbG91ZHMsIGNvb3JkcywgbWFpbiwgY291bnRyeSwgd2VhdGhlciwgd2luZCwgY2l0eSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XG59XG5cbmdldERhdGEoXCJsaXNib25cIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=