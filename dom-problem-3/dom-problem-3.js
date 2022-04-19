//Create an HTML page that has a dropdown list with three items
//then write a JavaScript function that displays the number items 
//and displays the item in the list when you select 
//from the dropdown

/*
Step 1: Create an HTML page with a dropdown list of three items.
Step 2: Create a function that will execute with the onchange of the dropdown list.
Step 3: Create a constant from the "id" of the dropdown list.
Step 4: Create a constant of the number of options in the dropdown list. 
Step 5: Print the number of options in the dropdown list to the console.
Step 6: Create a variable that will take in the array of options as a string.
Step 7: Create a "for loop" that will loop through each option and grab the text.
Step 8: Print the values from the "for loop" into the varible.
*/

function mySelector(){
	const myProteins = document.getElementById("diffProteins");
	const numOfProteins = document.getElementById("diffProteins").length;
	console.log(numOfProteins);

	let myChoice = "";

	for (i = 0; i < myProteins.length; i++) {
		myChoice = myChoice + myProteins.options[i].text + ", ";
	}
	document.getElementById("choice").innerHTML = myChoice;
}