/* Source: https://www.w3schools.com/howto/howto_js_typewriter.asp*/
var i = 0;
var txt = 'Every good look begins with a great foundation.';
var speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/* --------------------------------------- */

/* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav */
function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}