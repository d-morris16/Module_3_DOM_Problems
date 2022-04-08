const body = document.body;
const div = document.getElementById("div");
const paragraph = document.getElementById("paragraph");
const button = document.getElementById("button");


document.getElementById("button").onclick = changeColor;

function changeColor () {
	document.getElementById("paragraph").style.backgroundColor = "red";
}