var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setUpModeButtons();
	//square listeners
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected")
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct"
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				messageDisplay.textContent = "Try Again";
				this.style.background = "#232323";
			}
		})
	};
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change the colors of the page
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];		
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
};

resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	};
	//change each color to match given color
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());		
	}
	return arr;
}

function randomColor(){
	//number for r from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//number for g from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//number for b from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}