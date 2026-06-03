let name = localStorage.getItem("username");

function setName() {
    name = prompt("What is your name?\nThis is used to display custom messages on the site and will be stored locally in your browser. No data is sent to the server from this dialog box.");
    localStorage.setItem("username", name);
}

function whoisit() {
    if (name === null) {
        name = "please <a href='javascript:setName();location.reload();'>Enter your name</a>. Your name is not sent to the server, and is used to display custom messages.";
    }
    return name;
}
