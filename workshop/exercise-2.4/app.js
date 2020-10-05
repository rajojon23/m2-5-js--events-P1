

document.body.style.fontFamily = "'Playfair Display', serif";
document.body.style.backgroundImage = "url('bg.png')";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundPosition = "center";

let main = document.querySelector("#main");
// main.style.marginTop = "50px";
main.style.backgroundColor = "#3463";
main.style.height = "50px";
main.style.width = "100%";



let start_button = document.createElement("button");
start_button.classList.add("start_button");
start_button.style.backgroundColor = "#5ba1b0";
start_button.style.height = "50px";
start_button.style.width = "100px";
start_button.style.margin = "0 auto";
start_button.style.display = "block";
start_button.style.border = "2px solid #dce2e1";
start_button.style.color = "#dce2e1";
start_button.style.transition = "all 0.5s";/*needed for animating scaling transforms*/



let start_text = document.createTextNode("START");
start_button.style.fontFamily = "'Playfair Display', serif";
start_button.style.fontSize = "20px";
start_button.appendChild(start_text);


main.appendChild(start_button);




start_button.addEventListener('mouseover', e =>{
	start_button.style.transform = "scale(1.5)";
	start_button.style.backgroundColor = "#dce2e1";
	start_button.style.color = "#5ba1b0";
	start_button.style.border = "2px solid #5ba1b0";
	start_button.style.cursor = "pointer";
});

start_button.addEventListener('mouseleave', e =>{
	start_button.style.transform = "scale(1)";
	start_button.style.backgroundColor = "#5ba1b0";
	start_button.style.border = "2px solid #dce2e1";
	start_button.style.color = "#dce2e1";
});

start_button.addEventListener('click', e =>{
	start_button.style.visibility = "hidden";
	create_buttons();
	start_chrono();
});

let result = "YOU LOSE...";


let amount = 7;
let stop_watch = 5;
let count_clicked = 0;






function start_chrono(){
	show_timer(stop_watch);/*show the timer without waiting for setInterval to kick in*/
	let chrono = setInterval(function(event){

		show_timer(stop_watch);

		
		if(stop_watch == 0){
			clearInterval(chrono);

			if(count_clicked < amount){
				color = "rgb(167, 0, 0)";
			}
			else{
				color = "#008000";
			}

			let result_text = document.createTextNode(result);
			let result_container = document.createElement("div");
			result_container.style.color = "#fff";
			result_container.style.backgroundColor = color;
			result_container.style.textAlign = "center";
			result_container.style.marginTop = "-50px";
			result_container.style.paddingTop = "10px";
			result_container.style.paddingBottom = "10px";
			result_container.style.fontSize = "30px";
			result_container.style.fontWeight = "bold";


			result_container.appendChild(result_text); 
			main.appendChild(result_container);


		}

		stop_watch--;
	}, 1000);	
}



function create_buttons(){
	for (let i = 0; i < amount; i++) {
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

		let rand_left = Math.floor(Math.random() * 95) ;
		let rand_top = Math.floor(Math.random() * 56) + 20;

		button.style.left = `${rand_left}%`;
		button.style.top = `${rand_top}%`;



		let button_num = document.createTextNode(i+1);
		button.appendChild(button_num);

		main.appendChild(button);


	}

	/*needs to be after the  previous for loop in order to work*/

	let buttons = document.querySelectorAll("button");

	buttons.forEach((button)=>{
		button.addEventListener("click", function(){
			
		
			let color = window.getComputedStyle(button).backgroundColor;
			
	 		
			if(color == "rgb(167, 0, 0)" && stop_watch > 0){//make sure button clicked is not green already
				button.style.backgroundColor = "#008000";

				count_clicked++;
			}
			if(count_clicked == amount){
				result = "YOU WIN!!!";
			}

		});

	});

	
}


function show_timer(time){
	let timer_container = document.querySelector(".timer_container");


	if((time > 0) && (result != "YOU WIN!!!")){


			if (timer_container == null) {
				timer_container = document.createElement("div");
				timer_container.classList.add("timer_container");
				main.appendChild(timer_container);	

			}
			else{


				timer_container.textContent = time;
				

				timer_container.style.height = "20px";
				timer_container.style.width = "100px";
				timer_container.style.margin = "0 auto";
				timer_container.style.display = "block";
				timer_container.style.marginTop = "-50px";
				timer_container.style.color = "#fff";
				timer_container.style.textAlign = "center";
				timer_container.style.fontSize = "30px";
				timer_container.style.fontWeight = "bold";

				

				main.appendChild(timer_container);
		}
	}
	else{
		if (timer_container != null) {/*make sure an existing element is being removed*/
			timer_container.remove();

		}
		stop_watch =0; /*skip countdown, since result is already 'win' (all buttons are clicked before time is up)*/
		
	}


}