var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random_btn = document.querySelector(".random");

setGradient();

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

function randomCSS() {
	color1.value = "#" + randomNum().toString();
	color2.vaule = "#" + randomNum().toString();
	console.log(color1.value + " " + color2.vaule)
	setGradient();
}

function randomNum() {
	let num = (Math.floor((Math.random() * 16777215) + 1));
	return (num.toString(16));
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random_btn.addEventListener("click", randomCSS);