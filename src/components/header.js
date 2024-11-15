function header(user) {
    const headerEl = document.createElement("header");
    const usernameEl = document.createElement("h1");
    const username = document.createTextNode(user);

    root.appendChild(headerEl);
    header.appendChild(usernameEl);
    usernameEl.appendChild(user["name"]);
}

export default header;