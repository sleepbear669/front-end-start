var redBox = getById('red');
var gameBox = getById('screen');
var score = 0;
console.log(redBox);
setInterval(moveBox, 1000);

function moveBox(){
	redBox.style.left = (Math.random() * windowSize.width) + 'px';
	redBox.style.top = (Math.random() * windowSize.heigth) + 'px';
};



gameBox.addEventListener("click", function(event) {
	if(event.target.id === "red") score++;
	else score--;
	getById("score").textContent = score;
})