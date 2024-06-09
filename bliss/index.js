let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

let btn = document.querySelector("checkbox");

let modeBtn = document.querySelector("#theme");
let body = document.querySelector("body");

let currMode = "Light"; //dark
modeBtn.addEventListener("click", () => {
   if(currMode === "Light") {
    currMode = "Dark";
    body.style.background = "#3c3c3c";
    alert("you are in Dark Mode!")
   } else {
    currMode = "Light";
    body.style.background = "#fff";
    alert("you are in Light Mode");
   }

   console.log(currMode)
});
