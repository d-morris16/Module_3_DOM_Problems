//Create an HTML page that has a dropdown list with three items
//then write a JavaScript function that displays the number items 
//and displays the item in the list when you select 
//from the dropdown




function selector() {
	const mySport = document.getElementById("sports");
	const numOfItems = document.getElementById("sports").length;
	console.log(numOfItems)
	const myOption = mySport.options[mySport.selectedIndex].value;

	let stringOfOptions = "";

	for(i = 0; i < mySport.length; i++) {
		stringOfOptions = stringOfOptions + mySport.options[i].text + ", ";
	}

	document.getElementById("youSelect").innerHTML = stringOfOptions;
}