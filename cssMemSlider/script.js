let order = 1;
showSlide(order);
function currentSlide(n) {
  showSlide(order = n);
}
function showSlide(n){
  let slides = document.getElementsByClassName("item");
  let dotsPages = document.getElementsByClassName("dots");
  if(n > slides.length) order = 1;
  if (n < 1) order = slides.length;
  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dotsPages.length; i++) {
        dotsPages[i].className = dotsPages[i].className.replace(" active", "");
    }
  slides[order - 1].style.display = "block";
  dotsPages[order - 1].className += " active";
}