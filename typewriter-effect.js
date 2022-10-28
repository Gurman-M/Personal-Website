var i = 0;
var txt = "hey, i'm gurman."
var speed = 100;

window.onload = function typeWriter() {
    if (i < txt.length) {
        // pulls content from name-header and adds the characters from txt
        document.getElementById("name-header").innerHTML += txt.charAt(i);
        i++;
        // stops function execution until the speed var expires
        setTimeout(typeWriter, speed);
    }
}