// Exercise 1.0
// ------------
console.log('exercise-1');
document.body.style.fontFamily = "'Playfair Display', serif";
document.body.style.backgroundImage = "url('bg.png')";
document.body.style.color = "#4C5464";
document.body.style.backgroundSize = "cover";
document.body.style.fontSize = "30px";


let result_text = document.createTextNode("YOU LOSE"); 

let result = document.querySelector(".result");

const start = performance.now();
let the_timeout = window.setTimeout(function(){
	
	result.appendChild(result_text);


}, 1000); 

window.addEventListener("click", function(){

	console.log("console clicked");

	const end = performance.now();//get the time it took in ms to click on the window

	if(end < 1000){
		result_text.nodeValue="YOU WIN";
	}

}, false);

