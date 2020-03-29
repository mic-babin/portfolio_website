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
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// EXPAND FUNCTION
// Open the expanded slider
document.querySelector('#expand-btn').addEventListener('click', function () {
  let expandables = document.querySelectorAll('.expandables')
  let hide = document.querySelectorAll('.hide')
  let show = document.querySelectorAll('.show')
  let expSize = document.querySelectorAll('.lrg-img')
  for (i = 0; i < expandables.length; i++) {
    expandables[i].style.zIndex = "3";
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.display = "none";
  }
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "block";
  }
  for (i = 0; i < expSize.length; i++) {
    expSize[i].classList.add("exp-size");
  }
  document.querySelector('.slider').classList.add("slider-exp");
  document.querySelector('.slider').classList.remove("pb-3");

});

// Close the expanded slider
document.querySelector('#close-btn').addEventListener('click', function () {
  let expandables = document.querySelectorAll('.expandables')
  let hide = document.querySelectorAll('.hide')
  let show = document.querySelectorAll('.show')
  let expSize = document.querySelectorAll('.lrg-img')
  for (i = 0; i < expandables.length; i++) {
    expandables[i].style.zIndex = "0";
  }
  for (i = 0; i < hide.length; i++) {
    hide[i].style.display = "block";
  }
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "none";
  }
  for (i = 0; i < expSize.length; i++) {
    expSize[i].classList.remove("exp-size");
  }
  document.querySelector('.slider').classList.remove("slider-exp");

  document.querySelector("#expand-window").style.display = "none";
  document.querySelector('.slider').classList.add("pb-3");
});