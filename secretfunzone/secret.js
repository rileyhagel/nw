// Password
var password = "twelve the chimp";

var content = document.getElementById("content");
var fail = document.getElementById("fail");

var constCont = `<p>Hello, and welcome to the Secret Fun Zone!<br>
I am still working on this, so it might not be much different from last week. However, I hope to improve it with future issues of the <i>Neighborhood Weekly</i>.</p>`;
var games = `<iframe src="stuff/JStetris/tetris.html" width="302" height="311">Loading...</iframe>
<p>New game coming soon: Deliver It! Help deliver the Neighborhood Weekly!</p>`;
var weekly = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeg9Q7Tx-FMNmSGlgOHLk2MPdJeRBE3OitaUGzP1NQvAc_7zg/viewform?embedded=true" style="width:400;max-width:100%;height:311px;" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;

function open() {
    content.innerHTML = constCont + "<hr>" + weekly + "<h2>Games</h2>" + games;
}
function lock() {
    fail.innerHTML = "Invalid Password!";
}

var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = document.getElementById("password").value;
    form.reset();
    if (input === password) {
        open();
    } else {
        lock();
    }
});