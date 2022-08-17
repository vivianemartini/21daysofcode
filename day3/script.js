var btn = document.getElementById("btn");
var btnText = document.getElementById("btnText");

btn.onclick = function() {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
}