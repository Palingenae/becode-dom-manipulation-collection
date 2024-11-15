const root = document.getElementById("root");
const rootChild = document.createElement("section");
const rootTitle = document.createElement("h1");
const rootTitleText = document.createTextNode("Deezer Collection");

root.appendChild(rootChild);
rootChild.appendChild(rootTitle);
rootChild.classList.add("section");
rootTitle.appendChild(rootTitleText);