// <button onclick="alert('Hello World')">Click Me</button> (HTML)

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.background = "blue";
  alert("Hello World");
});
