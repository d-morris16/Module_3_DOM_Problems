

document.getElementById("button1").onclick = getLink;

function getLink() {
	const anchor = document.getElementById("link");
	let text = anchor.getAttribute("href");
	document.getElementById("theLink").innerHTML = text;
}