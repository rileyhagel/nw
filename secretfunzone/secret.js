// Password
var password = "dopey dan";

var content = document.getElementById("content");
var fail = document.getElementById("fail");

var stuff = `<iframe src="stuff/JStetris/tetris.html" width="302" height="311">Loading...</iframe>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeg9Q7Tx-FMNmSGlgOHLk2MPdJeRBE3OitaUGzP1NQvAc_7zg/viewform?embedded=true" style="width:400;max-width:100%;height:311px;" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
`;

function open() {
    content.innerHTML = stuff;
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