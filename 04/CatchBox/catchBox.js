var redBox = getById('red');
var gameBox = getById('screen');
var score = 0;
setInterval(moveBox, 100);

gameBox.addEventListener("click", function(event) {
	if(event.target.id === "red") score++;
	else score--;
	getById("score").textContent = score;
});

function moveBox(){
	var width = gameBox.clientWidth;
	var heigth = gameBox.clientHeight;
	redBox.style.left = (Math.random() * (width-100)) + 'px';
	redBox.style.top = (Math.random() * (heigth-100)) + 'px';
};

