// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.cssText = "color:red";
paragraph.classList.add("content");
paragraph.textContent = "Hey I'm red!";

container.appendChild(paragraph);

const blue = document.createElement("h3");
blue.style.cssText = "color:blue";
blue.classList.add("content");
blue.textContent = "I'm blue h3!";

container.appendChild(blue);

const box = document.createElement("div");
box.style.border = " black";
box.style.background = "pink";

const text = document.createElement("h1");
text.classList.add("content");
text.textContent = "I'm in a div";

box.appendChild(text);

const text2 = document.createElement("p");
text2.classList.add("content");
text2.textContent = "Me too";
box.appendChild(text2);

container.appendChild(box);
