// Exercise 1.0
// ------------
console.log('exercise-1.2');

document.body.style.fontFamily = "'Playfair Display', serif";
document.body.style.backgroundImage = "url('bg.png')";
document.body.style.backgroundSize = "cover";
document.body.style.fontSize = "30px";
document.body.style.Color = "#979796";
// document.body.style.backgroundRepeat = "no-repeat";

let result_text = document.createTextNode("YOU LOSE"); 

let result = document.querySelector(".result");

let time_display = document.querySelector("#time");
let time_left = Math.floor(Math.random() * 5000);  
let time_text = document.createTextNode(Math.round(time_left/1000)); 

time_display.appendChild(time_text);
time_display.style.color = "#979796";
time_display.style.fontSize = "30px";





const start = performance.now();
let the_timeout = window.setTimeout(function(){
	
	result.appendChild(result_text);


}, time_left); 

window.addEventListener("click", function(){

	console.log("console clicked");

	const end = performance.now();//get the time it took in ms to click on the window

	if(end < time_left){
		result_text.nodeValue="YOU WIN";

		clearTimeout(the_timeout);//no need to wait for timeout anymore
		result.appendChild(result_text);
	}

}, false);
