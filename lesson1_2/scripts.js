console.log("Hello from js file");

// DOM - Document Object Model

// alert("Hello") //popup

console.log("Hello - log alert"); // write log to console

document.write("<div>Hey from js 99</div>"); // add div to html via js, add to the end of html - body

document.getElementById("myName").style.color = "blue"; //add color like css for object with id

document.getElementById("myName").style.backgroundColor = "yellow";

// innerHTML = change the object, and innerText = changing only text (string) 
document.getElementById("welcome").innerHTML = "Welcome from js 2";

document.getElementById("alex").innerText = "<p>text from innerText</p>";

document.getElementById("alex").innerHTML = "<p>text from innerHTML</p>";

// * for accessability usage label must be = id input

// put value into a input element
document.getElementById("city").value = "Rishon";

// take value from input:
console.log(document.getElementById("city").value);


// events  - can be from hardware or from software 
// usually hover, click, move... ... 

// function - set of orders that can be reused
// function sayHey() { console.log("Hey");}
// call the function: sayHey();


// method = function that in use by specific object
// document.getElementById("city")... ;

// method - something that exist and we only use it. Function - we are creating 

// Event - אירוע חומרה/תוכנה שמתרחש
// Function - פונקציה, סט פקודות שניתן לחזור עליו
// Method - פונקציה שמשוייכת לאובייקט כלשהו

function clickMy() { 
	alert("Button Clicked!");
	console.log ("Button Clicked!");
}

// this function changing the text size of element lorem. For example input 50px changes text size to 50px. 
function changeSize() {
	document.getElementById("lorem").style.fontSize = document.getElementById("size").value;
}
