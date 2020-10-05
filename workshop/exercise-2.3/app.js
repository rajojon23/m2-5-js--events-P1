

let main = document.querySelector("#main");


for (let i = 0; i < 20; i++) {
	let button = document.createElement("button");
	button.style.border = "none";
	button.style.backgroundColor = "#a70000";
	button.style.height = "50px";
	button.style.width = "50px";
	button.style.margin = "1px";
	button.style.color = "#fff";
	button.style.fontWeight = "bold";
	button.style.fontSize = "25px";
	button.style.borderRadius = "50px";
	button.style.position = "absolute";

	let rand_left = Math.floor(Math.random() * 95);
	let rand_top = Math.floor(Math.random() * 76);

	button.style.left = `${rand_left}%`;
	button.style.top = `${rand_top}%`;



	let button_num = document.createTextNode(i+1);
	button.appendChild(button_num);

	main.appendChild(button);


}


let buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
	button.addEventListener("click", function(){
		
	
		let color = window.getComputedStyle(button).backgroundColor;

		if(color == "rgb(0, 128, 0)"){
			button.style.backgroundColor = "#a70000";
		}
		else{
			button.style.backgroundColor = "#008000";
 
		}

	});

});