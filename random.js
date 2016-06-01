var wrapper = document.getElementById("wrapper");
var left = document.getElementById("left");
var right = document.getElementById("right");









wrapper.addEventListener("click", function(e) {
	if (Math.floor(Math.random() * (100-0)) + 0 >= 50) {
		left.classList.add("hide");
		right.classList.remove("hide");
	} else {
		right.classList.add("hide");
		left.classList.remove("hide");
	}
});