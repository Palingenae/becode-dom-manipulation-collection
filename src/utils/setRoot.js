const root = document.getElementById("root");
const rootChild = document.createElement("section");
const rootTitle = document.createElement("h1");
const rootTitleText = document.createTextNode("Deezer Collection");

rootChild.appendChild(rootTitle);
rootTitle.appendChild(rootTitleText);

const headerEl = document.createElement("header");
const usernameEl = document.createElement("h1");

root.appendChild(rootChild);
rootChild.classList.add("section");
root.appendChild(headerEl);
headerEl.appendChild(usernameEl);