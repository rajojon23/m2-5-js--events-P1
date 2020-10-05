// Exercise 1.1
// ------------
console.log('exercise 1.1');

document.body.style.fontFamily = "'Playfair Display', serif";
document.body.style.backgroundImage = "url('bg.png')";
document.body.style.color = "#A1393E";
document.body.style.fontSize = "30px";



let result_text = document.createTextNode("YOU LOSE"); 
let quicker_text = document.createTextNode("Be a quicker clicker!"); 




let result = document.querySelector(".result");

result.appendChild(quicker_text);

const start = performance.now();
let the_timeout = window.setTimeout(function(){
	
	document.body.appendChild(result_text);


}, 1000); 

window.addEventListener("click", function(){

	console.log("console clicked");

	const end = performance.now();//get the time it took in ms to click on the window

	if(end < 1000){
		result_text.nodeValue="YOU WIN";
	}

}, false);