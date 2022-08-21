/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxLQUFLLFNBQVMsZUFBZTtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksVUFBVTtBQUN0QjtBQUNBLFlBQVksT0FBTzs7QUFFbkIsNENBQTRDLGNBQWMsY0FBYyxvQkFBb0I7O0FBRTVGO0FBQ0E7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBLHVDQUF1QyxZQUFZLE9BQU8sU0FBUzs7QUFFbkU7QUFDQTs7QUFFQSxvQ0FBb0MsVUFBVSxJQUFJLFFBQVEsS0FBSyxXQUFXLElBQUksV0FBVzs7QUFFekY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtjb25maWcuQVBJX0tFWX1gXG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiBVcGRhdGVJbmZvKGNpdHkpIHtcbiAgY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcbiAgYm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxuICBjb25zdCBjaXR5U2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaXR5U2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJjaXR5LXNlYXJjaFwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNpdHlTZWFyY2gpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IFVwZGF0ZUluZm8oY2l0eVNlYXJjaC52YWx1ZSkpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKGNpdHkpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNvbnRhaW5lclwiKTtcbiAgaWYgKGRhdGEuY29kICE9PSA0MDApIHtcbiAgICBjb25zdCBjb29yZHMgPSBkYXRhLmNvb3JkO1xuICAgIGNvbnN0IHsgbWFpbiB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGNvdW50cnkgfSA9IGRhdGEuc3lzO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF07XG4gICAgY29uc3QgeyB3aW5kIH0gPSBkYXRhO1xuXG4gICAgd2VhdGhlckNvbnRhaW5lci5pbm5lclRleHQgPSBgU3RhdHVzOiAke3dlYXRoZXIubWFpbn0gRGVzY3JpcHRpb246JHt3ZWF0aGVyLmRlc2NyaXB0aW9ufWA7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcblxuICAgIG1haW5Db250YWluZXIuaW5uZXJUZXh0ID0gYEZlZWxzIGxpa2U6ICR7KG1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSkudG9GaXhlZChcbiAgICAgIDBcbiAgICApfWA7XG5cbiAgICBjb25zdCB3aW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5kLWNvbnRhaW5lclwiKTtcblxuICAgIHdpbmRDb250YWluZXIuaW5uZXJUZXh0ID0gYFdpbmQ6ICR7d2luZC5zcGVlZH0gRGVnOiAke3dpbmQuZGVnfWA7XG5cbiAgICBjb25zdCBjb3VudHJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb3VudHJ5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5LWNvbnRhaW5lclwiKTtcblxuICAgIGNvdW50cnlDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7ZGF0YS5uYW1lfSwgJHtjb3VudHJ5fVxcbiAke2Nvb3Jkcy5sYXR9LCAke2Nvb3Jkcy5sb259YDtcblxuICAgIGNvbnN0IGNsb3VkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjbG91ZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvdWQtY29udGFpbmVyXCIpO1xuXG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRDb250YWluZXIpO1xuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRyeUNvbnRhaW5lcik7XG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG91ZENvbnRhaW5lcik7XG4gIH0gZWxzZSB7XG4gICAgd2VhdGhlckNvbnRhaW5lci5pbm5lclRleHQgPSBcIkNvdWxkbid0IGxvY2F0ZSBjaXR5XCI7XG4gIH1cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xufVxuXG5VcGRhdGVJbmZvKFwibGlzYm9uXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9