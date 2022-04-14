function selector() {
	let text = document.getElementById("sports").value;
	document.getElementById("youSelect").innerHTML = 
	"You selected: " + text; 
}

document.getElementById("onclick").onclick = numOfValues;

function numOfValues() {
	let x = document.getElementById("sports").options.length;
	document.getElementById("numOfItems").innerHTML = 
	"You have " + x + " options to choose from";
}