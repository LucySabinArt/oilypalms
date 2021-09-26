
function revealCredits () {

  var credits = document.getElementById('credits')
  var plusMinus = document.getElementById('plus_minus')

if (plusMinus.innerText === '+'){
  credits.style.display = 'inline'
  plusMinus.innerText = '–'
}

else {
  credits.style.display = 'none'
  plusMinus.innerText='+'
}

}

//SLIDESHOW STYLES

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
