let bars = document.querySelector("#bars");
let nav_links = document.querySelector(".nav_links");
bars.addEventListener("click", function () {
	nav_links.classList.toggle("show");
	bars.classList.toggle("fa-times");
});
