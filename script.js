function change_color() {
	let object = document.getElementById("line_1");
	object.classList.toggle("makeRed");
}

document.getElementById("button_1").addEventListener("click", change_color);


function hoverOrange() {
	let object = document.getElementById("circle_1");
	object.classList.toggle("makeOrange");
}

document.getElementById("circle_1").addEventListener("mouseover", hoverOrange, false);
document.getElementById("circle_1").addEventListener("mouseout", hoverOrange, false);